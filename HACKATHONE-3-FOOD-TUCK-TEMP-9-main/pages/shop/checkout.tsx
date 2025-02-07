import type React from "react"
import { useContext, useState } from "react"
import { Cart } from "../../components/Context/context"
import type { ProductModel } from "../DataJson"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { CheckCircle } from "lucide-react"

interface PaymentFormData {
  cardNumber: string
  expiryMonth: string
  expiryYear: string
  cvc: string
}

const PaymentForm: React.FC<{ onSuccess: () => void }> = ({ onSuccess }) => {
  const [paymentData, setPaymentData] = useState<PaymentFormData>({
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  })
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPaymentData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)
    setError(null)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simple validation
    if (paymentData.cardNumber.length !== 16 || paymentData.cvc.length !== 3) {
      setError("Invalid card details")
      setProcessing(false)
      return
    }

    // Simulated successful payment
    onSuccess()
    setProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Card number
        </label>
        <input
          id="cardNumber"
          name="cardNumber"
          value={paymentData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
          maxLength={16}
          required
        />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <label htmlFor="expiryMonth" className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Month
          </label>
          <select
            id="expiryMonth"
            name="expiryMonth"
            value={paymentData.expiryMonth}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Month</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month} value={month.toString().padStart(2, "0")}>
                {month.toString().padStart(2, "0")}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="expiryYear" className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Year
          </label>
          <select
            id="expiryYear"
            name="expiryYear"
            value={paymentData.expiryYear}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Year</option>
            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i).map((year) => (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
            CVC
          </label>
          <input
            id="cvc"
            name="cvc"
            value={paymentData.cvc}
            onChange={handleInputChange}
            placeholder="123"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
            maxLength={3}
            required
          />
        </div>
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <button
        type="submit"
        disabled={processing}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150 ease-in-out disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        {processing ? "Processing..." : "Place Order"}
      </button>
    </form>
  )
}

function Checkout() {
  const { cartitems } = useContext(Cart)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSuccess = () => {
    setShowSuccess(true)
  }

  return (
    <>
      <Head>
        <title>CheckOut page</title>
      </Head>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-[200px] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-2">Checkout</h1>
        <p className="text-lg">Complete your purchase</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  Zip code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                {cartitems.map((item: ProductModel, index: number) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b">
                    <div className="flex items-center">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        width={64}
                        height={64}
                        alt={item.name}
                        className="rounded-md"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-lg font-medium text-gray-900">${item.price * item.quantity}</p>
                  </div>
                ))}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Total</h3>
                    <p className="text-2xl font-semibold text-gray-900">
                      $
                      {cartitems
                        .reduce((total: number, item: ProductModel) => total + item.quantity * item.price, 0)
                        .toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-6">Payment Information</h2>
              <PaymentForm onSuccess={handleSuccess} />
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Checkout Successful!</h2>
            <p className="text-gray-600 mb-8">Thank you for your purchase. Your order has been placed successfully.</p>
            <Link href="/">
              <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-150 ease-in-out">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Checkout

