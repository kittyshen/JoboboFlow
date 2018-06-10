DROP DATABASE IF EXISTS joboboflow_db;

CREATE DATABASE joboboflow_db;

USE joboboflow_db;

CREATE TABLE jobs (
jobID INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
jobLink VARCHAR(500) NOT NULL,
jobTitle VARCHAR(100) NOT NULL,
companyName VARCHAR(150) NOT NULL,
jobDescription TEXT NOT NULL,
jobContact VARCHAR(100),
jobLocation VARCHAR(100),
jobExperienceLevel INT,
jobType VARCHAR (50),
jobSkill1 VARCHAR (50),
jobSkill2 VARCHAR (50),
jobSkill3 VARCHAR (50),
jobSalaryMin DECIMAL,
jobSalaryMax DECIMAL,
jobVisaSponsorship VARCHAR(50),
applied BOOLEAN DEFAULT FALSE,
phoneInterview BOOLEAN DEFAULT FALSE,
siteInterview BOOLEAN DEFAULT FALSE,
offer BOOLEAN DEFAULT FALSE,
reject BOOLEAN DEFAULT FALSE,
no_response BOOLEAN DEFAULT FALSE
);

INSERT INTO jobs (jobLink, jobTitle, companyName, jobDescription, jobContact, jobLocation,jobExperienceLevel, jobType, jobSkill1, jobSalaryMin, jobSalaryMax, jobVisaSponsorship)
VALUES ("https://angel.co/bolt/jobs/310250-software-engineer-machine-learning", "Software Engineer - Machine Learning", "Bolt", "Play a mission-critical role in designing and building the risk engine that powers Bolt transactions. We’re looking for someone with the experience, creativity, and passion for producing world-class technology. Companies and consumers alike will rely heavily on what you build, and you’ll have a ton of trust and responsibility. If challenges excite you, and you’re ready for a large one, let us know.

You'll 
- Build production fraud models; your models will be the engine that powers all online commerce through Bolt 
- Conduct data analyses; your analyses will determine which policies we adopt and help inform strategic growth

We're looking for someone with... 
- Passion and drive to make improve commerce on the Internet 
- Engineering background, with 4+ years of data science experience 
- Deep understand of and experience with data analysis 
- Strong knowledge of statistics 
- Expert knowledge of a scientific computing language (R or Python) and SQL 
- Strong ability to communicate clearly and focus on impact

Nice-to-haves... 
- Previous work experience in an early stage company and knowledge of how to navigate and be successful in a startup environment. 
- Deep understanding of fraud detection, e-commerce payments and the competitive ecosystem.

Skills
Machine Learning, Data Analysis, SQL, Statistics, Data Science
Compensation
$100K – $160K 
0.001% – 0.15%
Visa Sponsorship
Available
", "Adam Lawrence", "San Francisco", 0, "Full-time", "Machine Learning", 100000, 160000, "Available");

INSERT INTO jobs (jobLink, jobTitle, companyName, jobDescription, jobContact, jobLocation,jobExperienceLevel, jobType, jobSkill1, jobSalaryMin, jobSalaryMax, jobVisaSponsorship)
VALUES ("https://angel.co/clearbit/jobs/362514-full-stack-software-engineer", "Full-stack software engineer", "Clearbit", "As an early engineer at Clearbit, you'll have a huge impact on our product and direction. You'll be working very closely with the rest of our team, creating APIs, building out server infrastructure, and managing huge amounts of data.

We value ownership highly—the ability to take an idea through all the stages from conception to shipping a product. This reflects throughout our company, but is especially true in engineering. As an engineer at Clearbit, you'll be highly independent and autonomous. Since we're building such disparate data APIs you'll be working with a large array of different technologies and fields. Expect lots of interesting challenges.

Some fun facts about Clearbit:

We power the sales and marketing data for many of the tech companies in the valley. We operate behind the scenes at companies like Asana, Zendesk, Gusto, Stripe, Intercom, and Segment to give their teams the data they need to understand their customers, and do cool things like customize their website (based on visitor IP/company) and shorten signup forms.

We have a mixture of data APIs and consumer apps. Just one of our APIs alone gets over 30 million requests a day, and we have 200k daily users of our consumer apps.

We're a big micro-service shop: ~60 internal services and 6 public facing APIs. Our services are a mixture of Go/Ruby + Sinatra. We use Postgres + DynamoDB + Aurora for persistence. Everything is hosted on EC2 + Kubernetes - about 100 nodes.

We have just over 1k customers, are profitable, and like to keep things efficient and sustainable. We're a small team of 30 - half growth, half engineers. Backgrounds from Twitter, Stripe, Google & ThoughtBot.

We're based in SOMA, San Francisco in a converted coffee warehouse, but half the team is remote. We like to do fun offsites a couple of times a year - previous ones were Costa Rica, Colombia, Tulum.", "Alex MacCaw", "San Francisco", 3, "Full-time", "Javascript", 110000, 150000, "Available");

INSERT INTO jobs (jobLink, jobTitle, companyName, jobDescription, jobContact, jobLocation,jobExperienceLevel, jobType, jobSkill1, jobSkill2,  jobSalaryMin, jobSalaryMax, jobVisaSponsorship)
VALUES ("https://angel.co/joinhouseparty/jobs/185904-backend", "Backend ", "Houseparty", "Houseparty connects people in the most human way possible when physically apart.

We are passionate about communication. As technology evolves, it is increasingly possible to enjoy meaningful social experiences - beyond a feed - with friends and family, regardless of physical distance.

Social interactions are incredibly diverse in nature, and we’re building a virtual space that works for all of them. By doing so, we empower people to have more frequent conversations with those they care about, build meaningful relationships, and have fun together.

Backend at Houseparty

At Houseparty, we provide a group video chat application built around presence. We care deeply about ensuring a seamless, top quality multimedia experience for every one of our users.

We also provide a fundamentally new type of product, and are vigorously experimental in turning our application into the best possible version of itself.

As a backend engineer at Houseparty, you can expect to work with a small team across these challenges. This includes everything from scaling our application to support product growth, to writing complex business logic that enables new product features.

Here are some things we look for: 
- A passion for server-side engineering, high-quality code, and building something meaningful 
- Experience with Scala or other systems languages (eg Go, C++, and especially other JVM languages) 
- Ditto for functional languages (Haskell, Clojure, etc) 
- Experience with distributed systems at scale, concurrency/multithreading, and realtime messaging 
- A data-conscious, iterative approach to debugging, problem-solving, and development in general 
- A strong grasp of computer science fundamentals 
- 3+ years backend experience 
- Creativity

What to include with your application: 
- Links to any online profiles (Github, LinkedIn, Twitter, etc) 
- A description of your professional experience (resume, LinkedIn profile, cover letter, or similar)

Houseparty is a product for everyone, and we are proud to reflect that internally. We value an inclusive workplace, where people enjoy helping one another grow and accomplish goals.

From project management to team structure, we are cross-functional by design. Backend engineers frequently collaborate with the Design team on UX concepts, contribute ideas to the product roadmap, and develop testable theories about user behaviors and interests. We believe that these practices promote transparency and well-roundedness.

If our passion for crafting a better way to share time resonates with you, then we would love to review your application.

Apply here: https://jobs.lever.co/houseparty/bc13732d-02b7-4086-81a8-1243471f0c68", "Eric Krash", "San Francisco", 3, "Full-time", "C++","Backend Development", 120000, 200000, "Not available");

INSERT INTO jobs (jobLink, jobTitle, companyName, jobDescription, jobContact, jobLocation,jobExperienceLevel, jobType,  jobSalaryMin, jobSalaryMax, jobVisaSponsorship)
VALUES ("https://angel.co/fathom-health/jobs/186407-software-engineer-data", "Software Engineer, Data", "Fathom", "We’re on a mission to understand and structure the world’s medical data, starting by making sense of the terabytes of clinician notes contained within the electronic health records of the world’s largest health systems. We have raised a seed round from two top institutional funds as well as founders and early team members of top startups including AirBnB, Google, and athenahealth.

We’re seeking an exceptional ML Infrastructure Engineer to work on data products that drive the core of our business--a backend expert able to unify data, and build systems that scale from both an operational and an organizational perspective.

*As an ML Infrastructure Engineer you will:* 
- Develop data infrastructure to ingest, sanitize and normalize a broad range of medical data, such as electronics health records, journals, established medical ontologies, crowd-sourced labelling and other human inputs. 
- Build performant and expressive interfaces to the data 
- Build infrastructure to help us not only scale up data ingest, but large-scale cloud-based machine learning

*We’re looking for teammates who bring:* 
- Experience building data pipelines from disparate sources 
- Hands-on experience building and scaling up compute clusters 
- Excitement about learning how to build and support machine learning pipelines that scale not just computationally, but in ways that are flexible, iterative, and geared for collaboration. 
- A solid understanding of databases and large-scale data processing frameworks like Hadoop or Spark. You’ve not only worked with a variety of technologies, but know how to pick the right tool for the job. 
- A unique combination of creative and analytic skills capable of designing a system capable of pulling together, training, and testing dozens of data sources under a unified ontology.

*Bonus points if you have experience with:* 
- Developing systems to do or support machine learning, including experience working with NLP toolkits like Stanford CoreNLP, OpenNLP, and/or Python’s NLTK. 
- Expertise with wrangling healthcare data and/or HIPAA. 
- Experience with managing large-scale data labelling and acquisition, through tools such as through Amazon Turk or DeepDive.", "Andrew Lockhart", "San Francisco", 1, "Full-time", 70000, 140000, "Available");

INSERT INTO jobs (jobLink, jobTitle, companyName, jobDescription, jobContact, jobLocation,jobExperienceLevel, jobType,  jobSalaryMin, jobSalaryMax, jobVisaSponsorship)
VALUES ("https://angel.co/crew-3/jobs/158070-front-end-developer", "Front-end Developer", "Crew", "About Crew: 
Crew is a group messaging and productivity platform geared for those who don’t work in front of a computer. We have seen tremendous organic user growth - as a result, we have an opening for an awesome Front-end Developer who enjoys writing software that people use multiple times everyday. We iterate quickly and de-centralize our decision making; therefore this person will make a huge impact on our product, users and growth.

Your Role: 
* Write great code and building new features at a rapid pace. You’ll work with a small team, but we expect you to be the take ownership over projects, laying the foundation of great code yourself and helping others around you to code to those standards. 
* Be responsible for communicating across our design, iOS, Android teams to coordinating releases of new features. We release new features on 3 clients at the same time. 
* Have empathy for our users and be part of the creative process to develop new features and products.

Ideal Experience/Qualifications: 
* 2+ years of Javascript experience in a large scale production environment. 
* Strong command of programming best practices and common libraries such as Backbone, Angular or React. 
* Used to a fast paced and collaborative environment where every voice has an impact on the product. 
* Bachelor's degree in computer science and/or relevant work experience.", "Rachel Hollis (Tassano)", "San Francisco", 1, "Full-time", 100000, 175000, "Not available");
