type _currencyType = 'INR' | 'USD' | 'EUR'
export default (_number: number, currency: _currencyType): string => {
    return Intl.NumberFormat('en-US', {
        style: 'currency', currency
    }).format(_number)
}