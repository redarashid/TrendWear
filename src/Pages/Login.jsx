// import { useState, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../AuthContext';

// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('https://shop-co-back.vercel.app/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error('Login failed');
//       }

//       const data = await response.json();
//       login(data.token, formData.email); // استخدام دالة login من Context
//       navigate('/');
//     } catch (err) {
//       setError('Invalid credentials. Please try again.');
//     }
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Or{' '}
//             <Link to="/SignUp" className="font-medium text-indigo-600 hover:text-indigo-500">
//               create a new account
//             </Link>
//           </p>
//         </div>
        
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           {error && (
//             <div className="text-red-500 text-center text-sm">{error}</div>
//           )}
          
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="email" className="sr-only">Email address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }






"use client"

import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("https://shop-co-back.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Login failed")
      }

      const data = await response.json()
      login(data.token, formData.email)
      navigate("/")
    } catch (err) {
      setError("Invalid credentials. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 pb-8">
            <CardTitle className="text-3xl font-bold text-center text-gray-900">Sign in to your account</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Or{" "}
              <Link
                to="/SignUp"
                className="font-semibold text-black hover:text-gray-700 underline underline-offset-4 transition-colors"
              >
                create a new account
              </Link>
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {error && (
              <Alert variant="destructive" className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-800">{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="pl-10 h-12 border-gray-200 focus:border-black focus:ring-black transition-colors"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="pl-10 pr-10 h-12 border-gray-200 focus:border-black focus:ring-black transition-colors"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                  />
                  <Label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </Label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-black hover:text-gray-700 underline underline-offset-4 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-black hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Signing in...
                  </div>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                className="h-12 border-gray-200 hover:bg-gray-50 bg-white text-gray-700"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 border-gray-200 hover:bg-gray-50 bg-white text-gray-700"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Button>
            </div>
          </CardContent>
        </Card>

        <p className="mt-8 text-center text-sm text-gray-500">
          By signing in, you agree to our{" "}
          <Link to="/terms" className="font-medium text-black hover:text-gray-700 underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link to="/privacy" className="font-medium text-black hover:text-gray-700 underline underline-offset-4">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
