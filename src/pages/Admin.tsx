import { useEffect, useState } from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import {
    Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useContent } from "@/hooks/useContent";

interface Inquiry {
    id: number;
    name: string;
    phone: string;
    message: string | null;
    status: string;
    createdAt: string;
}

const Admin = () => {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Get dynamic content from backend
    const { data: contentData, refetch: refetchContent, isLoading: isContentLoading } = useContent();
    const [heroContent, setHeroContent] = useState({ title: "", subtitle: "", badge: "" });

    useEffect(() => {
        if (contentData?.data?.hero) {
            setHeroContent({
                title: contentData.data.hero.title || "",
                subtitle: contentData.data.hero.subtitle || "",
                badge: contentData.data.hero.badge || "",
            });
        }
    }, [contentData]);

    const fetchInquiries = async () => {
        try {
            const response = await fetch("/api/v1/inquiries");
            if (!response.ok) throw new Error("Failed to fetch data");
            const result = await response.json();
            setInquiries(result.data);
        } catch (error) {
            toast.error("데이터를 불러오는데 실패했습니다.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    const handleStatusChange = async (id: number, newStatus: string) => {
        try {
            const response = await fetch(`/api/v1/inquiries/${id}/status`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            if (!response.ok) throw new Error("Failed to update status");
            toast.success("상태가 변경되었습니다.");
            setInquiries((prev) => prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq)));
        } catch (error) {
            toast.error("상태 업데이트에 실패했습니다.");
        }
    };

    const handleContentSave = async () => {
        try {
            const items = [
                { section: "hero", key: "title", value: heroContent.title },
                { section: "hero", key: "subtitle", value: heroContent.subtitle },
                { section: "hero", key: "badge", value: heroContent.badge },
            ];

            const response = await fetch("/api/v1/content", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items }),
            });

            if (!response.ok) throw new Error("Failed to save content");
            toast.success("콘텐츠가 저장되었습니다.");
            refetchContent();
        } catch (error) {
            toast.error("콘텐츠 저장에 실패했습니다.");
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="border-b bg-card">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-display font-bold text-foreground">관리자 대시보드</h1>
                    <a href="/" className="text-sm text-muted-foreground hover:text-foreground">랜딩페이지로 돌아가기</a>
                </div>
            </header>

            <main className="flex-1 container mx-auto px-6 py-12">
                <Tabs defaultValue="inquiries" className="w-full">
                    <TabsList className="mb-8 grid grid-cols-2 max-w-[400px]">
                        <TabsTrigger value="inquiries">고객 문의 내역</TabsTrigger>
                        <TabsTrigger value="content">랜딩페이지 콘텐츠</TabsTrigger>
                    </TabsList>

                    {/* INQUIRIES TAB */}
                    <TabsContent value="inquiries">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-xl font-semibold">고객 상담 목록</h2>
                            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                                총 {inquiries.length}건
                            </span>
                        </div>

                        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-muted/50">
                                        <TableHead className="w-[80px] text-center">ID</TableHead>
                                        <TableHead className="w-[120px]">이름</TableHead>
                                        <TableHead className="w-[150px]">연락처</TableHead>
                                        <TableHead>문의 내용</TableHead>
                                        <TableHead className="w-[180px]">상태</TableHead>
                                        <TableHead className="w-[150px] text-right">접수일</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {isLoading ? (
                                        <TableRow><TableCell colSpan={6} className="h-48 text-center text-muted-foreground">데이터를 불러오는 중입니다...</TableCell></TableRow>
                                    ) : inquiries.length === 0 ? (
                                        <TableRow><TableCell colSpan={6} className="h-48 text-center text-muted-foreground">접수된 문의 내역이 없습니다.</TableCell></TableRow>
                                    ) : (
                                        inquiries.map((inquiry) => (
                                            <TableRow key={inquiry.id}>
                                                <TableCell className="text-center font-medium">#{inquiry.id}</TableCell>
                                                <TableCell>{inquiry.name}</TableCell>
                                                <TableCell className="text-muted-foreground">{inquiry.phone}</TableCell>
                                                <TableCell className="max-w-xs truncate" title={inquiry.message || "-"}>{inquiry.message || "-"}</TableCell>
                                                <TableCell>
                                                    <Select defaultValue={inquiry.status} onValueChange={(val) => handleStatusChange(inquiry.id, val)}>
                                                        <SelectTrigger className={`w-[130px] h-8 text-xs font-semibold border-0 ${inquiry.status === "COMPLETED" ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"}`}>
                                                            <SelectValue placeholder="상태 선택" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="PENDING" className="text-xs">상담 대기중</SelectItem>
                                                            <SelectItem value="COMPLETED" className="text-xs text-emerald-600 font-medium">상담 완료</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </TableCell>
                                                <TableCell className="text-right text-xs text-muted-foreground">
                                                    {format(new Date(inquiry.createdAt), "yyyy.MM.dd HH:mm")}
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    </TabsContent>

                    {/* CMS EDITOR TAB */}
                    <TabsContent value="content">
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-semibold">콘텐츠 관리 (메인 화면)</h2>
                                <p className="text-sm text-muted-foreground mt-1">
                                    랜딩페이지의 글귀를 직접 수정할 수 있습니다. 줄바꿈은 &lt;br /&gt;를 사용하세요.
                                </p>
                            </div>
                            <button
                                onClick={handleContentSave}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-sm"
                            >
                                변경사항 저장
                            </button>
                        </div>

                        <div className="bg-card rounded-xl border border-border p-8 shadow-sm max-w-3xl space-y-6">
                            {isContentLoading && !heroContent.title ? (
                                <div className="h-32 flex items-center justify-center text-muted-foreground">
                                    현재 반영된 콘텐츠를 불러오는 중입니다...
                                </div>
                            ) : (
                                <>
                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-foreground">상단 배지 텍스트</label>
                                        <input
                                            type="text"
                                            value={heroContent.badge}
                                            onChange={(e) => setHeroContent(prev => ({ ...prev, badge: e.target.value }))}
                                            className="w-full flex h-11 rounded-xl border border-input bg-background px-4 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                            placeholder="dōTERRA Wellness Expert"
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-foreground">메인 타이틀 (큰 글씨)</label>
                                        <textarea
                                            value={heroContent.title}
                                            onChange={(e) => setHeroContent(prev => ({ ...prev, title: e.target.value }))}
                                            className="w-full flex min-h-[120px] rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                            placeholder="건강이 자산이 되는 삶,<br /><span class='text-gradient-gold'>도테라 웰니스 비즈니스</span>로<br /> 시작하세요."
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-medium text-foreground">서브 타이틀 (부연 설명)</label>
                                        <textarea
                                            value={heroContent.subtitle}
                                            onChange={(e) => setHeroContent(prev => ({ ...prev, subtitle: e.target.value }))}
                                            className="w-full flex min-h-[100px] rounded-xl border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                                            placeholder="무점포 · 무자본 · 무경험으로 실현하는 경제적 자유.<br />도테라 비즈니스 전문가 정종범이 그 길을 함께합니다."
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    );
};

export default Admin;
