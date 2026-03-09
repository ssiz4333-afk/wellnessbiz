import { useQuery } from '@tanstack/react-query';

export const useContent = () => {
    return useQuery({
        queryKey: ['content'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/api/v1/content');
            if (!response.ok) {
                throw new Error('Failed to fetch content');
            }
            return response.json();
        },
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });
};
