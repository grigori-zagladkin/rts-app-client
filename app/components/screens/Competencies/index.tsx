import { ICompetence } from "@/core/shared/types/competencies.types";
import Meta from "@/core/utils/Meta";
import { FC } from "react";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import CompetenceItem from "./CompetenceItem";
import styles from "./Competencies.module.scss";

const Competencies: FC<{ competencies: Array<ICompetence> }> = ({ competencies }) => {
    return (
        <Meta title="Компетенции">
            <section className={styles.wrapper}>
                <Heading>Компетенции</Heading>
                <Text className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla animi nemo dicta doloribus?
                    Doloribus fugiat recusandae aperiam. Dignissimos quia provident repellat facilis voluptatibus omnis
                    voluptate facere tempora corporis doloribus?
                </Text>
                <div className={styles.list}>
                    {competencies.map((competence, index) => (
                        <CompetenceItem competence={competence} key={index} />
                    ))}
                </div>
            </section>
        </Meta>
    );
};

export default Competencies;
