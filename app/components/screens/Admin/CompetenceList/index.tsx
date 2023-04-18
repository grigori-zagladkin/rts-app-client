import Heading from "@/core/components/ui/Heading";
import { ICompetence } from "@/core/shared/types/competencies.types";
import Meta from "@/core/utils/Meta";
import { FC } from "react";
import styles from "./CompetenceList.module.scss";

const CompetenceList: FC<{ competencies: Array<ICompetence> }> = ({ competencies }) => {
    return (
        <Meta title="Редактирование компетенций">
            <section className={styles.wrapper}>
                <Heading>Редактирование компетенций</Heading>
            </section>
        </Meta>
    );
};

export default CompetenceList;
