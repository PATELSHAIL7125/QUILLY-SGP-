import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from 'next/navigation'
import Dashboard from "../components/Dashboard"

const Page = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    
    if (!user || !user.id) redirect('/dashboard')
    
        return <Dashboard/>
}

export default Page