import { getAdminUrl } from "@/core/config/url.config";
import { CompetenciesService } from "@/core/services/competencies.service";
import { toastError } from "@/core/utils/toast-error";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { SubmitHandler, UseFormSetValue } from "react-hook-form";
import { toastr } from "react-redux-toastr";
import { IEditCompetence, keyOfEditCompetence } from "./competence-edit.intrface";

export const useEditCompetence = (setValue: UseFormSetValue<IEditCompetence>) => {
    const { query, push } = useRouter();

    const competenceId = Number(query.id);

    const { isLoading } = useQuery(
        ["competence", competenceId],
        () => CompetenciesService.getCompetenceById(competenceId),
        {
            onSuccess({ data }) {
                keyOfEditCompetence.forEach((key) => {
                    setValue(key, data[key]);
                });
            },
            onError(error) {
                toastError(error);
            },
            enabled: !!query.id,
        }
    );

    const { mutateAsync } = useMutation({
        mutationKey: ["update competence"],
        mutationFn: (data: IEditCompetence) => CompetenciesService.updateCompetence(competenceId, data),
        onSuccess() {
            toastr.success("Update competence", "Update was successful");
            push(getAdminUrl("competencies"));
        },
    });

    const onSubmit: SubmitHandler<IEditCompetence> = async (data) => {
        await mutateAsync(data);
    };

    return { onSubmit, isLoading };
};
