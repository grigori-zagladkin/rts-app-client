import Admin from '@/components/screens/Admin'

import { NextPageAuth } from '@/providers/AuthProvider/auth-page.types'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
