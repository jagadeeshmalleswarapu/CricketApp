import React, { useState } from 'react'

const Add_Tablets = () => {
    const [InvoiceNumber, setInvoiceNumber] = useState("")
    const [InvoiceDate, setInvoiceDate] = useState("")
    const Date_format_change = (e) => {
        var temp = e.target.value
        var tempDate = new Date(temp)
        var day = ""+tempDate.getDate()
        var month = ""+(parseInt(tempDate.getMonth())+1)
        var year = ""+tempDate.getFullYear()
        console.log(day, month, year)
        // setInvoiceDate(`${day}-${month}-${year}`)
        return `${day}-${month}-${year}`
    }
    return (
        <>
            <div>
                Add_Tablets
        </div>
            <div>
                Invoice number: <input type='text' value={InvoiceNumber}
                    onChange={e => setInvoiceNumber(e.target.value)}
                    placeholder='Enter the Invoice number' /><br />
            Invoice date: <input type='date'
                    // onChange={e => setInvoiceDate(e.target.value)}
                    onChange={e => setInvoiceDate(Date_format_change(e))}
                /><br />
            </div>
            <hr></hr>
            <div>
                {InvoiceNumber}
                {InvoiceDate}
            </div>
        </>
    )
}

export default Add_Tablets
