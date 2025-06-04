export default function Balance({transactions}: {transactions: {amount: number}[]}) {
    const total = transactions.reduce((sum, transactions) => sum + transactions.amount, 0); //calculates the total of income added and expenses subtracted

    return (
        <div className="balancecontainer">
            <h2 id="balance">Balance: ${total.toFixed(2)}</h2>
            {total < 0 ? <p style={{color: "red"}}>You're spending above budget!</p> : <p style={{color:"green"}}>Looking good! 🎉</p>}
        </div>
        //displays balance rounded to 2 decimal places. if total is under $0, text will say "You're spending above budget" or if total is >0 it will display "looking good" in green.
    )
}