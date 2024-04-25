import { useMutation, useQueryClient } from "@tanstack/react-query";
import {updateCategory,updateCategoryActivity} from "../../services/apiCategory";
import toast from "react-hot-toast";

export function useUpdateCategory() {
    const quryClient = useQueryClient();

    const { mutate: editCategory, isLoading: CategoryIsEditing } = useMutation({
        mutationFn: (data) => updateCategory(data),
        onSuccess: () => {
            toast.success("category successfully edited");
            quryClient.invalidateQueries({
                queryKey: ["categories"],
            });
        },
        onError: (err) => toast.error(err.message),
    });
    return { editCategory, CategoryIsEditing };
}
export function useUpdateCategoryActivity() {
    const quryClient = useQueryClient();

    const { mutate: editCategoryActivity, isLoading: CategoryActivityIsEditing } = useMutation({
        mutationFn: (data) => updateCategoryActivity(data),
        onSuccess: () => {
            toast.success("category successfully edited");
            quryClient.invalidateQueries({
                queryKey: ["categories"],
            });
        },
        onError: (err) => toast.error(err.message),
    });

    return { editCategoryActivity, CategoryActivityIsEditing };
}