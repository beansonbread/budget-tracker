import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter();

    return (
        <div className="navbar">
        <button onClick={()=> router.push('/')} className="navbuttons">Home</button>
        <button onClick={()=>router.push('/tracker')} className="navbuttons">Budget Tracker</button>
        <button onClick={()=>router.push('/transactions')} className="navbuttons">Past Transactions</button>
        </div>
    )
}