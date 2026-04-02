import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuthStore } from '@/store/authStore';
import { COMPANIES } from '@/store/entityStore';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const signIn = useAuthStore((s) => s.signIn);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = email.trim() || 'user@example.com';
    signIn(value, name.trim() || null);
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="mx-auto mb-10 flex h-14 max-w-sm items-center justify-center gap-3 rounded-2xl bg-slate-900/80 px-3 py-2 ring-1 ring-slate-800">
          <img
            src={COMPANIES.environmental.logo}
            alt={COMPANIES.environmental.name}
            className="h-10 w-auto max-w-[42%] object-contain"
          />
          <span className="text-slate-600" aria-hidden>
            |
          </span>
          <img
            src={COMPANIES.construction.logo}
            alt={COMPANIES.construction.name}
            className="h-10 w-auto max-w-[42%] object-contain"
          />
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl backdrop-blur-sm">
          <h1 className="text-2xl font-bold text-white">Create account</h1>
          <p className="mt-1 text-sm text-slate-400">
            Demo sign-up — use any email; nothing is verified or stored on a
            server.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="signup-name" className="text-slate-200">
                Name <span className="text-slate-500">(optional)</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                  id="signup-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-slate-700 bg-slate-950/50 pl-10 text-white placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-email" className="text-slate-200">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                  id="signup-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-slate-700 bg-slate-950/50 pl-10 text-white placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-password" className="text-slate-200">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <Input
                  id="signup-password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-slate-700 bg-slate-950/50 pl-10 text-white placeholder:text-slate-600"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 py-6 text-base font-semibold text-white hover:from-blue-500 hover:to-teal-500"
            >
              Create account
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{' '}
            <Link
              to="/sign-in"
              className="font-medium text-teal-400 hover:text-teal-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUpPage;
