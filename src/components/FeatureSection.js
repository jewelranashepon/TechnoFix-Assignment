import React from 'react';
import '../input.css';


const FeatureSection = () => {
  return (
    <div className="container mx-auto py-4">
        <div>
            <h2 className="text-3xl font-semibold">Collaborate without<br/> constraints</h2>
        </div>

        <div className="grid grid-cols-3 gap-8 my-8">
            <div className="justify-start p-3">
                <h2 className="text-xl font-semibold text-start mb-2">Free forever</h2>
                <p className="text-start text-sm">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates.
                    Signing up with your work email lets you bring in your team faster. See our pricing plans
                    for more features.
                </p>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-start mb-2">Easy integrations</h2>
                <p className="text-start text-sm">
                     Miro has 100+ powerful integrations with tools you already use like G Suite, Slack,
                     and Jira, so your workflow is seamless. View the full list in our Marketplace .
                </p>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-start mb-2">Security first</h2>
                <p className="text-start text-sm">
                We treat your data like you would — with the utmost care. We follow industry-leading
                security standards and give you tools to protect intellectual property. Learn more 3 
                at our Trust Center .
                </p>
            </div>
        </div>

        <a href="#" className="bg-blue-500 hover:bg-blue-700 rounded-3xl text-white font-semibold py-1 px-4">
            Sign up free →
        </a>

    </div>
  )
}

export default FeatureSection