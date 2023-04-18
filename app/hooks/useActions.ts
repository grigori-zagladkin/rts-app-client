import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { actions } from '../store/root-actions'

import { useAppDispatch } from './useAppDispatch'

export const useActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(() => bindActionCreators(actions, dispatch), [dispatch])
}
