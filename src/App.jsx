import React from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=google.com&sz=128",
      name: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Bengaluru, India",
    },

    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
      name: "Microsoft",
      datePosted: "1 week ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Hyderabad, India",
    },

    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
      name: "Amazon",
      datePosted: "3 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$36/hour",
      location: "Bengaluru, India",
    },

    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
      name: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$55/hour",
      location: "Mumbai, India",
    },

    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
      name: "Apple",
      datePosted: "4 days ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$52/hour",
      location: "Bengaluru, India",
    },

    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
      name: "Netflix",
      datePosted: "10 days ago",
      post: "Full Stack Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hour",
      location: "Mumbai, India",
    },

    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
      name: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Pune, India",
    },

    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
      name: "Adobe",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Noida, India",
    },

    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
      name: "Salesforce",
      datePosted: "5 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$48/hour",
      location: "Hyderabad, India",
    },

    {
      brandLogo:
        "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
      name: "Oracle",
      datePosted: "10 weeks ago",
      post: "Cloud Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$44/hour",
      location: "Bengaluru, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map((elem) => {
        return (
          <Card
            key={elem.name}
            brandLogo={elem.brandLogo}
            name={elem.name}
            datePosted={elem.datePosted}
            post={elem.post}
            tag1={elem.tag1}
            tag2={elem.tag2}
            pay={elem.pay}
            location={elem.location}
          />
        );
      })}
    </div>
  );
};

export default App;