import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getAllCategories,addCategory} from "../../services/apiCategory";
import toast from "react-hot-toast";

export function useCategories(size: number, current: number) {
    console.log(size, current)
    const { isLoading, data: categories , refetch } = useQuery({
        queryKey: ["categories"],
        queryFn: () => getAllCategories(size, current),
    });
    return { isLoading, categories, refetch };
}
export function useAddCategory() {
    const quryClient = useQueryClient();

    const { mutate: Add, isLoading: addCategoryLoading } = useMutation({
        mutationFn: (data) => addCategory(data),
        onSuccess: () => {
            toast.success("category successfully add");
            quryClient.invalidateQueries({
                queryKey: ["categories"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return { Add, addCategoryLoading };
}
