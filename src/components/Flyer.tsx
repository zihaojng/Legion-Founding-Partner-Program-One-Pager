import { CheckCircleIcon, MailIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export function Flyer() {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-8 min-h-screen"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="mb-12 border-none shadow-none bg-transparent">
        <CardContent className="p-0">
          <img src="/light.png" alt="Legion Logo" className="h-16 mb-8" />
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#4A0D42]">
            Become a Legion{" "}
            <span className="relative">
              Founding Partner
              <svg
                viewBox="0 0 286 73"
                fill="none"
                className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-[-14px]"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                  }}
                  d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                  stroke="#FFD700"
                  strokeWidth="3"
                />
              </svg>
            </span>:{" "}
            Shape the Future of Litigation Drafting & Earn Significant Rewards
          </h1>
        </CardContent>
      </Card>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-[#4A0D42]">
              The Challenge:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Drafting standard litigation documents – pleadings, discovery
              requests, motions – consumes countless hours for litigators,
              especially in small to medium-sized firms. This repetitive work
              drains valuable time that could be spent on strategy, client
              interaction, and growth.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#4A0D42]">
              The Solution: Legion - The AI-Powered Drafting Assistant for
              Litigators
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-6">
            Legion is building an intelligent, in-browser drafting platform
            designed specifically for US litigation attorneys. We leverage AI to
            help lawyers draft high-quality pleadings, discovery, and motions
            faster and more accurately.
            </p>
            <div className="grid md:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-lg">
            <div>
              <h3 className="font-semibold mb-2 text-[#4A0D42]">
                Current Focus:
              </h3>
              <p className="text-gray-700">
                California, New York, Florida, and Illinois Civil & Probate
                Litigation (State Court)
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#4A0D42]">Launched:</h3>
              <p className="text-gray-700">AI-Powered Complaint Builder</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#4A0D42]">
                Coming Soon:
              </h3>
              <p className="text-gray-700">
                Contention ROGs Builder, Full Discovery Suite (SROGs, RFPs,
                RFAs)
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-[#4A0D42]">Pricing:</h3>
              <p className="text-gray-700">
                Simple & Accessible - $10/page usage-based pricing.
              </p>
            </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mt-8 bg-[#4A0D42] text-white border-none">
          <CardHeader>
            <CardTitle className="text-2xl text-white">
            Introducing the Exclusive Legion Founding Partner Program
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-100 mb-6">
            We're looking for forward-thinking consultants, MSPs, and legaltech
            providers who serve law firms in CA, NY, FL, and IL to join our
            exclusive Founding Partner Program.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Generous Commission
              </h3>
              <p className="text-gray-100">
                Receive 40% of the gross usage revenue generated by each new law
                firm you refer to Legion.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Significant Payout Potential
              </h3>
              <p className="text-gray-100">
                Earn commissions until the referred firm reaches $6,000 USD in
                total lifetime spend with Legion, resulting in a maximum payout
                of $2,400 USD per referred client!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">
                Long-Term Alignment
              </h3>
              <p className="text-gray-100">
                You benefit directly as your referred clients adopt Legion and
                increase their usage over time, fueled by our expanding product
                features.
              </p>
            </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#4A0D42]">
              Why Partner with Legion Now?
            </CardTitle>
          </CardHeader>
          <CardContent>
          <div className="space-y-4">
            {['<strong>Lucrative Founding Terms:</strong> Secure our best commission structure.', '<strong>Offer Innovation:</strong> Provide clients a cutting-edge AI drafting tool.', '<strong>Differentiate:</strong> Stand out with efficiency-boosting technology.', '<strong>Early Influence:</strong> Shape new features with direct feedback.'].map((benefit, i) => <div key={i} className="flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-[#FFD700]" />
                <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: benefit }} />
              </div>)}
          </div>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-[#4A0D42]">
              Benefits for Your Clients:
            </CardTitle>
          </CardHeader>
          <CardContent>
          <div className="space-y-4">
            {['<strong>Draft Faster:</strong> Reduce time on repetitive tasks.', '<strong>Improve Quality:</strong> Gain consistent, accurate documents with AI.', '<strong>Focus on Strategy:</strong> Free up time for high-value legal work.', '<strong>Accessible Pricing:</strong> Pay-as-you-go fits small/medium firm budgets.'].map((benefit, i) => <div key={i} className="flex items-center gap-3">
                <CheckCircleIcon className="h-6 w-6 text-[#FFD700]" />
                <span className="text-gray-700" dangerouslySetInnerHTML={{ __html: benefit }} />
              </div>)}
          </div>
          </CardContent>
        </Card>
      </motion.div>
      <Separator className="my-8" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mt-8 border-none shadow-none bg-transparent">
          <CardContent className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-[#4A0D42]">
              Ready to Shape the Future and Reap the Rewards?
            </h2>
            <p className="text-gray-700 mb-6">
              Help bring the power of AI drafting to litigators with Legion and
              earn substantial commissions. Let's discuss how we can partner
              together.
            </p>
            <div className="inline-flex items-center text-[#4A0D42]">
              <MailIcon className="h-5 w-5 mr-2" />
              <Button
                variant="ghost"
                className="text-lg font-medium text-[#4A0D42] hover:text-[#4A0D42]/90"
                asChild
              >
                <a href="mailto:zihao@legion.law">
                zihao@legion.law
                </a>
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              *The Legion Founding Partner Program terms and conditions are
              subject to a formal partnership agreement.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
