// // import { Link } from "react-router-dom";
// // import { X, GraduationCap } from "lucide-react";

// // interface SignupPopupProps {
// //   show: boolean;
// //   onClose: () => void;
// // }

// // export default function SignupPopup({ show, onClose }: SignupPopupProps) {
// //   if (!show) return null;

// //   return (
// //     <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4">
// //       <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
// //         <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200">
// //           <X className="w-5 h-5" />
// //         </button>
// //         <div className="text-center">
// //           <div className="w-14 h-14 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
// //             <GraduationCap className="w-7 h-7 text-maroon" />
// //           </div>
// //           <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2">Unlock Full Access</h3>
// //           <p className="text-gray-500 text-sm mb-6">
// //             Sign up to explore our mentors, campus life, placements, and get AI-powered counseling.
// //           </p>
// //           <Link to="/signup" onClick={onClose}
// //             className="block w-full bg-maroon text-white py-3 rounded-lg font-semibold hover:bg-maroon-dark transition-colors duration-200 mb-3">
// //             Create Free Account
// //           </Link>
// //           <p className="text-sm text-gray-500">
// //             Already have an account?{" "}
// //             <Link to="/login" onClick={onClose} className="text-maroon font-medium hover:underline">Sign In</Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { GraduationCap, User, Mail, Lock, Phone, ArrowLeft } from "lucide-react";
// import toast from "react-hot-toast";
// import { registerUser } from "../services/auth.service";
// import { useAuth } from "../context/AuthContext";
// import { images } from "../data/content";

// export default function SignupPage() {
// const { login } = useAuth();
// const navigate = useNavigate();

// const [name, setName] = useState("");
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [phone, setPhone] = useState("");

// const [loading, setLoading] = useState(false);

// const [errors, setErrors] = useState<{
// name?: string;
// email?: string;
// password?: string;
// phone?: string;
// }>({});

// const validateForm = () => {
// const newErrors: any = {};

// ```
// if (!name.trim()) {
//   newErrors.name = "Full name is required";
// }

// if (!email.trim()) {
//   newErrors.email = "Email is required";
// } else if (!/\S+@\S+\.\S+/.test(email)) {
//   newErrors.email = "Enter a valid email address";
// }

// if (!password.trim()) {
//   newErrors.password = "Password is required";
// } else if (password.length < 6) {
//   newErrors.password = "Password must be at least 6 characters";
// }

// if (phone && phone.length < 10) {
//   newErrors.phone = "Phone number must be 10 digits";
// }

// setErrors(newErrors);

// return Object.keys(newErrors).length === 0;
// ```

// };

// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// e.preventDefault();

// ```
// if (!validateForm()) return;

// setLoading(true);

// try {
//   const data = await registerUser({
//     name: name.trim(),
//     email: email.trim(),
//     password: password.trim(),
//     phone: phone.trim() || undefined,
//   });

//   login(data.token);

//   toast.success("Account created! Welcome to EduReach.");
//   navigate("/");
// } catch (err: any) {
//   if (err.response?.status === 409) {
//     toast.error("User already exists. Please login.");
//     navigate("/login");
//   } else {
//     toast.error(err.response?.data?.message || "Registration failed");
//   }
// } finally {
//   setLoading(false);
// }
// ```

// };

// return ( <div className="min-h-screen flex"> <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-cream">
//      <div className="w-full max-w-md">

//       <Link
//         to="/"
//         className="flex items-center gap-1 text-gray-500 hover:text-maroon mb-8"
//       >
//         <ArrowLeft className="w-4 h-4" />
//         <span className="text-sm">Back to Home</span>
//       </Link>

//       <h1 className="text-3xl font-bold mb-2">Create Account</h1>
//       <p className="text-gray-500 mb-8">
//         Join EduReach for unlimited access to AI chat & counseling calls
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         {/* Name */}
//         <div>
//           <label className="text-sm font-medium">Full Name *</label>
//           <div className="relative">
//             <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="John Doe"
//               className="w-full pl-10 pr-4 py-3 border rounded-lg"
//             />
//           </div>
//           {errors.name && (
//             <p className="text-red-500 text-sm">{errors.name}</p>
//           )}
//         </div>

//         {/* Email */}
//         <div>
//           <label className="text-sm font-medium">Email *</label>
//           <div className="relative">
//             <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               className="w-full pl-10 pr-4 py-3 border rounded-lg"
//             />
//           </div>
//           {errors.email && (
//             <p className="text-red-500 text-sm">{errors.email}</p>
//           )}
//         </div>

//         {/* Password */}
//         <div>
//           <label className="text-sm font-medium">Password *</label>
//           <div className="relative">
//             <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Minimum 6 characters"
//               className="w-full pl-10 pr-4 py-3 border rounded-lg"
//             />
//           </div>
//           {errors.password && (
//             <p className="text-red-500 text-sm">{errors.password}</p>
//           )}
//         </div>

//         {/* Phone */}
//         <div>
//           <label className="text-sm font-medium">Phone (optional)</label>
//           <div className="relative">
//             <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               placeholder="+91 9876543210"
//               className="w-full pl-10 pr-4 py-3 border rounded-lg"
//             />
//           </div>
//           {errors.phone && (
//             <p className="text-red-500 text-sm">{errors.phone}</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-maroon text-white py-3 rounded-lg font-semibold hover:bg-maroon-dark disabled:opacity-50"
//         >
//           {loading ? "Creating Account..." : "Create Account"}
//         </button>
//       </form>

//       <p className="text-center text-sm text-gray-500 mt-6">
//         Already have an account?{" "}
//         <Link to="/login" className="text-maroon font-medium hover:underline">
//           Sign In
//         </Link>
//       </p>
//     </div>
//   </div>

//   <div className="hidden lg:block lg:w-1/2 relative">
//     <img
//       src={images.moreStudents}
//       alt="Students"
//       className="w-full h-full object-cover"
//     />
//     <div className="absolute inset-0 bg-maroon/60 flex items-center justify-center">
//       <div className="text-center text-white p-8">
//         <GraduationCap className="w-16 h-16 mx-auto mb-4" />
//         <h2 className="text-4xl font-bold mb-2">Join EduReach</h2>
//         <p>92% placement rate · Top recruiters · 25-acre campus</p>
//       </div>
//     </div>
//   </div>
// </div>
// ```

// );
// }



import { Link } from "react-router-dom";
import { X, GraduationCap } from "lucide-react";

interface SignupPopupProps {
  show: boolean;
  onClose: () => void;
}

export default function SignupPopup({ show, onClose }: SignupPopupProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">

          <div className="w-14 h-14 bg-maroon/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-7 h-7 text-maroon" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Unlock Full Access
          </h3>

          <p className="text-gray-500 text-sm mb-6">
            Sign up to explore mentors, campus life, placements,
            and get AI-powered counseling.
          </p>

          <Link
            to="/signup"
            onClick={onClose}
            className="block w-full bg-maroon text-white py-3 rounded-lg font-semibold hover:bg-maroon-dark mb-3"
          >
            Create Free Account
          </Link>

          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              onClick={onClose}
              className="text-maroon font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}