// Content adapted from the supplied case studies, Skills.pdf, and Reviews.pdf.
export const projects = [
  {
    "id": "sunrise",
    "category": "01 / CUSTOMER EXPERIENCE",
    "title": "Connecting the dots in the customer journey.",
    "company": "Sunrise Digital Microfinance Bank",
    "description": "Designing a Customer Experience Automation Hub to improve onboarding, activation, and customer retention.",
    "tags": [
      "Journey mapping",
      "CX automation",
      "Voice of Customer"
    ],
    "industry": "Financial services / Digital banking",
    "document": "/case-studies/sunrise-digital-microfinance-bank.pdf",
    "prototype": "https://cycle-embed-60690947.figma.site/",
    "challenge": "Research revealed interrupted verification, unclear account requirements, first-deposit friction, delayed transactions, and feedback scattered across channels. I approached these as connected customer journey problems, separating confirmed findings from assumptions about their causes.",
    "approach": [
      "Map registration, verification, account setup, first deposit, and the first 30 days of use. Identify where reassurance, education, or human assistance is needed.",
      "Validate customer stories and operational data. Prioritise problems by severity, recurrence, volume, and impact on trust.",
      "Design five connected workstreams with an accountable owner, escalation rules, accurate customer communication, and measurable success indicators."
    ],
    "measure": "Establish baselines before setting targets. Measure verification completion, interrupted onboarding recovery, first-deposit conversion, 30-day activity, confirmed transaction resolution, first meaningful response, repeat contacts, feedback assignment, action completion, and post-resolution CSAT.",
    "tools": "Proposed tools: Figma for the clickable prototype; Airtable for cases, feedback, and actions; Make or Zapier for workflow automation; Google Sheets and dashboards for performance tracking.",
    "takeaway": "Understand the friction, identify the right intervention, assign ownership, and measure whether the customer succeeds.",
    "evidence": [
      [
        "42,600",
        "App registrations"
      ],
      [
        "21.9%",
        "Registered users reaching first deposit"
      ],
      [
        "55%",
        "Funded customers active after 30 days"
      ]
    ],
    "evidenceNote": "Research baselines, not improvements achieved by the proposed solution. Active means at least two transactions within 30 days of funding.",
    "sections": [
      {
        "title": "The onboarding funnel",
        "table": {
          "headings": [
            "Stage",
            "Customers",
            "Conversion from previous stage"
          ],
          "rows": [
            [
              "App registration",
              "42,600",
              "100% (starting cohort)"
            ],
            [
              "BVN/NIN verification",
              "31,250",
              "73%"
            ],
            [
              "Selfie/liveness verification",
              "24,100",
              "77%"
            ],
            [
              "Account tier and terms",
              "19,870",
              "82%"
            ],
            [
              "First deposit",
              "9,340",
              "47%"
            ],
            [
              "Active after 30 days",
              "5,120",
              "55%"
            ]
          ]
        },
        "text": "The greatest absolute customer loss occurs before BVN/NIN verification; the sharpest proportional decline occurs before first deposit. These identify investigation priorities without proving the root causes."
      },
      {
        "title": "Five connected workstreams",
        "items": [
          "Onboarding and activation recovery: record completed stages, validate inactivity, send permitted reminders, authenticate returning customers, and offer human support. Explain expired verification sessions and guide first deposits.",
          "Transaction status and recovery: retrieve verified status from authorised systems, create a Payments or Operations case, communicate accurate updates, escalate overdue cases, and close only after a confirmed outcome.",
          "Customer support and service recovery: maintain a case owner, history, next action, deadline, and status so customers do not restart their story when a case changes teams.",
          "Voice of Customer: capture source and date, categorise feedback, identify duplicates, group themes, prioritise issues, assign owners, and track actions through review.",
          "Performance and insights: connect funnel, verification, activation, transaction cases, support performance, feedback themes, and outstanding improvement actions in one reporting view."
        ]
      },
      {
        "title": "Ownership and collaboration",
        "text": "Customer Success coordinates the experience and customer updates. Product and Engineering own verification functionality; Product and Compliance own tier information; Payments and Operations investigate transactions. Each case needs an accountable owner and escalation path."
      },
      {
        "title": "A phased implementation",
        "items": [
          "Validate research, customer journeys, technical causes, baselines, ownership, thresholds, and communication rules.",
          "Design the recovery journeys, case workflows, central feedback inbox, dashboard views, and clickable prototype.",
          "Run a controlled pilot using sample or approved data; test assignment, escalation, duplicate handling, accurate messages, and failure scenarios.",
          "Subject to technical, compliance, and operational approval, integrate authorised systems, train teams, monitor KPIs, and improve the workflows."
        ]
      },
      {
        "title": "Risks and controls",
        "items": [
          "Use approved systems and access controls for sensitive customer data. Keep identity and financial credentials out of unsecured automation tools.",
          "Communicate transaction outcomes only from authorised sources; a notification is not proof that money has been reversed.",
          "Apply consent-based communication and frequency limits. Validate inactivity thresholds and deduplicate feedback.",
          "Monitor automation errors, preserve manual fallback processes, and keep unresolved cases visible."
        ]
      },
      {
        "title": "Intended customer and business impact",
        "text": "The proposed hub aims to reduce avoidable abandonment, improve first-deposit guidance, make transaction communication clearer, reduce repeat enquiries, and strengthen accountability. No post-implementation results have been supplied; these remain intended outcomes."
      },
      {
        "title": "Sunrise Pocket prototype",
        "text": "The clickable Figma concept demonstrates proposed onboarding and account-access experiences, with clearer verification steps and progress visibility. It is a conceptual case-study prototype, not a live banking application."
      }
    ]
  },
  {
    "id": "okonkwo",
    "category": "02 / PROACTIVE CUSTOMER SUCCESS",
    "title": "Spot the signal. Restore the value.",
    "company": "Okonkwo FinTech Solutions · BukkiBooks",
    "description": "Designing a proactive customer health and product adoption recovery system for BukkiBooks.",
    "tags": [
      "Customer health",
      "Adoption recovery",
      "Proactive engagement"
    ],
    "industry": "FinTech / Cloud accounting software",
    "document": "/case-studies/okonkwo-fintech-solutions.pdf",
    "challenge": "Ihuoma Fashion House had stopped reconciling inventory for five weeks after a new manager joined without adequate product training. The challenge was to identify the actual blocker and restore successful workflow adoption. Inactivity warrants investigation; it does not establish dissatisfaction, financial loss, or an intention to cancel.",
    "approach": [
      "Review usage history, previous workflow ownership, other feature activity, errors, and support requests. Combine adoption, engagement, feedback, stakeholder changes, and renewal context.",
      "Flag the account for an adoption review using an agreed health framework. Reach out personally, acknowledge the management change, and identify whether the blocker is training, technology, data, process, or ownership.",
      "Deliver targeted assistance. For a training gap, demonstrate reconciliation, let the new manager complete it independently, and provide practical guidance and support resources.",
      "Follow up after the intervention. Verify that inventory reconciliation resumes and remains consistent before updating customer health or closing the recovery plan."
    ],
    "measure": "Measure inventory reconciliation recovery rate, time to adoption recovery, sustained feature use, time to intervention, alert-to-action rate, training effectiveness, completed follow-ups, and validated customer health recovery. Review retention trends over time without claiming an improvement before post-intervention data exists.",
    "tools": "Proposed tools: Mixpanel for product activity; HubSpot for account and health records; Zapier for alerts and follow-up tasks; Slack or email for CSM notifications. Event tracking, integrations, and data access require validation.",
    "takeaway": "Identify adoption risks early, understand the reason behind them, provide the right intervention, and verify that customers are receiving value from the product.",
    "evidence": [
      [
        "5 weeks",
        "Inventory reconciliation inactive"
      ],
      [
        "1 change",
        "New manager without adequate training"
      ],
      [
        "Key goal",
        "Resumed and sustained workflow use"
      ]
    ],
    "evidenceNote": "Case context and proposed success criteria. No production deployment, adoption recovery, or retention improvement is claimed.",
    "sections": [
      {
        "title": "Customer and business context",
        "text": "BukkiBooks is a cloud accounting and invoicing product used by Ihuoma Fashion House, a fashion retail business. A change in personnel introduced a knowledge-transfer and workflow ownership gap. The intervention should focus on the affected inventory workflow rather than restarting the entire onboarding journey."
      },
      {
        "title": "From signal to intervention",
        "items": [
          "Monitor important product events and define inactivity thresholds that match each customer’s expected usage cadence.",
          "Validate the signal using other features, personnel changes, recent support activity, and customer context.",
          "Update the HubSpot health record with the account, CSM, last workflow date, concern, history, next action, and follow-up date.",
          "Create a CSM task and send a contextual Slack or email notification. The CSM reviews the situation and contacts the customer personally.",
          "Record training, troubleshooting, or escalation; monitor recovery and update customer health only when supported by evidence."
        ]
      },
      {
        "title": "Proposed customer health framework",
        "table": {
          "headings": [
            "Status",
            "Signals and CSM response"
          ],
          "rows": [
            [
              "Healthy",
              "Consistent key-feature usage and positive engagement. Maintain contact and identify additional value."
            ],
            [
              "Needs Attention",
              "Declining usage or isolated feature inactivity. Investigate and offer targeted guidance."
            ],
            [
              "At Risk",
              "Prolonged key-workflow inactivity with broader concerns. Prioritise outreach, a recovery plan, and monitoring."
            ],
            [
              "Recovery in Progress",
              "The customer has engaged with intervention; sustained adoption still needs confirmation."
            ],
            [
              "Recovered",
              "The key workflow has resumed and successful usage is demonstrated. Confirm the outcome and adjust the engagement cadence."
            ]
          ]
        },
        "text": "Adapt health classifications to the product lifecycle and expected usage. A monthly workflow should not generate a weekly inactivity alert."
      },
      {
        "title": "Targeted training and account ownership",
        "items": [
          "Understand the customer’s current inventory process and review the relevant BukkiBooks features.",
          "Demonstrate reconciliation using a practical example, explain common errors, and ask the new manager to complete the workflow independently.",
          "Provide repeatable documentation and role-specific onboarding so future personnel changes do not recreate the same gap.",
          "The CSM owns outreach and follow-up; Support or Product addresses technical barriers; Product Analytics supports recovery monitoring."
        ]
      },
      {
        "title": "Contextual customer outreach",
        "text": "The proposed outreach references the missing inventory reconciliation, acknowledges the management change, offers a short walkthrough, and invites the customer to choose a convenient time. The aim is to offer practical help rather than chase logins."
      },
      {
        "title": "Risks and controls",
        "items": [
          "Validate event tracking and usage data to prevent false inactivity alerts. Combine multiple signals when assessing customer health.",
          "Use agreed thresholds and prioritisation to reduce alert fatigue. Keep outreach personal and CSM-led.",
          "Confirm the actual blocker before recommending training; escalate technical issues to the appropriate team.",
          "Monitor sustained activity before marking recovery, and maintain documentation for future staff changes."
        ]
      },
      {
        "title": "Intended outcomes",
        "text": "The proposed system aims to detect adoption gaps earlier, improve role-specific onboarding, make health signals actionable, and establish a repeatable recovery process. The desired outcome is independent, sustained use of important workflows—not simply more logins or attendance at training."
      }
    ]
  }
];

