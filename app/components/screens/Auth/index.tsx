import Meta from "@/core/utils/Meta";
import { FC } from "react";

import { useActions } from "@/core/hooks/useActions";
import { useAuth } from "@/core/hooks/useAuth";
import { IEmailPassword } from "@/core/store/user/user.interface";
import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import styles from "./Auth.module.scss";
import AuthFields from "./AuthFields";
import { useAuthRedirect } from "./useAuthRedirect";

const Auth: FC = () => {
    useAuthRedirect();
    const { isLoading } = useAuth();
    const {
        register: registerInput,
        handleSubmit,
        formState,
        reset,
    } = useForm<IEmailPassword>({
        mode: "onChange",
    });
    const { login } = useActions();
    const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
        login(data);
        reset();
    };
    return (
        <Meta title="Авторизация">
            <section className={styles.wrapper}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Heading>Авторизация</Heading>
                    <AuthFields register={registerInput} formState={formState} isPasswordRequired={true} />
                    <div className={styles.buttons}>
                        <Button type="submit" disabled={isLoading}>
                            Войти
                        </Button>
                        <Button disabled={isLoading} onClick={() => reset()}>
                            Очистить
                        </Button>
                    </div>
                </form>
            </section>
        </Meta>
    );
};

export default Auth;
