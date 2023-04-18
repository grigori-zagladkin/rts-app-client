import { IEmailPassword } from "@/core/store/user/user.interface";
import { validEmail } from "@/core/utils/valid-email";
import { FC, Fragment } from "react";
import { FormState, UseFormRegister } from "react-hook-form";
import Field from "../../ui/Field";

export interface IAuthFields {
    register: UseFormRegister<any>;
    formState: FormState<IEmailPassword>;
    isPasswordRequired?: boolean;
}

const AuthFields: FC<IAuthFields> = ({ register, formState: { errors }, isPasswordRequired = false }) => {
    return (
        <Fragment>
            <Field
                placeholder="E-mail"
                type="email"
                error={errors.email}
                {...register("email", {
                    required: "E-mail is required",
                    pattern: {
                        value: validEmail,
                        message: "Введите корректный e-mail",
                    },
                })}
            />
            <Field
                placeholder="Password"
                error={errors.password}
                type="password"
                {...register(
                    "password",
                    isPasswordRequired
                        ? {
                              required: "Password is required",
                              minLength: {
                                  value: 6,
                                  message: "Min length should more 6 symbols",
                              },
                          }
                        : {}
                )}
            />
        </Fragment>
    );
};

export default AuthFields;