export const skillGroups = [
  {
    "title": "Customer success & relationships",
    "items": [
      "Customer Success Management",
      "Customer Onboarding & Implementation",
      "Customer Retention & Churn Prevention",
      "Product Adoption & User Engagement",
      "Account Management & Relationship Building"
    ]
  },
  {
    "title": "Customer experience & insight",
    "items": [
      "Customer Experience Management",
      "Customer Relationship Management (CRM)",
      "Customer Health Monitoring",
      "Customer Support & Issue Resolution",
      "Voice of Customer (VoC) Analysis"
    ]
  },
  {
    "title": "Operations & collaboration",
    "items": [
      "Customer Journey Mapping",
      "Customer Success Operations",
      "Cross-functional Collaboration",
      "Process Improvement & Workflow Design",
      "Customer Data Analysis & Reporting"
    ]
  }
];

export const reviews = [
  {
    "title": "Confidence from the very first session.",
    "quote": "It was a great session I had with Tricia, who explained everything very clearly and made me feel really confident about using Fyxer AI moving forward",
    "name": "Mark N.",
    "role": "Client"
  },
  {
    "title": "Patience, clarity, and genuine care.",
    "quote": "Patricia provided excellent customer success and support for our team. She is professional, consistent, and brings a warmth to every customer interaction that puts people at ease. Her ability to guide new users through onboarding with patience and clarity stood out, as did her skill in capturing meaningful customer feedback and relaying it back to our product and support teams. Patricia is dependable, detail-oriented, and genuinely cares about delivering a great experience. I'd highly recommend her to anyone looking for a strong customer-facing professional.",
    "name": "Alexa M.",
    "role": "Customer Success/Onboarding Manager"
  },
  {
    "title": "Going the extra mile.",
    "quote": "Tricia helped us find some hidden features which can greatly expand Fyxer AI’s usefulness. This follow-up call for a software subscription service felt unusual and very much like going the “extra mile,” but I really appreciated it. The extra level of service was a great experience",
    "name": "Client",
    "role": "Name not provided"
  },
  {
    "title": "Attention to detail. Strong relationships.",
    "quote": "It was an exciting experience working with Tricia. She pays great deal of attention to details and has great rapport with the team she worked with. I will surely recommend her for customer service/success related roles. I also look forward to working with her soonest",
    "name": "Cynthia",
    "role": "Professional recommendation"
  },
  {
    "title": "Reliable healthcare support.",
    "quote": "Patricia was highly reliable and professional in handling medical insurance verification and billing tasks. She communicated clearly, met deadlines consistently, and provided accurate results. I would definitely recommend her for any healthcare administrative support.",
    "name": "Haeyong H.",
    "role": "CEO, Byeolhas Nigeria Limited"
  },
  {
    "title": "Poise in every conversation.",
    "quote": "Shoutouts to Tricia for letting me shadow and host calls with her. She deals with every type of questions you can think of and handle them with poise and confidence, including getting users signed up or performing a little sales pitch when needed. Keep up the amazing work!",
    "name": "Matt K.",
    "role": "Team feedback"
  },
  {
    "title": "Follow-through that matters.",
    "quote": "Tricia did a great job by consistently following up to assist me with the success of my appointment",
    "name": "Dorothy",
    "role": "Client"
  },
  {
    "title": "A job well done.",
    "quote": "Extremely good job today Tricia",
    "name": "Sam A.",
    "role": "Customer Success/Sales Manager"
  },
  {
    "title": "Taking the lead for the customer.",
    "quote": "Amazing, thank you for taking the lead, Tricia and so pleased to hear the customer is happy",
    "name": "Alexa M.",
    "role": "Customer Success/Onboarding Manager"
  },
  {
    "title": "Handled like a pro.",
    "quote": "Amazing! Tricia, handled it like a pro",
    "name": "Sofi",
    "role": "Colleague"
  }
];
