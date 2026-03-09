import { useEffect, useState } from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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

    const fetchInquiries = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/inquiries");
            if (!response.ok) throw new Error("Failed to fetch data");
            const result = await response.json();
            setInquiries(result.data);
        } catch (error) {
            toast.error("데이터를 불러오는데 실패했습니다.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchInquiries();
    }, []);

    const handleStatusChange = async (id: number, newStatus: string) => {
        try {
            const response = await fetch(`http://localhost:3000/api/v1/inquiries/${id}/status`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!response.ok) throw new Error("Failed to update status");

            toast.success("상태가 변경되었습니다.");
            setInquiries((prev) =>
                prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
            );
        } catch (error) {
            toast.error("상태 업데이트에 실패했습니다.");
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-background flex flex-col">
            {/* Admin Header */}
            <header className="border-b bg-card">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-display font-bold text-foreground">
                        관리자 대시보드
                    </h1>
                    <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
                        랜딩페이지로 돌아가기
                    </a>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 container mx-auto px-6 py-12">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">고객 상담 문의 내역</h2>
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
                                <TableRow>
                                    <TableCell colSpan={6} className="h-48 text-center text-muted-foreground">
                                        데이터를 불러오는 중입니다...
                                    </TableCell>
                                </TableRow>
                            ) : inquiries.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-48 text-center text-muted-foreground">
                                        접수된 문의 내역이 없습니다.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                inquiries.map((inquiry) => (
                                    <TableRow key={inquiry.id}>
                                        <TableCell className="text-center font-medium">#{inquiry.id}</TableCell>
                                        <TableCell>{inquiry.name}</TableCell>
                                        <TableCell className="text-muted-foreground">{inquiry.phone}</TableCell>
                                        <TableCell className="max-w-xs truncate" title={inquiry.message || "-"}>
                                            {inquiry.message || "-"}
                                        </TableCell>
                                        <TableCell>
                                            <Select
                                                defaultValue={inquiry.status}
                                                onValueChange={(val) => handleStatusChange(inquiry.id, val)}
                                            >
                                                <SelectTrigger className={`w-[130px] h-8 text-xs font-semibold border-0 ${inquiry.status === "COMPLETED"
                                                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100"
                                                        : "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100"
                                                    }`}>
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
            </main>
        </div>
    );
};

export default Admin;
