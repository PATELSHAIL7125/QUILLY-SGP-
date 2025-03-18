import { useParams, useRouter, useSearchParams } from "next/navigation"

const page =async () => {
const router = useRouter()
const searchParams = useSearchParams();
const origin = searchParams ? searchParams.get("origin") : null;
const apiResponse = await fetch('/api/whatever') 
const data = await apiResponse.json() 
}
export default page