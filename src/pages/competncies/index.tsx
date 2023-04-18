import { GetStaticProps, NextPage } from 'next'

import Competencies from '@/components/screens/Competencies'

import { ICompetence } from '@/shared/types/competencies.types'

import { CompetenciesService } from '@/services/competencies.service'

const CompetenciesPage: NextPage<{ competencies: Array<ICompetence> }> = ({ competencies }) => {
	return <Competencies competencies={competencies || []} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: competencies } = await CompetenciesService.getAllCompetencies()
		return {
			props: {
				competencies,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}
