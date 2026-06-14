// ==========================================
// MOCK DATABASE & SECTOR DIRECTORY
// ==========================================
const careersData = [
  {
    id: "astronaut",
    title: "Astronaut",
    sector: "Space Science",
    sectorKey: "space",
    icon: "🚀",
    description: "Command spacecraft, conduct orbital experiments, and align flight paths in low-Earth orbit.",
    salaryMin: "₹8,00,000",
    salaryMax: "₹30,00,000",
    salaryPct: 85,
    salaries: {
      beginner: "₹8–12 LPA",
      mid: "₹15–25 LPA",
      expert: "₹30+ LPA"
    },
    theme: "astronaut",
    skills: [
      { name: "Orbital Mechanics", desc: "Understanding trajectory vectors, Keplerian mechanics, and Hohmann orbital transfers.", icon: "🌌", level: "Expert", pct: 90 },
      { name: "Extreme Physiology", desc: "Handling high G-forces, spatial disorientation, and maintaining oxygen consumption control.", icon: "🫁", level: "Advanced", pct: 85 },
      { name: "Telemetry Analytics", desc: "Interpreting live spacecraft instrumentation feeds, navigation grids, and communications.", icon: "📊", level: "Expert", pct: 95 },
      { name: "Crisis Resolution", desc: "Making split-second life-support and flight vector corrections under stress.", icon: "⚠️", level: "Master", pct: 98 }
    ],
    roadmap: [
      { step: "Academic STEM Foundation", detail: "Earn a Bachelor of Science (B.Sc.) or Engineering degree in Physics, Aeronautics, Mathematics, or Computer Science from an accredited institution. Maintain top academic percentiles." },
      { step: "Post-Graduate Specialization", detail: "Complete a Master's or Doctorate in aerospace systems, medical physics, or advanced research. Post-graduate degrees are highly weighted in astronaut screening." },
      { step: "High-Performance Flight Hours", detail: "Accumulate at least 1,000 hours of pilot-in-command experience in high-performance jet aircraft, or complete intensive professional flight telemetry programs." },
      { step: "Selection & Medical Screening", detail: "Pass the rigorous selection process, including psychiatric profiles, cardiovascular stress checks, Corrected 20/20 visual acuity tests, and strict height parameters (149 to 193 cm)." },
      { step: "Astronaut Candidate Core (ASCAN)", detail: "Complete the 2-year Candidate program: survival runs, Neutral Buoyancy Lab spacewalk drills, microgravity parabolas, Russian language training, and shuttle systems." },
      { step: "Expedition Mission Integration", detail: "Assign to active space missions (ISS, Lunar, or Deep Space Gateway). Train on orbital docking mechanics, payload configurations, and emergency spacecraft controls." }
    ],
    challenges: [
      { title: "Orbit Drift Emergency", desc: "Correct a 1.2-degree orbital misalignment with limited thruster fuel. Refine vector angles under time pressure." },
      { title: "Solar Storm Triage", desc: "Safeguard cabin life supports and electronic guidance grids from high-radiation space surges." }
    ],
    mockupTitle: "OrbitCommand v4.2",
    mockupMetrics: { sys: "READY", val: "99.1%", res: "12800 MJ" },
    image: "assets/astronaut_career.png",
    questions: [
      {
        text: "You are preparing for a space mission. A minor telemetry variance is discovered in the pressure seal system 10 minutes before launch.",
        correctIdx: 1,
        explanation: "Correct Answer: B. Any cabin pressure telemetry variance is a critical safety hazard. Launching with potential seal damage violates primary launch safety parameters, while bypassing sensors can lead to fatal decompression.",
        options: [
          { text: "Proceed with launch to prevent costly schedule delays, monitoring the issue in real-time.", scores: { leadership: 5, problemSolving: 5, creativity: 2, communication: 2, criticalThinking: 10 } },
          { text: "Initiate immediate abort protocols and command telemetry team to run physical system diagnostics.", scores: { leadership: 10, problemSolving: 15, creativity: 5, communication: 10, criticalThinking: 20 } },
          { text: "Acknowledge issue, ask cabin crew to bypass the sensor readout, and verify pressure levels manually.", scores: { leadership: 5, problemSolving: 10, creativity: 12, communication: 5, criticalThinking: 8 } }
        ]
      },
      {
        text: "Your cabin crew disagrees on a manual entry trajectory correction vector while entering lunar orbit.",
        correctIdx: 1,
        explanation: "Correct Answer: B. Space operations utilize Crew Resource Management (CRM). Decisions should rely on a rapid review of hard telemetry and teamwork, rather than unilateral command authority or passive delay, which could lead to orbital miss.",
        options: [
          { text: "Exercise commander authority to decide the trajectory yourself without consultation.", scores: { leadership: 15, problemSolving: 5, creativity: 2, communication: 2, criticalThinking: 10 } },
          { text: "Facilitate a rapid technical review, gather the raw navigation data, and arrive at a team consensus.", scores: { leadership: 12, problemSolving: 15, creativity: 8, communication: 20, criticalThinking: 18 } },
          { text: "Postpone vector adjustments and wait for ground control to respond, risking orbit exit.", scores: { leadership: 2, problemSolving: 5, creativity: 10, communication: 10, criticalThinking: 5 } }
        ]
      },
      {
        text: "An emergency pressure alarm sounds. Oxygen levels in Section B are dropping by 0.5% per minute.",
        correctIdx: 0,
        explanation: "Correct Answer: A. Rapid containment is crucial during decompression. Bulkhead seals isolate the leak immediately, protecting the rest of the vessel and preventing total oxygen depletion, while manual searches waste valuable time.",
        options: [
          { text: "Seal the section immediately to isolate the leak, even if crew members are inside.", scores: { leadership: 20, problemSolving: 10, creativity: 2, communication: 5, criticalThinking: 15 } },
          { text: "Organize an emergency EVA repair team to locate the external breach while venting reserve tanks.", scores: { leadership: 10, problemSolving: 20, creativity: 15, communication: 10, criticalThinking: 10 } },
          { text: "Instruct all crew to wear auxiliary breathing masks and search Section B manually for the breach.", scores: { leadership: 5, problemSolving: 8, creativity: 10, communication: 15, criticalThinking: 5 } }
        ]
      },
      {
        text: "A solar particle storm is predicted to impact the space station in 2 hours, risking telemetry grids.",
        correctIdx: 0,
        explanation: "Correct Answer: A. Powering down grids protects delicate solid-state electronics from electromagnetic induction charges. Moving to the heavily shielded module protects the crew from lethal cosmic radiation.",
        options: [
          { text: "Power down non-essential telemetry grids and move crew to the shielded storm shelter.", scores: { leadership: 12, problemSolving: 15, creativity: 5, communication: 12, criticalThinking: 20 } },
          { text: "Keep systems active to capture solar radiation data, monitoring station health indicators live.", scores: { leadership: 5, problemSolving: 10, creativity: 20, communication: 5, criticalThinking: 8 } },
          { text: "Evacuate the station immediately using the emergency escape capsule back to Earth.", scores: { leadership: 2, problemSolving: 5, creativity: 2, communication: 10, criticalThinking: 5 } }
        ]
      },
      {
        text: "A critical communications blackout with Mission Control lasts longer than the expected 15 minutes.",
        correctIdx: 1,
        explanation: "Correct Answer: B. In blackouts, active local diagnostics and deploying backup transmission arrays are the standard operational steps to recover communications before taking drastic abort measures.",
        options: [
          { text: "Maintain current flight coordinates and wait passively for signal acquisition.", scores: { leadership: 5, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 10 } },
          { text: "Deploy secondary satellite dish array and attempt local system diagnostic overrides.", scores: { leadership: 10, problemSolving: 20, creativity: 15, communication: 10, criticalThinking: 12 } },
          { text: "Execute emergency abort telemetry sequence to return to Earth orbit immediately.", scores: { leadership: 15, problemSolving: 8, creativity: 5, communication: 15, criticalThinking: 5 } }
        ]
      },
      {
        text: "You discover an anomaly in asteroid soil samples. The crew wants to keep researching, but the departure window is closing.",
        correctIdx: 0,
        explanation: "Correct Answer: A. Departure windows in orbital mechanics are non-negotiable. Missing a window can mean running out of return fuel or failing to capture the correct Earth-insertion trajectory.",
        options: [
          { text: "Stick strictly to the scheduled departure time, prioritizing safety and return vectors.", scores: { leadership: 18, problemSolving: 10, creativity: 5, communication: 10, criticalThinking: 20 } },
          { text: "Delay departure by 1 hour to gather more sample data, accepting a tighter return fuel margin.", scores: { leadership: 10, problemSolving: 15, creativity: 20, communication: 15, criticalThinking: 10 } },
          { text: "Leave one crew member behind with the research equipment to continue analyzing while the main ship departs.", scores: { leadership: 2, problemSolving: 2, creativity: 10, communication: 5, criticalThinking: 2 } }
        ]
      }
    ]
  },
  {
    id: "doctor",
    title: "Medical Doctor",
    sector: "Healthcare & Medicine",
    sectorKey: "medical",
    icon: "🩺",
    description: "Diagnose illnesses, perform life-saving surgeries, and leverage digital imaging technology.",
    salaryMin: "₹6,0,000",
    salaryMax: "₹40,0,000",
    salaryPct: 90,
    salaries: {
      beginner: "₹6–12 LPA",
      mid: "₹15–30 LPA",
      expert: "₹40+ LPA"
    },
    theme: "doctor",
    skills: ["Clinical Diagnostics", "Surgical Precision", "Patient Empathy", "Bio-Technology Integration"],
    roadmap: [
      { step: "Pre-Med / MBBS Degree", detail: "Master anatomy, biochemistry, and clinical medicine." },
      { step: "Junior Residency & Rotations", detail: "Gain critical hands-on experience in hospital wards." },
      { step: "MD / MS Specialization", detail: "Specialize in cardiology, neurology, or general surgery." },
      { step: "Attending Consultant Practice", detail: "Treat patients independently and lead clinical wards." }
    ],
    challenges: [
      { title: "Cardiac Triage Emergency", desc: "A patient presents with acute chest pains. Select correct diagnostic scans and direct critical therapy under 120 seconds." },
      { title: "ER Crisis Influx", desc: "Coordinate treatment vectors when multiple trauma cases arrive simultaneously with limited resources." }
    ],
    mockupTitle: "BioDiagnostics.v2",
    mockupMetrics: { sys: "HEART_OK", val: "98.5%", res: "120 bpm" },
    image: "assets/doctor_career.png",
    questions: [
      {
        text: "A patient presents with vague abdominal pain, but standard scans are inconclusive. The family demands immediate discharge.",
        options: [
          { text: "Discharge the patient with standard pain relievers to free up the observation ward.", scores: { leadership: 5, problemSolving: 5, creativity: 5, communication: 10, criticalThinking: 8 } },
          { text: "Keep the patient under observation and order a specific contrast CT scan to rule out rare anomalies.", scores: { leadership: 10, problemSolving: 15, creativity: 12, communication: 10, criticalThinking: 20 } },
          { text: "Ask the chief resident to take over the decision, shifting responsibility.", scores: { leadership: 2, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 5 } }
        ]
      },
      {
        text: "During a surgical procedure, you notice a sudden, unexpected drop in patient oxygen saturation.",
        options: [
          { text: "Instruct the assistant to check the ventilator lines immediately while pausing the dissection.", scores: { leadership: 15, problemSolving: 20, creativity: 5, communication: 15, criticalThinking: 18 } },
          { text: "Continue the surgery as quickly as possible to get the patient off the table.", scores: { leadership: 5, problemSolving: 5, creativity: 5, communication: 5, criticalThinking: 8 } },
          { text: "Call for a senior surgeon to enter the room without examining local lines first.", scores: { leadership: 5, problemSolving: 10, creativity: 2, communication: 10, criticalThinking: 5 } }
        ]
      },
      {
        text: "A patient's family requests a holistic alternative therapy that conflicts directly with proven clinical drugs.",
        options: [
          { text: "Refuse treatment outright and ask the patient to seek another healthcare facility.", scores: { leadership: 10, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 12 } },
          { text: "Explain clinical risks clearly, present evidence-based comparisons, and propose a safe integrated plan.", scores: { leadership: 15, problemSolving: 15, creativity: 12, communication: 20, criticalThinking: 18 } },
          { text: "Acquiesce to their demands completely without warning them of scientific outcomes.", scores: { leadership: 2, problemSolving: 5, creativity: 10, communication: 10, criticalThinking: 2 } }
        ]
      },
      {
        text: "You are the lead doctor in an ER understaffed during a major holiday. Three critical trauma cases arrive at once.",
        options: [
          { text: "Triage patients based on severity, delegating minor stabilization tasks to junior nurses.", scores: { leadership: 20, problemSolving: 18, creativity: 8, communication: 15, criticalThinking: 15 } },
          { text: "Try to treat the first patient who arrived, leaving others in the waiting area.", scores: { leadership: 5, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 8 } },
          { text: "Request the ambulance crew to divert two patients to another hospital 20 minutes away.", scores: { leadership: 8, problemSolving: 10, creativity: 10, communication: 10, criticalThinking: 5 } }
        ]
      },
      {
        text: "A new AI diagnostic software suggests a different pathology than your clinical findings.",
        options: [
          { text: "Ignore the software completely, trusting your personal instincts.", scores: { leadership: 8, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 5 } },
          { text: "Re-examine the clinical indicators, cross-reference both reports, and consult a senior pathologist.", scores: { leadership: 12, problemSolving: 20, creativity: 10, communication: 15, criticalThinking: 20 } },
          { text: "Accept the AI diagnostics blindly without verifying its parameters.", scores: { leadership: 2, problemSolving: 8, creativity: 12, communication: 5, criticalThinking: 8 } }
        ]
      }
    ]
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    sector: "Business & Startups",
    sectorKey: "business",
    icon: "💼",
    description: "Launch disruptive startups, design scalable business models, and pitch to venture capital firms.",
    salaryMin: "₹3,0,000",
    salaryMax: "₹50,0,000",
    salaryPct: 95,
    salaries: {
      beginner: "₹3–8 LPA",
      mid: "₹12–25 LPA",
      expert: "₹50+ LPA"
    },
    theme: "ceo",
    skills: ["Business Pitching", "Financial Modeling", "Strategic Leadership", "Risk Assessment"],
    roadmap: [
      { step: "Idea Validation & MVP", detail: "Build a prototype and test basic user value propositions." },
      { step: "Seed Funding Pitch", detail: "Pitch to angel investors and secure proof of market concept." },
      { step: "Product Market Fit (PMF)", detail: "Iterate product features based on scalable user retention numbers." },
      { step: "Series A / Scaling Stage", detail: "Scale team operations, expand marketing vectors, and grow revenue." }
    ],
    challenges: [
      { title: "VC Pitch Deck Grind", desc: "Pitch your startup model to 5 critical VC partners. Correct valuation margins under direct interrogation." },
      { title: "Cash Flow Runway Deficit", desc: "Manage payroll and operational costs with only 4 weeks of capital runway remaining." }
    ],
    mockupTitle: "CapTable.xls",
    mockupMetrics: { sys: "FUNDED", val: "₹15.2 Cr", res: "24m Runway" },
    image: "assets/entrepreneur_career.png",
    questions: [
      {
        text: "An investor offers seed funding but demands a 45% equity stake, giving them veto power over key hires.",
        options: [
          { text: "Accept the deal immediately to secure necessary operational cash flow.", scores: { leadership: 5, problemSolving: 10, creativity: 5, communication: 10, criticalThinking: 5 } },
          { text: "Decline the offer, counter with 20%, and pitch to alternative angel investors.", scores: { leadership: 18, problemSolving: 15, creativity: 12, communication: 18, criticalThinking: 20 } },
          { text: "Agree to their terms, but plan to dilute their shares in a secret secondary round.", scores: { leadership: 5, problemSolving: 8, creativity: 15, communication: 5, criticalThinking: 8 } }
        ]
      },
      {
        text: "Your primary product launch experiences a critical bug, crashing for 80% of active beta users.",
        options: [
          { text: "Hide the issue from users while directing the engineering crew to work overtime.", scores: { leadership: 5, problemSolving: 10, creativity: 5, communication: 2, criticalThinking: 8 } },
          { text: "Issue a transparent update, offer compensation rewards, and roll back to the last stable build.", scores: { leadership: 20, problemSolving: 15, creativity: 12, communication: 20, criticalThinking: 15 } },
          { text: "Keep the bugged app live and launch a marketing campaign to distract the community.", scores: { leadership: 2, problemSolving: 5, creativity: 15, communication: 10, criticalThinking: 2 } }
        ]
      },
      {
        text: "Your co-founder disagrees on target market direction, advocating a pivot from B2C to B2B.",
        options: [
          { text: "Insist on B2C unilaterally, since the initial prototype idea was yours.", scores: { leadership: 10, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 8 } },
          { text: "Run small validation tests for both routes, review metrics, and decide based on target conversion costs.", scores: { leadership: 15, problemSolving: 20, creativity: 15, communication: 15, criticalThinking: 20 } },
          { text: "Let the co-founder pivot, but step back from active development to avoid arguments.", scores: { leadership: 2, problemSolving: 5, creativity: 5, communication: 10, criticalThinking: 5 } }
        ]
      },
      {
        text: "Market feedback shows that users love a secondary feature of your app more than the core function.",
        options: [
          { text: "Pivot your marketing and development to make the secondary feature the main product focus.", scores: { leadership: 15, problemSolving: 18, creativity: 20, communication: 15, criticalThinking: 15 } },
          { text: "Remove the secondary feature to keep users focused on your original vision.", scores: { leadership: 5, problemSolving: 2, creativity: 2, communication: 5, criticalThinking: 10 } },
          { text: "Leave both active but spend double on marketing to boost the core function's metrics.", scores: { leadership: 8, problemSolving: 10, creativity: 8, communication: 10, criticalThinking: 8 } }
        ]
      },
      {
        text: "You have 6 weeks of cash runway left and your next funding round is delayed by a month.",
        options: [
          { text: "Freeze hiring, pause marketing, and request existing employees to take temporary pay cuts.", scores: { leadership: 18, problemSolving: 20, creativity: 10, communication: 18, criticalThinking: 15 } },
          { text: "Take out high-interest personal loans to maintain operations without changes.", scores: { leadership: 8, problemSolving: 10, creativity: 5, communication: 5, criticalThinking: 8 } },
          { text: "Keep spending at the same rate, hoping the funding delay is resolved sooner.", scores: { leadership: 2, problemSolving: 2, creativity: 5, communication: 5, criticalThinking: 2 } }
        ]
      }
    ]
  },
  {
    id: "pilot",
    title: "Commercial Pilot",
    sector: "Aviation & Aerospace",
    sectorKey: "aviation",
    icon: "✈️",
    description: "Navigate multi-engine commercial jets, manage autopilot systems, and ensure flight cabin safety.",
    salaryMin: "₹15,0,000",
    salaryMax: "₹60,0,000",
    salaryPct: 98,
    salaries: {
      beginner: "₹15–25 LPA",
      mid: "₹30–50 LPA",
      expert: "₹60+ LPA"
    },
    theme: "pilot",
    skills: ["Aerodynamics", "Instrument Flight", "Crew Resource Management", "Meteorology Guidance"],
    roadmap: [
      { step: "Student Pilot License (SPL)", detail: "Pass aviation theory exams and complete solo flight hours." },
      { step: "Commercial License (CPL)", detail: "Accumulate 200+ flying hours and pass instrument assessments." },
      { step: "Type Rating Certification", detail: "Get qualified on specific narrow/wide-body commercial jetliners." },
      { step: "First Officer to Captain", detail: "Earn line seniority hours and pass regular simulator checks." }
    ],
    challenges: [
      { title: "Severe Turbulence Vectoring", desc: "Cross a sudden high-altitude convective storm. Calculate flight bypass vectors under heavy aerodynamic shear." },
      { title: "Dual Hydraulic Failure", desc: "Safely land a mock passenger jetliner using secondary analog cable backups and trim stabilizers." }
    ],
    mockupTitle: "AvionicsHUD.deck",
    mockupMetrics: { sys: "ALT_HOLD", val: "32000 ft", res: "Mach 0.82" },
    image: "assets/pilot_career.png",
    questions: [
      {
        text: "You encounter severe unexpected convective wind shear at 1000 feet during landing approach.",
        options: [
          { text: "Disconnect autopilot, execute immediate go-around checklist, and climb to safety.", scores: { leadership: 15, problemSolving: 20, creativity: 5, communication: 15, criticalThinking: 20 } },
          { text: "Attempt to push through the wind shear to maintain landing schedule.", scores: { leadership: 5, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 8 } },
          { text: "Wait for the copilot to take manual controls while monitoring warning screens.", scores: { leadership: 5, problemSolving: 10, creativity: 5, communication: 10, criticalThinking: 5 } }
        ]
      },
      {
        text: "An engine warning indicator light flashes yellow. Ground Control is offline due to local interference.",
        options: [
          { text: "Disregard indicator since the engine noise and temperature feel normal.", scores: { leadership: 5, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 8 } },
          { text: "Follow QRH procedures, isolate the affected engine sensor, and monitor parameters.", scores: { leadership: 12, problemSolving: 18, creativity: 8, communication: 12, criticalThinking: 20 } },
          { text: "Shutdown the engine immediately without checking diagnostic charts.", scores: { leadership: 10, problemSolving: 10, creativity: 5, communication: 10, criticalThinking: 5 } }
        ]
      },
      {
        text: "A passenger becomes highly disruptive, trying to access the flight deck door during cruise flight.",
        options: [
          { text: "Open the door to talk to the passenger personally and de-escalate.", scores: { leadership: 5, problemSolving: 2, creativity: 2, communication: 10, criticalThinking: 2 } },
          { text: "Secure flight deck door, instruct cabin crew to use restraint kits, and declare emergency landing vectors.", scores: { leadership: 20, problemSolving: 15, creativity: 10, communication: 18, criticalThinking: 18 } },
          { text: "Ignore the situation and focus strictly on autopilot instrumentation screens.", scores: { leadership: 2, problemSolving: 5, creativity: 5, communication: 5, criticalThinking: 5 } }
        ]
      },
      {
        text: "Your copilot shows signs of severe fatigue, missing two consecutive altitude change radio calls.",
        options: [
          { text: "Assume radio communications, request the copilot to rest, and instruct cabin crew to provide support.", scores: { leadership: 18, problemSolving: 15, creativity: 8, communication: 20, criticalThinking: 15 } },
          { text: "Reprimand the copilot loudly to wake them up and ensure they stay active.", scores: { leadership: 5, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 5 } },
          { text: "Do not intervene to avoid creating awkward cabin tension.", scores: { leadership: 2, problemSolving: 2, creativity: 5, communication: 5, criticalThinking: 2 } }
        ]
      },
      {
        text: "You are low on fuel and the destination airport has a runway closure. Alternate airport has crosswinds.",
        options: [
          { text: "Circle the closed runway, hoping they open it before fuel levels reach minimum reserves.", scores: { leadership: 5, problemSolving: 10, creativity: 2, communication: 10, criticalThinking: 10 } },
          { text: "Calculate precise landing parameters, communicate fuel emergency, and divert to alternate airport.", scores: { leadership: 15, problemSolving: 20, creativity: 12, communication: 15, criticalThinking: 20 } },
          { text: "Ask passenger cabin crew to choose where they would prefer to land.", scores: { leadership: 2, problemSolving: 2, creativity: 10, communication: 5, criticalThinking: 2 } }
        ]
      }
    ]
  },
  {
    id: "ai_engineer",
    title: "AI Engineer",
    sector: "Artificial Intelligence",
    sectorKey: "tech",
    icon: "🧠",
    description: "Train large language models, tune neural hyperparameters, and architect deep learning frameworks.",
    salaryMin: "₹6,0,000",
    salaryMax: "₹45,0,000",
    salaryPct: 92,
    salaries: {
      beginner: "₹6–12 LPA",
      mid: "₹15–30 LPA",
      expert: "₹45+ LPA"
    },
    theme: "ai-engineer",
    skills: ["Deep Learning", "Python & PyTorch", "Model Convergence", "Algorithmic Engineering"],
    roadmap: [
      { step: "Computer Science B.Sc.", detail: "Master algorithms, linear algebra, and data science basics." },
      { step: "Data Engineer Practice", detail: "Manage scalable pipelines, data clean scripts, and SQL grids." },
      { step: "Machine Learning Focus", detail: "Train models, build CNNs, Transformers, and optimization scripts." },
      { step: "Principal AI Scientist", detail: "Lead generative AI architecture, tune parameters, and scale models." }
    ],
    challenges: [
      { title: "Model Loss Explosion", desc: "Tweak learning rate schedules and gradient clipping boundaries to save a 50B parameter training run." },
      { title: "Algorithmic Bias Audit", desc: "Re-weight training datasets to prevent social or cultural bias factors in active diagnostic LLMs." }
    ],
    mockupTitle: "TensorFlow.node",
    mockupMetrics: { sys: "TRAINING", val: "Loss: 0.012", res: "8x H100 GPU" },
    image: "assets/ai_engineer_career.png",
    questions: [
      {
        text: "Your model training loss is exploding, showing NaN after 12 hours of training on a costly GPU cluster.",
        options: [
          { text: "Terminate training, reduce the learning rate by a factor of 10, and implement gradient clipping.", scores: { leadership: 10, problemSolving: 20, creativity: 8, communication: 10, criticalThinking: 20 } },
          { text: "Continue training for another 12 hours, hoping the loss automatically stabilizes.", scores: { leadership: 2, problemSolving: 5, creativity: 5, communication: 5, criticalThinking: 8 } },
          { text: "Change the network architecture entirely and compile a smaller model from scratch.", scores: { leadership: 8, problemSolving: 12, creativity: 15, communication: 10, criticalThinking: 10 } }
        ]
      },
      {
        text: "A biases audit reveals that your credit rating model gives lower scores to candidates from specific zip codes.",
        options: [
          { text: "Deploy the model regardless, since the statistical accuracy numbers are high.", scores: { leadership: 5, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 10 } },
          { text: "Remove the zip code variable, balance the training data weights, and retrain the network.", scores: { leadership: 15, problemSolving: 18, creativity: 12, communication: 15, criticalThinking: 20 } },
          { text: "Hardcode rules to increase scores for the affected zip codes after model output.", scores: { leadership: 10, problemSolving: 10, creativity: 15, communication: 10, criticalThinking: 5 } }
        ]
      },
      {
        text: "You need to run an LLM on mobile devices, but the model footprint is too large for consumer hardware.",
        options: [
          { text: "Apply weight quantization and knowledge distillation to shrink the model with minimal accuracy loss.", scores: { leadership: 10, problemSolving: 20, creativity: 18, communication: 10, criticalThinking: 18 } },
          { text: "Request the hardware team to develop a mobile device with bigger RAM limits.", scores: { leadership: 8, problemSolving: 5, creativity: 5, communication: 12, criticalThinking: 5 } },
          { text: "Keep the model on cloud servers, ignoring latency and connection requirements for users.", scores: { leadership: 5, problemSolving: 10, creativity: 8, communication: 5, criticalThinking: 8 } }
        ]
      },
      {
        text: "Your company wants to rush release an AI medical helper tool before clinical safety metrics are fully validated.",
        options: [
          { text: "Acquiesce to the release schedule to capture market share ahead of rivals.", scores: { leadership: 5, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 5 } },
          { text: "Present risk reports to executives, demand safety validation, and propose a limited beta test.", scores: { leadership: 20, problemSolving: 15, creativity: 10, communication: 20, criticalThinking: 20 } },
          { text: "Resign immediately from the company to avoid legal liability.", scores: { leadership: 5, problemSolving: 5, creativity: 5, communication: 10, criticalThinking: 10 } }
        ]
      },
      {
        text: "Your training dataset contains unlabelled images. You have a deadline in 3 days.",
        options: [
          { text: "Manually label all images yourself over the weekend, working without sleep.", scores: { leadership: 5, problemSolving: 10, creativity: 2, communication: 5, criticalThinking: 5 } },
          { text: "Utilize semi-supervised learning techniques and pre-trained foundation models to extract features.", scores: { leadership: 12, problemSolving: 20, creativity: 20, communication: 10, criticalThinking: 15 } },
          { text: "Use synthetic data generators without checking their fidelity with real domains.", scores: { leadership: 8, problemSolving: 12, creativity: 15, communication: 10, criticalThinking: 8 } }
        ]
      }
    ]
  },
  {
    id: "software_engineer",
    title: "Software Engineer",
    sector: "Software Engineering",
    sectorKey: "tech",
    icon: "💻",
    description: "Build responsive web applications, design database architectures, and secure client-server APIs.",
    salaryMin: "₹4,0,000",
    salaryMax: "₹25,0,000",
    salaryPct: 80,
    salaries: {
      beginner: "₹4–8 LPA",
      mid: "₹10–20 LPA",
      expert: "₹25+ LPA"
    },
    theme: "entrepreneur",
    skills: ["Fullstack Web Development", "SQL & Database Design", "Git Version Control", "Data Structures"],
    roadmap: [
      { step: "Computer Applications B.Sc.", detail: "Learn programming fundamentals, algorithms, and databases." },
      { step: "Junior Developer Internship", detail: "Fix bugs and write unit tests inside active production loops." },
      { step: "Senior System Architect", detail: "Design database schemas, microservices, and deploy cloud networks." },
      { step: "Engineering Director / VP", detail: "Manage tech stacks, developer hiring, and operational delivery schedules." }
    ],
    challenges: [
      { title: "Production Server Crash", desc: "A memory leak crashes the cloud server cluster. Debug thread dumps and optimize database connections under pressure." },
      { title: "Database Schema Migrations", desc: "Migrate 10 million legacy tables to a new normalized relational model without downtime." }
    ],
    mockupTitle: "VSCode.workspace",
    mockupMetrics: { sys: "BUILD_OK", val: "99.8%", res: "42 ms" },
    image: "assets/software_engineer_career.png",
    questions: [
      {
        text: "The main checkout service crashes during a flash sale. Payment logs show timeout connections.",
        options: [
          { text: "Restart the servers repeatedly, hoping the traffic spike passes.", scores: { leadership: 5, problemSolving: 5, creativity: 2, communication: 5, criticalThinking: 8 } },
          { text: "Implement a Redis cache cluster, queue system for requests, and profile slow DB queries.", scores: { leadership: 12, problemSolving: 20, creativity: 15, communication: 10, criticalThinking: 20 } },
          { text: "Increase server CPU limits on the cloud panel without checking the source code bottlenecks.", scores: { leadership: 10, problemSolving: 12, creativity: 8, communication: 12, criticalThinking: 12 } }
        ]
      },
      {
        text: "You find a SQL injection vector in the legacy customer portal codebase.",
        options: [
          { text: "Refactor the query to use parameterized statements and add web application firewall rules.", scores: { leadership: 15, problemSolving: 18, creativity: 10, communication: 15, criticalThinking: 20 } },
          { text: "Add client-side validation using regex to clean characters in input fields.", scores: { leadership: 5, problemSolving: 10, creativity: 8, communication: 5, criticalThinking: 8 } },
          { text: "Ignore the code since it is inside a legacy panel scheduled for deletion next year.", scores: { leadership: 2, problemSolving: 2, creativity: 2, communication: 10, criticalThinking: 5 } }
        ]
      },
      {
        text: "Product managers demand 5 new complex features for the release in 4 days.",
        options: [
          { text: "Agree to all features, planning to write low-quality code to meet the target.", scores: { leadership: 2, problemSolving: 5, creativity: 5, communication: 5, criticalThinking: 5 } },
          { text: "Present scope assessments, highlight technical debt, and negotiate a phased roll-out.", scores: { leadership: 20, problemSolving: 15, creativity: 12, communication: 20, criticalThinking: 18 } },
          { text: "Refuse the task completely, causing a launch delay without offering suggestions.", scores: { leadership: 8, problemSolving: 8, creativity: 5, communication: 12, criticalThinking: 10 } }
        ]
      },
      {
        text: "Your development branch conflicts with the main deployment branch, showing 100+ conflicts.",
        options: [
          { text: "Force push your branch, overwriting changes made by other developers.", scores: { leadership: 5, problemSolving: 2, creativity: 2, communication: 5, criticalThinking: 2 } },
          { text: "Pull main branch, run a merge tool, systematically resolve conflicts, and run unit tests.", scores: { leadership: 12, problemSolving: 18, creativity: 10, communication: 15, criticalThinking: 18 } },
          { text: "Delete your branch and rewrite all your features from scratch.", scores: { leadership: 2, problemSolving: 8, creativity: 12, communication: 10, criticalThinking: 5 } }
        ]
      },
      {
        text: "You are asked to pick a frontend framework for a project expected to grow significantly over 5 years.",
        options: [
          { text: "Choose the newest, most popular framework on social media, despite lack of documentation.", scores: { leadership: 5, problemSolving: 10, creativity: 15, communication: 5, criticalThinking: 5 } },
          { text: "Analyze framework maturity, community ecosystem, performance metrics, and team expertise.", scores: { leadership: 15, problemSolving: 18, creativity: 10, communication: 15, criticalThinking: 20 } },
          { text: "Use pure vanilla JavaScript without any tooling or build systems.", scores: { leadership: 8, problemSolving: 10, creativity: 18, communication: 10, criticalThinking: 12 } }
        ]
      }
    ]
  }
];

const initialReviews = [
  {
    id: "rev-1",
    name: "Aarav Singhal",
    rating: 5,
    text: "Canvas Life helped me understand what being an engineer actually feels like before I finalized my JEE choices. Absolutely eye-opening."
  },
  {
    id: "rev-2",
    name: "Riya Sen",
    rating: 5,
    text: "The simulations made career planning fun instead of a chore. Exploring different paths changed my perspectives entirely."
  },
  {
    id: "rev-3",
    name: "Vikram Malhotra",
    rating: 5,
    text: "I discovered interests in space flight navigation I never knew I had. Visualizing the learning roadmaps clarified my next steps."
  }
];

// ==========================================
// CLIENT-SIDE STATE MANAGEMENT
// ==========================================
const userState = {
  isLoggedIn: false,
  name: "",
  email: "",
  plan: null,
  completedSims: 0
};

// Testimonials storage state
let reviewsStore = [...initialReviews];

// Cache dom elements
const views = document.querySelectorAll(".app-view");
const navItems = document.querySelectorAll(".nav-item");
const mobNavItems = document.querySelectorAll(".mobile-nav-item");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
const userBadge = document.getElementById("user-badge");
const loginNavBtn = document.getElementById("login-nav-btn");
const loggedInProfile = document.getElementById("logged-in-profile");
const profileDisplayName = document.getElementById("profile-display-name");
const profileDisplayPlan = document.getElementById("profile-display-plan");
const profileAvatarLetters = document.getElementById("profile-avatar-letters");
const logoutBtn = document.getElementById("logout-btn");
const themeToggleBtn = document.getElementById("theme-toggle");

// Forms & Modals
const loginForm = document.getElementById("login-form");
const loginNameInput = document.getElementById("login-name");
const loginEmailInput = document.getElementById("login-email");
const googleLoginBtn = document.getElementById("google-login-btn");
const addReviewForm = document.getElementById("add-review-form");
const reviewNameInput = document.getElementById("review-name");
const reviewTextInput = document.getElementById("review-text");
const ratingStarSelector = document.getElementById("rating-star-selector");
const reviewRatingValue = document.getElementById("review-rating-value");
const toastContainer = document.getElementById("toast-container");

// Demo modal
const heroBtnDemo = document.getElementById("hero-btn-demo");
const demoModal = document.getElementById("demo-modal");
const demoModalClose = document.getElementById("demo-modal-close");

// Career Sim Hub DOM Elements
const careerCardsGrid = document.getElementById("career-cards-grid");
const careerSearchInput = document.getElementById("career-search-input");
const careerSearchClear = document.getElementById("career-search-clear");
const filterChips = document.querySelectorAll(".filter-chip");

// ==========================================
// SPA CLIENT ROUTER
// ==========================================
function navigateTo(hash) {
  // Check authorization constraints
  if (hash === "#simulation" || hash === "#plans") {
    if (!userState.isLoggedIn) {
      showToast("Verification Required", "Please sign up with Name and Gmail to access simulated orbits.", "error");
      window.location.hash = "#login";
      return;
    }
    if (hash === "#simulation" && !userState.plan) {
      showToast("Access Plan Required", "Select an orbit subscription plan to unlock simulator pathways.", "info");
      window.location.hash = "#plans";
      return;
    }
  }

  // Deactivate active menu states
  navItems.forEach(item => item.classList.remove("active"));
  mobNavItems.forEach(item => item.classList.remove("active"));

  // Toggle active view container
  let targetViewId = "view-home";
  
  if (hash === "#home" || hash === "") {
    targetViewId = "view-home";
    document.getElementById("nav-home").classList.add("active");
    document.getElementById("mob-nav-home").classList.add("active");
    // Trigger counters trigger animation on home view mount
    setTimeout(animateCounters, 150);
  } else if (hash === "#login") {
    targetViewId = "view-login";
  } else if (hash === "#plans") {
    targetViewId = "view-plans";
  } else if (hash === "#simulation") {
    targetViewId = "view-simulation";
    document.getElementById("nav-sim").classList.add("active");
    document.getElementById("mob-nav-sim").classList.add("active");
    renderCareersGrid();
  } else if (hash.startsWith("#career-")) {
    targetViewId = "view-career-detail";
    const careerId = hash.replace("#career-", "");
    renderCareerDetail(careerId);
  } else if (hash === "#reviews") {
    targetViewId = "view-reviews";
    document.getElementById("nav-reviews").classList.add("active");
    document.getElementById("mob-nav-reviews").classList.add("active");
    renderTestimonials();
  } else if (hash === "#stories") {
    targetViewId = "view-stories";
    document.getElementById("nav-stories").classList.add("active");
    document.getElementById("mob-nav-stories").classList.add("active");
  } else if (hash === "#about") {
    targetViewId = "view-about";
    document.getElementById("nav-about").classList.add("active");
    document.getElementById("mob-nav-about").classList.add("active");
  } else if (hash === "#contact") {
    targetViewId = "view-contact";
    document.getElementById("nav-contact").classList.add("active");
    document.getElementById("mob-nav-contact").classList.add("active");
  } else if (hash === "#faq") {
    targetViewId = "view-faq";
    document.getElementById("nav-faq").classList.add("active");
    document.getElementById("mob-nav-faq").classList.add("active");
  }

  // Swap CSS views
  views.forEach(view => {
    if (view.id === targetViewId) {
      view.style.display = "block";
      setTimeout(() => view.classList.add("active"), 50);
    } else {
      view.classList.remove("active");
      view.style.display = "none";
    }
  });

  // Close mobile drawer overlay on navigation
  mobileNavOverlay.classList.remove("active");
  mobileMenuBtn.classList.remove("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Router Event Listeners
window.addEventListener("hashchange", () => navigateTo(window.location.hash));
window.addEventListener("load", () => {
  // Check if session profile cache exists in browser
  const cachedUser = localStorage.getItem("cl_pioneer_p");
  if (cachedUser) {
    try {
      const parsed = JSON.parse(cachedUser);
      userState.isLoggedIn = true;
      userState.name = parsed.name;
      userState.email = parsed.email;
      userState.plan = parsed.plan;
      updateHeaderProfile();
    } catch(e) {}
  }
  navigateTo(window.location.hash);
  initSkyCanvas();
});

// Navigation intercept items
document.getElementById("hero-btn-explore").addEventListener("click", () => {
  if (!userState.isLoggedIn) {
    window.location.hash = "#login";
  } else if (!userState.plan) {
    window.location.hash = "#plans";
  } else {
    window.location.hash = "#simulation";
  }
});

document.getElementById("nav-logo-btn").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.hash = "#home";
});

// ==========================================
// MOCK AUTHENTICATION SYSTEM
// ==========================================
function validateGmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return re.test(String(email).toLowerCase());
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = loginNameInput.value.trim();
  const email = loginEmailInput.value.trim();

  if (!name) {
    showToast("Input Error", "Please provide your name to register.", "error");
    return;
  }
  if (!validateGmail(email)) {
    showToast("Invalid Email", "Simulation registration requires a valid @gmail.com address.", "error");
    return;
  }

  executeLogin(name, email);
});

googleLoginBtn.addEventListener("click", () => {
  executeLogin("John Doe", "john.doe@gmail.com");
});

function executeLogin(name, email) {
  userState.isLoggedIn = true;
  userState.name = name;
  userState.email = email;
  userState.plan = null;

  saveSessionCache();
  updateHeaderProfile();
  showToast("Signup Successful", `Welcome, ${name}! Redirecting to subscription orbits...`, "success");
  
  setTimeout(() => {
    window.location.hash = "#plans";
  }, 1000);
}

function executeLogout() {
  userState.isLoggedIn = false;
  userState.name = "";
  userState.email = "";
  userState.plan = null;

  localStorage.removeItem("cl_pioneer_p");
  updateHeaderProfile();
  showToast("Logged Out", "Pioneer credentials cleared successfully.", "info");
  window.location.hash = "#home";
}

logoutBtn.addEventListener("click", executeLogout);
loginNavBtn.addEventListener("click", () => {
  window.location.hash = "#login";
});

function updateHeaderProfile() {
  if (userState.isLoggedIn) {
    loginNavBtn.style.display = "none";
    loggedInProfile.style.display = "flex";
    profileDisplayName.textContent = userState.name;
    profileDisplayPlan.textContent = userState.plan ? userState.plan : "No Plan";
    
    // Initials avatar
    const initials = userState.name.split(" ").map(w => w[0]).join("").toUpperCase().substring(0, 2);
    profileAvatarLetters.textContent = initials;
  } else {
    loginNavBtn.style.display = "block";
    loggedInProfile.style.display = "none";
  }
}

function saveSessionCache() {
  localStorage.setItem("cl_pioneer_p", JSON.stringify({
    name: userState.name,
    email: userState.email,
    plan: userState.plan
  }));
}

// ==========================================
// SUBSCRIPTION PLANS SELECTOR
// ==========================================
document.querySelectorAll(".plan-select-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const selectedPlan = e.target.dataset.plan;
    userState.plan = selectedPlan;
    saveSessionCache();
    updateHeaderProfile();

    showToast("Orbit Unlocked", `${selectedPlan} subscription successfully active! Unlocking hub...`, "success");
    
    setTimeout(() => {
      window.location.hash = "#simulation";
    }, 1200);
  });
});

// ==========================================
// CAREER EXPLORATION GRID (RENDER, SEARCH, FILTER)
// ==========================================
let activeSectorFilter = "all";
let activeSearchQuery = "";

function renderCareersGrid() {
  careerCardsGrid.innerHTML = "";

  const filtered = careersData.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(activeSearchQuery) || 
                          career.description.toLowerCase().includes(activeSearchQuery) ||
                          career.sector.toLowerCase().includes(activeSearchQuery);
    
    const matchesSector = activeSectorFilter === "all" || career.sectorKey === activeSectorFilter;
    return matchesSearch && matchesSector;
  });

  if (filtered.length === 0) {
    careerCardsGrid.innerHTML = `
      <div class="grid-empty-state glass-card" style="grid-column: 1 / -1; padding: 60px 20px; text-align: center;">
        <span style="font-size: 3rem;">🔍</span>
        <h3 style="margin-top: 16px;">No Career Orbits Found</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 8px;">No simulation sectors match your search query: "${activeSearchQuery}"</p>
      </div>
    `;
    return;
  }

  filtered.forEach((career, index) => {
    // Check Comet free plan limits (restricted to the first 3 careers)
    const isRestricted = userState.plan === "Comet" && index >= 3;
    
    const card = document.createElement("div");
    card.className = `career-card glass-card ${isRestricted ? "restricted-card" : ""}`;
    card.dataset.id = career.id;
    card.innerHTML = `
      <div class="career-card-image-wrapper">
        <img src="${career.image}" alt="${career.title}" class="career-card-image">
        <div class="card-header-icon-overlay">${career.icon}</div>
      </div>
      <div class="career-card-content">
        <div>
          <h3>${career.title}</h3>
          <p>${career.description}</p>
        </div>
        <div class="card-footer-item">
          ${isRestricted ? `
            <span class="btn-card-explore" style="color: var(--accent-pink);">
              🔒 Unlock on Polaris
            </span>
          ` : `
            <span class="btn-card-explore">
              Explore Simulation <span class="arrow">→</span>
            </span>
          `}
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      if (isRestricted) {
        showToast("Upgrade Plan", "Free Comet plan is limited to 3 previews. Upgrade to Polaris/Sirius to unlock this track.", "info");
        window.location.hash = "#plans";
        return;
      }
      window.location.hash = `#career-${career.id}`;
    });

    careerCardsGrid.appendChild(card);
  });
}

// Live Search Handlers
careerSearchInput.addEventListener("input", (e) => {
  activeSearchQuery = e.target.value.trim().toLowerCase();
  if (activeSearchQuery.length > 0) {
    careerSearchClear.style.display = "block";
  } else {
    careerSearchClear.style.display = "none";
  }
  renderCareersGrid();
});

careerSearchClear.addEventListener("click", () => {
  careerSearchInput.value = "";
  activeSearchQuery = "";
  careerSearchClear.style.display = "none";
  renderCareersGrid();
});

// Category Filter Handlers
filterChips.forEach(chip => {
  chip.addEventListener("click", (e) => {
    filterChips.forEach(c => c.classList.remove("active"));
    e.target.classList.add("active");
    activeSectorFilter = e.target.dataset.sector;
    renderCareersGrid();
  });
});

// ==========================================
// CAREER DYNAMIC DETAIL RENDER (THEMED)
// ==========================================
const backToHubBtn = document.getElementById("back-to-hub-btn");
backToHubBtn.addEventListener("click", () => {
  window.location.hash = "#simulation";
});

function renderCareerDetail(id) {
  const career = careersData.find(c => c.id === id);
  if (!career) {
    showToast("Not Found", "Specified career path was not identified.", "error");
    window.location.hash = "#simulation";
    return;
  }

  // Ingest sector theme to main view container
  const detailView = document.getElementById("view-career-detail");
  detailView.className = `app-view active themed-career-view theme-${career.theme ? career.theme : "generic"}`;

  // Populate dynamic textual information
  document.getElementById("cd-sector").textContent = career.sector;
  document.getElementById("cd-icon").textContent = career.icon;
  document.getElementById("cd-title").textContent = career.title;
  document.getElementById("cd-description").textContent = career.description;
  document.getElementById("cd-image").src = career.image;
  
  // Update salary tier cards dynamically
  const salaryCard = document.querySelector(".salary-card");
  if (salaryCard) {
    salaryCard.innerHTML = `
      <div class="sidebar-card-icon">💰</div>
      <h4>Future Salary Projections</h4>
      <p class="salary-card-subtitle">Realistic estimates for India (LPA)</p>
      <div class="salary-tier-cards">
        <div class="salary-tier-card">
          <span class="tier-label">Beginner</span>
          <span class="tier-value">${career.salaries.beginner}</span>
        </div>
        <div class="salary-tier-card">
          <span class="tier-label">Mid-Career</span>
          <span class="tier-value">${career.salaries.mid}</span>
        </div>
        <div class="salary-tier-card">
          <span class="tier-label">Expert</span>
          <span class="tier-value">${career.salaries.expert}</span>
        </div>
      </div>
      <p class="salary-disclaimer">⚠️ Salaries vary by country, experience, and specialization.</p>
    `;
  }

  // Populate skills tag chips or cards
  const skillsGrid = document.getElementById("cd-skills");
  skillsGrid.innerHTML = "";
  career.skills.forEach(skill => {
    if (typeof skill === "object") {
      const card = document.createElement("div");
      card.className = "skill-detail-card glass-card";
      card.innerHTML = `
        <div class="skill-detail-header">
          <span class="skill-detail-icon">${skill.icon}</span>
          <div class="skill-detail-meta">
            <span class="skill-detail-name">${skill.name}</span>
            <span class="skill-detail-level">${skill.level}</span>
          </div>
        </div>
        <p class="skill-detail-desc">${skill.desc}</p>
        <div class="skill-detail-progress-wrapper">
          <div class="skill-detail-progress-bar">
            <div class="skill-detail-progress-fill" style="width: ${skill.pct}%;"></div>
          </div>
          <span class="skill-detail-pct">${skill.pct}% Match</span>
        </div>
      `;
      skillsGrid.appendChild(card);
    } else {
      const tag = document.createElement("span");
      tag.className = "skill-tag";
      tag.textContent = skill;
      skillsGrid.appendChild(tag);
    }
  });

  // Populate roadmap timeline nodes
  const roadmapContainer = document.getElementById("cd-roadmap");
  roadmapContainer.innerHTML = "";
  career.roadmap.forEach((step, idx) => {
    const node = document.createElement("div");
    node.className = "timeline-step";
    node.innerHTML = `
      <div class="timeline-bullet"></div>
      <div class="timeline-info">
        <h4>Milestone ${idx+1}: ${step.step}</h4>
        <p>${step.detail}</p>
      </div>
    `;
    roadmapContainer.appendChild(node);
  });

  // Populate Sample Challenges
  const challengesGrid = document.getElementById("cd-challenges");
  challengesGrid.innerHTML = "";
  career.challenges.forEach(chal => {
    const card = document.createElement("div");
    card.className = "challenge-card glass-card";
    card.innerHTML = `
      <h4>⚠️ ${chal.title}</h4>
      <p>${chal.desc}</p>
    `;
    challengesGrid.appendChild(card);
  });

  // Customize Telemetry screen mockup title and values
  const mockupTitleText = document.querySelector(".mockup-title-text");
  const metricsContainer = document.querySelector(".mockup-metrics");
  
  if (career.mockupTitle) {
    mockupTitleText.textContent = career.mockupTitle;
    metricsContainer.innerHTML = `
      <div class="m-stat"><span>SYS:</span> <span class="green-text">${career.mockupMetrics.sys}</span></div>
      <div class="m-stat"><span>ACCURACY:</span> <span class="cyan-text">${career.mockupMetrics.val}</span></div>
      <div class="m-stat"><span>ENERGY:</span> <span class="yellow-text">${career.mockupMetrics.res}</span></div>
    `;
  } else {
    // Reset to generic defaults
    mockupTitleText.textContent = "EngineTelemetry.sys";
    metricsContainer.innerHTML = `
      <div class="m-stat"><span>SYS:</span> <span class="green-text">ACTIVE</span></div>
      <div class="m-stat"><span>SPEED:</span> <span class="cyan-text">88.2 MHz</span></div>
      <div class="m-stat"><span>LOAD:</span> <span class="yellow-text">42.1%</span></div>
    `;
  }

  // Populate Active Features list items
  const comingSoonList = document.getElementById("cd-coming-soon");
  comingSoonList.innerHTML = "";
  const listItems = career.id === "astronaut" ? [
    "Active Flight Path alignment thrusters",
    "Live orbit coordinate plotting canvas",
    "Real-time vector trajectory metrics"
  ] : [
    "SQL security sanitization tester",
    "Neural model loss convergence graph",
    "Parameter learning rate optimizer"
  ];
  listItems.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="bullet">✦</span> ${item}`;
    comingSoonList.appendChild(li);
  });

  // Initialize interactive simulation module
  initActiveSimulation(career.id);
}

// ==========================================
// REVIEWS SUBMISSIONS STATE
// ==========================================
// Render reviews feed masonry
function renderTestimonials() {
  const container = document.getElementById("testimonials-grid-container");
  container.innerHTML = "";

  reviewsStore.forEach(rev => {
    const card = document.createElement("div");
    card.className = "testimonial-card glass-card";
    card.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-name-wrapper">
          <h4>${rev.name}</h4>
        </div>
        <span class="testimonial-stars">${"★".repeat(rev.rating)}</span>
      </div>
      <p class="testimonial-text">"${rev.text}"</p>
    `;
    container.appendChild(card);
  });
}

// Stars selector in submission form
const starBtns = ratingStarSelector.querySelectorAll(".star-btn");
starBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const val = parseInt(e.target.dataset.val);
    reviewRatingValue.value = val;
    starBtns.forEach((b, idx) => {
      if (idx < val) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });
  });
});

addReviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = reviewNameInput.value.trim();
  const text = reviewTextInput.value.trim();
  const rating = parseInt(reviewRatingValue.value);

  if (!name || !text) {
    showToast("Input Error", "Please fill in all form inputs.", "error");
    return;
  }

  reviewsStore.unshift({ id: `rev-${Date.now()}`, name, text, rating });
  renderTestimonials();

  // Reset inputs
  reviewNameInput.value = "";
  reviewTextInput.value = "";
  reviewRatingValue.value = 5;
  starBtns.forEach(b => b.classList.add("active"));

  showToast("Feedback Submitted", "Thank you! Your testimonial has been posted successfully.", "success");
});

// ==========================================
// FAQ ACCORDIONS (DROP-DOWNS)
// ==========================================
document.querySelectorAll(".faq-trigger").forEach(trigger => {
  trigger.addEventListener("click", () => {
    const item = trigger.parentElement;
    const isActive = item.classList.contains("active");
    const panel = trigger.nextElementSibling;

    // Close all open panels
    document.querySelectorAll(".faq-accordion-item").forEach(i => {
      i.classList.remove("active");
      i.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
      i.querySelector(".faq-panel").style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add("active");
      trigger.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

// ==========================================
// DEMO MODAL HANDLERS
// ==========================================
heroBtnDemo.addEventListener("click", () => {
  demoModal.classList.add("active");
});

demoModalClose.addEventListener("click", () => {
  demoModal.classList.remove("active");
});

demoModal.addEventListener("click", (e) => {
  if (e.target === demoModal) {
    demoModal.classList.remove("active");
  }
});

// ==========================================
// ACCESSIBILITY & HEADER SCROLL ACTION
// ==========================================
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Mobile menu toggler
mobileMenuBtn.addEventListener("click", () => {
  const isActive = mobileMenuBtn.classList.toggle("active");
  mobileNavOverlay.classList.toggle("active", isActive);
});

// Theme switcher
let activeTheme = localStorage.getItem("cl_theme") || "dark";
document.documentElement.setAttribute("data-theme", activeTheme);

themeToggleBtn.addEventListener("click", () => {
  activeTheme = activeTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", activeTheme);
  localStorage.setItem("cl_theme", activeTheme);
  showToast("Theme Toggled", `Successfully transitioned to ${activeTheme} mode.`, "info");
});

// Contact support form mock
document.getElementById("contact-support-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("contact-name").value = "";
  document.getElementById("contact-lastname").value = "";
  document.getElementById("contact-email").value = "";
  document.getElementById("contact-subject").value = "";
  document.getElementById("contact-message").value = "";
  showToast("Message Transmitted", "Helpdesk message received. Our coordination crew will contact you soon.", "success");
});

// ==========================================
// BACKGROUND CANVAS: STARS & CLOUDS
// ==========================================
let canvas, ctx;
let stars = [];
let clouds = [];
let shootingStar = null;

function initSkyCanvas() {
  canvas = document.getElementById("sky-canvas");
  if (!canvas) return;
  
  ctx = canvas.getContext("2d");
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  // Initialize stars in night sky background
  stars = [];
  for (let i = 0; i < 120; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
      angle: Math.random() * Math.PI
    });
  }

  // Initialize clouds in sky themed background
  clouds = [];
  for (let i = 0; i < 5; i++) {
    clouds.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.5,
      radius: Math.random() * 80 + 60,
      speed: Math.random() * 0.15 + 0.05,
      opacity: Math.random() * 0.15 + 0.05
    });
  }

  shootingStar = null;

  animateSky();
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function activateShootingStar() {
  shootingStar = {
    x: Math.random() * canvas.width * 0.6,
    y: Math.random() * canvas.height * 0.3,
    length: Math.random() * 80 + 50,
    dx: Math.random() * 8 + 4,
    dy: Math.random() * 3 + 2,
    alpha: 1.0,
    decay: Math.random() * 0.02 + 0.01
  };
}

function animateSky() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (activeTheme === "dark") {
    // 1. Draw Twinkling Stars
    stars.forEach(star => {
      star.angle += star.speed;
      const alpha = Math.abs(Math.sin(star.angle));
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    // 2. Chance of activating shooting star
    if (!shootingStar && Math.random() < 0.003) {
      activateShootingStar();
    }

    // 3. Draw active Shooting Star
    if (shootingStar) {
      ctx.strokeStyle = `rgba(186, 230, 253, ${shootingStar.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(shootingStar.x + shootingStar.dx * 10, shootingStar.y + shootingStar.dy * 10);
      ctx.stroke();

      // Update positions
      shootingStar.x += shootingStar.dx;
      shootingStar.y += shootingStar.dy;
      shootingStar.alpha -= shootingStar.decay;

      if (shootingStar.alpha <= 0 || shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
        shootingStar = null;
      }
    }
  } else {
    // Draw Drifting Clouds in Light Mode
    clouds.forEach(cloud => {
      ctx.fillStyle = `rgba(255, 255, 255, ${cloud.opacity})`;
      ctx.beginPath();
      ctx.arc(cloud.x, cloud.y, cloud.radius, 0, Math.PI * 2);
      ctx.arc(cloud.x + cloud.radius * 0.5, cloud.y - cloud.radius * 0.2, cloud.radius * 0.8, 0, Math.PI * 2);
      ctx.arc(cloud.x - cloud.radius * 0.5, cloud.y - cloud.radius * 0.1, cloud.radius * 0.7, 0, Math.PI * 2);
      ctx.fill();

      // Move clouds slowly
      cloud.x += cloud.speed;
      if (cloud.x - cloud.radius * 2 > canvas.width) {
        cloud.x = -cloud.radius * 2;
        cloud.y = Math.random() * canvas.height * 0.5;
      }
    });
  }

  requestAnimationFrame(animateSky);
}

// ==========================================
// STATISTICS COUNTER ANIMATION
// ==========================================
let counterAnimationTriggered = false;

function animateCounters() {
  if (counterAnimationTriggered) return;
  
  const careersCounter = document.getElementById("stat-careers");
  const simsCounter = document.getElementById("stat-sims");
  const satCounter = document.getElementById("stat-satisfaction");

  if (!careersCounter || !simsCounter || !satCounter) return;
  counterAnimationTriggered = true;

  runIncrementLoop(careersCounter, 50, "+", 1);
  runIncrementLoop(simsCounter, 10000, "+", 100);
  runIncrementLoop(satCounter, 95, "%", 2);
}

function runIncrementLoop(el, target, suffix, step) {
  let current = 0;
  const duration = 1500; // 1.5 seconds total
  const intervalTime = 30;
  const totalTicks = duration / intervalTime;
  const tickStep = Math.max(1, Math.round(target / totalTicks));

  const timer = setInterval(() => {
    current += tickStep;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    // Format values nicely (e.g. 10,000)
    el.textContent = current.toLocaleString() + suffix;
  }, intervalTime);
}

// ==========================================
// DYNAMIC TOAST UTILITY
// ==========================================
function showToast(title, message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div>
      <h4 style="font-size: 0.85rem; font-weight: 700; margin-bottom: 2px;">${title}</h4>
      <p style="font-size: 0.75rem; color: var(--text-muted);">${message}</p>
    </div>
  `;

  toastContainer.appendChild(toast);

  // Trigger exit transitions after 3.5 seconds
  setTimeout(() => {
    toast.classList.add("toast-fadeout");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3500);
}

// ==========================================
// INTERACTIVE SIMULATIONS MANAGER
// ==========================================
let activeSimInterval = null;
let astronautSimState = {
  drift: 1.20,
  pitch: 0.0,
  yaw: 0.0,
  fuel: 100,
  heat: 0,
  isExecuting: false
};

let engineeringSimState = {
  activeTab: "security",
  selectedCodeOption: null,
  isExecuting: false,
  learningRate: 0.5,
  optimizer: "SGD"
};

function initActiveSimulation(careerId) {
  if (activeSimInterval) {
    clearInterval(activeSimInterval);
    activeSimInterval = null;
  }

  const container = document.getElementById("active-simulation-container");
  if (!container) return;

  if (careerId === "astronaut") {
    setupAstronautSimulation(container);
  } else {
    container.innerHTML = `
      <div class="under-construction-banner" style="margin: 0;">
        <div class="uc-content">
          <div class="uc-icon">🚧</div>
          <h3>Simulation Deck Under Construction</h3>
          <p>Our cosmic architects are currently calibrating the interactive simulator deck for the <strong>${careerId === 'ai_engineer' ? 'AI Engineer' : careerId === 'software_engineer' ? 'Software Engineer' : careerId.charAt(0).toUpperCase() + careerId.slice(1)}</strong> track. The learning roadmaps, skills, and salaries are online, but the situational simulation environment is under construction.</p>
          <div class="uc-progress-wrapper">
            <div class="uc-progress-label">
              <span>Calibration Status</span>
              <div class="uc-pulse-dot"></div>
              <span>85% Completed</span>
            </div>
            <div class="uc-progress-bar">
              <div class="uc-progress-fill" style="width: 85%;"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

function setupAstronautSimulation(container) {
  astronautSimState = {
    drift: 1.20,
    pitch: 0.0,
    yaw: 0.0,
    fuel: 100,
    heat: 0,
    isExecuting: false
  };

  container.innerHTML = `
    <div class="sim-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
      <h3>🚀 Flight Deck: Space Calibration & Assessment</h3>
      <span class="sim-badge">Simulation Active</span>
    </div>
    
    <div class="sim-tabs-header" style="margin-bottom: 20px;">
      <button class="sim-tab-btn active" id="ast-tab-btn-telemetry">Active Telemetry Calibration</button>
      <button class="sim-tab-btn" id="ast-tab-btn-assessment">Situational MCQ Assessment</button>
      <button class="sim-tab-btn" id="ast-tab-btn-five-min">⚡ 5-Min Crisis Survival</button>
    </div>
    
    <!-- Telemetry calibration simulator -->
    <div class="sim-tab-content active" id="ast-tab-content-telemetry">
      <div class="sim-grid">
        <div class="sim-display-panel">
          <div class="sim-canvas-container" id="ast-canvas-container">
            <canvas id="ast-sim-canvas" class="sim-canvas"></canvas>
          </div>
          
          <div class="sim-console" id="ast-console">
            <div class="sim-console-line info">[SYS] Orbit Drift detected: +1.20° target variance.</div>
            <div class="sim-console-line">[SYS] Pitch: 0.00 | Yaw: 0.00. Fuel: 100%.</div>
            <div class="sim-console-line info">[SYS] Awaiting manual vector corrections...</div>
          </div>
        </div>
        
        <div class="sim-controls">
          <div class="sim-stats-bar">
            <div class="sim-stat-box">
              <span class="lbl">Drift</span>
              <div class="val alert-red" id="ast-stat-drift">+1.20°</div>
            </div>
            <div class="sim-stat-box">
              <span class="lbl">Fuel</span>
              <div class="val alert-green" id="ast-stat-fuel">100%</div>
            </div>
            <div class="sim-stat-box">
              <span class="lbl">Engine Heat</span>
              <div class="val" id="ast-stat-heat">0%</div>
            </div>
          </div>
          
          <div class="sim-control-group">
            <label>Pitch Vector Correction <span class="val-badge" id="val-pitch">0.00°</span></label>
            <input type="range" class="sim-slider" id="slider-pitch" min="-2.0" max="2.0" step="0.1" value="0.0">
            <div class="slider-labels"><span>-2.00° (De-orbit)</span><span>+2.00° (Apogee)</span></div>
          </div>
          
          <div class="sim-control-group">
            <label>Yaw Vector Correction <span class="val-badge" id="val-yaw">0.00°</span></label>
            <input type="range" class="sim-slider" id="slider-yaw" min="-2.0" max="2.0" step="0.1" value="0.0">
            <div class="slider-labels"><span>-2.00° (Ascend)</span><span>+2.00° (Descend)</span></div>
          </div>
          
          <div class="sim-btn-row">
            <button class="sim-btn-execute" id="btn-ast-burn">
              <span>🔥 Execute Orbital Burn</span>
            </button>
            <button class="sim-btn-reset" id="btn-ast-reset">Reset</button>
          </div>
        </div>
      </div>
      
      <div class="sim-success-overlay" id="ast-success-overlay">
        <div class="sim-success-content">
          <div class="sim-success-icon">🏆</div>
          <h3>Orbit Stabilized!</h3>
          <p>You successfully aligned the spacecraft trajectory to exactly 0.00° variance using optimal thruster physics.</p>
          <div class="sim-stats-bar" style="width: 100%; margin-top: 10px;">
            <div class="sim-stat-box"><span class="lbl">Final Drift</span><div class="val alert-green">0.00°</div></div>
            <div class="sim-stat-box"><span class="lbl">Fuel Used</span><div class="val alert-cyan" id="ast-success-fuel-used">15%</div></div>
            <div class="sim-stat-box"><span class="lbl">Precision</span><div class="val alert-cyan">100%</div></div>
          </div>
          <button class="btn btn-primary" id="btn-ast-success-ok" style="margin-top: 15px; padding: 10px 24px;">Complete Mission</button>
        </div>
      </div>
    </div>
    
    <!-- Situational assessment simulator -->
    <div class="sim-tab-content" id="ast-tab-content-assessment">
      <div id="ast-mcq-container">
        <!-- Injected via initMCQSimulator -->
      </div>
    </div>

    <!-- 5-Minute Space Crisis Survival Simulator -->
    <div class="sim-tab-content" id="ast-tab-content-five-min">
      <div id="ast-five-min-container">
        <!-- Injected via initFiveMinSimulator -->
      </div>
    </div>
  `;

  // Tab buttons bindings
  const astTabBtnTelemetry = document.getElementById("ast-tab-btn-telemetry");
  const astTabBtnAssessment = document.getElementById("ast-tab-btn-assessment");
  const astTabBtnFiveMin = document.getElementById("ast-tab-btn-five-min");
  const astTabContentTelemetry = document.getElementById("ast-tab-content-telemetry");
  const astTabContentAssessment = document.getElementById("ast-tab-content-assessment");
  const astTabContentFiveMin = document.getElementById("ast-tab-content-five-min");

  astTabBtnTelemetry.addEventListener("click", () => {
    astTabBtnTelemetry.classList.add("active");
    astTabBtnAssessment.classList.remove("active");
    astTabBtnFiveMin.classList.remove("active");
    astTabContentTelemetry.classList.add("active");
    astTabContentAssessment.classList.remove("active");
    astTabContentFiveMin.classList.remove("active");
    stopSurvivalGame();
  });

  astTabBtnAssessment.addEventListener("click", () => {
    astTabBtnAssessment.classList.add("active");
    astTabBtnTelemetry.classList.remove("active");
    astTabBtnFiveMin.classList.remove("active");
    astTabContentAssessment.classList.add("active");
    astTabContentTelemetry.classList.remove("active");
    astTabContentFiveMin.classList.remove("active");
    stopSurvivalGame();
  });

  astTabBtnFiveMin.addEventListener("click", () => {
    astTabBtnFiveMin.classList.add("active");
    astTabBtnTelemetry.classList.remove("active");
    astTabBtnAssessment.classList.remove("active");
    astTabContentFiveMin.classList.add("active");
    astTabContentTelemetry.classList.remove("active");
    astTabContentAssessment.classList.remove("active");
    stopSurvivalGame();
    initFiveMinSimulator();
  });

  // Telemetry interactive simulation code
  const canvas = document.getElementById("ast-sim-canvas");
  const ctx = canvas.getContext("2d");
  const sliderPitch = document.getElementById("slider-pitch");
  const sliderYaw = document.getElementById("slider-yaw");
  const valPitch = document.getElementById("val-pitch");
  const valYaw = document.getElementById("val-yaw");
  const btnBurn = document.getElementById("btn-ast-burn");
  const btnReset = document.getElementById("btn-ast-reset");
  const consoleEl = document.getElementById("ast-console");
  
  const statDrift = document.getElementById("ast-stat-drift");
  const statFuel = document.getElementById("ast-stat-fuel");
  const statHeat = document.getElementById("ast-stat-heat");
  const overlay = document.getElementById("ast-success-overlay");
  const successFuelUsed = document.getElementById("ast-success-fuel-used");
  const btnSuccessOk = document.getElementById("btn-ast-success-ok");

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight || 250;

  let animationFrameId = null;
  let angleOffset = 0;

  function logConsole(message, type = "") {
    const p = document.createElement("div");
    p.className = `sim-console-line ${type}`;
    p.textContent = `[SYS] ${message}`;
    consoleEl.appendChild(p);
    consoleEl.scrollTop = consoleEl.scrollHeight;
  }

  function draw() {
    if (!document.getElementById("ast-sim-canvas")) {
      cancelAnimationFrame(animationFrameId);
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    
    ctx.beginPath();
    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 45);
    grad.addColorStop(0, '#1e3a8a');
    grad.addColorStop(0.5, '#3b82f6');
    grad.addColorStop(1, '#020617');
    ctx.fillStyle = grad;
    ctx.arc(cx, cy, 40, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, cy, 42, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, 75, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(52, 211, 153, 0.6)";
    ctx.lineWidth = 2;
    ctx.setLineDash([]);
    ctx.stroke();

    const currentPitch = parseFloat(sliderPitch.value);
    const currentYaw = parseFloat(sliderYaw.value);
    const targetDrift = 1.20 - currentPitch - (currentYaw * 0.5);

    ctx.beginPath();
    const radiusX = 75 + (currentPitch * 12);
    const radiusY = 75 + (currentYaw * 12);
    const rotation = (1.20 - targetDrift) * 0.1;
    ctx.ellipse(cx, cy, radiusX, radiusY, rotation, 0, Math.PI * 2);
    ctx.strokeStyle = Math.abs(targetDrift) < 0.05 ? "rgba(56, 189, 248, 0.8)" : "rgba(244, 63, 94, 0.6)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.stroke();

    angleOffset += 0.015;
    const scX = cx + radiusX * Math.cos(angleOffset);
    const scY = cy + radiusY * Math.sin(angleOffset);

    if (astronautSimState.isExecuting) {
      ctx.beginPath();
      ctx.arc(scX + Math.cos(angleOffset + Math.PI/2) * 12, scY + Math.sin(angleOffset + Math.PI/2) * 12, Math.random() * 8 + 4, 0, Math.PI * 2);
      ctx.fillStyle = "#f97316";
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#ef4444";
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    ctx.beginPath();
    ctx.arc(scX, scY, 6, 0, Math.PI * 2);
    ctx.fillStyle = "#e2e8f0";
    ctx.shadowBlur = 8;
    ctx.shadowColor = "#38bdf8";
    ctx.fill();
    ctx.shadowBlur = 0;

    animationFrameId = requestAnimationFrame(draw);
  }

  draw();

  function updateProjected() {
    const currentPitch = parseFloat(sliderPitch.value);
    const currentYaw = parseFloat(sliderYaw.value);
    valPitch.textContent = (currentPitch >= 0 ? "+" : "") + currentPitch.toFixed(2) + "°";
    valYaw.textContent = (currentYaw >= 0 ? "+" : "") + currentYaw.toFixed(2) + "°";

    const projectedDrift = 1.20 - currentPitch - (currentYaw * 0.5);
    statDrift.textContent = (projectedDrift >= 0 ? "+" : "") + projectedDrift.toFixed(2) + "°";

    if (Math.abs(projectedDrift) < 0.05) {
      statDrift.className = "val alert-green";
    } else {
      statDrift.className = "val alert-red";
    }
  }

  sliderPitch.addEventListener("input", updateProjected);
  sliderYaw.addEventListener("input", updateProjected);

  btnBurn.addEventListener("click", () => {
    if (astronautSimState.isExecuting) return;

    const currentPitch = parseFloat(sliderPitch.value);
    const currentYaw = parseFloat(sliderYaw.value);
    const projectedDrift = 1.20 - currentPitch - (currentYaw * 0.5);

    const fuelCost = Math.round((Math.abs(currentPitch) + Math.abs(currentYaw)) * 12) + 5;
    if (astronautSimState.fuel < fuelCost) {
      logConsole("Error: Insufficient fuel to complete burn.", "error");
      showToast("Simulation Alert", "Not enough fuel for this flight trajectory correction.", "error");
      return;
    }

    astronautSimState.isExecuting = true;
    btnBurn.disabled = true;
    sliderPitch.disabled = true;
    sliderYaw.disabled = true;

    const displayPanel = document.querySelector(".sim-display-panel");
    displayPanel.classList.add("shake-animation");

    logConsole(`Executing orbital burn: Vector adjust pitch = ${currentPitch.toFixed(2)}°, yaw = ${currentYaw.toFixed(2)}°...`, "info");

    let count = 0;
    activeSimInterval = setInterval(() => {
      count += 10;
      astronautSimState.fuel -= fuelCost / 10;
      if (astronautSimState.fuel < 0) astronautSimState.fuel = 0;
      astronautSimState.heat = Math.round(count * 0.7);

      statFuel.textContent = `${Math.round(astronautSimState.fuel)}%`;
      statHeat.textContent = `${astronautSimState.heat}%`;

      if (astronautSimState.fuel < 30) {
        statFuel.className = "val alert-red";
      } else {
        statFuel.className = "val alert-green";
      }

      if (count >= 100) {
        clearInterval(activeSimInterval);
        activeSimInterval = null;
        astronautSimState.isExecuting = false;
        displayPanel.classList.remove("shake-animation");

        astronautSimState.drift = projectedDrift;
        statDrift.textContent = (astronautSimState.drift >= 0 ? "+" : "") + astronautSimState.drift.toFixed(2) + "°";
        astronautSimState.heat = 0;
        statHeat.textContent = "0%";

        logConsole(`Burn completed. New drift measured: ${(astronautSimState.drift >= 0 ? "+" : "") + astronautSimState.drift.toFixed(2)}°.`, "success");

        if (Math.abs(astronautSimState.drift) < 0.05) {
          setTimeout(() => {
            overlay.classList.add("active");
            successFuelUsed.textContent = `${Math.round(100 - astronautSimState.fuel)}%`;
            userState.completedSims += 1;
            showToast("Mission Succeeded", "Telemetry matches target stable orbit. Precision verified.", "success");
          }, 800);
        } else {
          btnBurn.disabled = false;
          sliderPitch.disabled = false;
          sliderYaw.disabled = false;
          logConsole("Spacecraft did not reach stable orbit. Readjust vectors and execute burn.", "error");
        }
      }
    }, 100);
  });

  btnReset.addEventListener("click", () => {
    if (activeSimInterval) clearInterval(activeSimInterval);
    astronautSimState = {
      drift: 1.20,
      pitch: 0.0,
      yaw: 0.0,
      fuel: 100,
      heat: 0,
      isExecuting: false
    };
    sliderPitch.value = "0.0";
    sliderYaw.value = "0.0";
    sliderPitch.disabled = false;
    sliderYaw.disabled = false;
    btnBurn.disabled = false;
    updateProjected();
    statFuel.textContent = "100%";
    statFuel.className = "val alert-green";
    statHeat.textContent = "0%";
    consoleEl.innerHTML = `
      <div class="sim-console-line info">[SYS] Orbit Drift detected: +1.20° target variance.</div>
      <div class="sim-console-line">[SYS] Pitch: 0.00 | Yaw: 0.00. Fuel: 100%.</div>
      <div class="sim-console-line info">[SYS] Awaiting manual vector corrections...</div>
    `;
  });

  btnSuccessOk.addEventListener("click", () => {
    overlay.classList.remove("active");
    window.location.hash = "#simulation";
  });

  // Launch situational MCQ simulator
  initMCQSimulator("astronaut");
}

function setupEngineeringSimulation(container) {
  engineeringSimState = {
    activeTab: "security",
    selectedCodeOption: null,
    isExecuting: false,
    learningRate: 0.5,
    optimizer: "SGD"
  };

  container.innerHTML = `
    <div class="sim-header">
      <h3>💻 Compiler Console: System Optimization</h3>
      <span class="sim-badge">Simulation Active</span>
    </div>
    
    <div class="sim-tabs-header">
      <button class="sim-tab-btn active" id="tab-btn-security">Task 1: SQL Vulnerability patch</button>
      <button class="sim-tab-btn" id="tab-btn-ai">Task 2: AI Neural Convergence</button>
    </div>
    
    <div class="sim-tab-content active" id="tab-content-security">
      <div class="sim-grid">
        <div class="sim-display-panel">
          <div class="code-editor-mockup">
            <div class="editor-header">
              <span>api_handler.js</span>
              <span>UTF-8 | JavaScript</span>
            </div>
            <div class="editor-body">
              <span class="code-comment">// Vulnerable backend search query implementation</span><br>
              <span class="code-keyword">function</span> <span class="code-func">getUserData</span>(email, password) {<br>
              <span class="code-highlight-bg">
                <span class="code-keyword">const</span> query = <span class="code-string">\`SELECT * FROM users WHERE email = '\${email}' AND password = '\${password}'\`</span>;<br>
              </span>
              &nbsp;&nbsp;<span class="code-keyword">return</span> db.<span class="code-func">execute</span>(query);<br>
              }
            </div>
          </div>
          
          <div class="sim-console" id="sec-console">
            <div class="sim-console-line info">[SYS] System vulnerability scanner initialized.</div>
            <div class="sim-console-line error">[SYS] CRITICAL VULNERABILITY: SQL injection vector detected on login query.</div>
            <div class="sim-console-line">[SYS] Select a secure coding fix from the controls panel to apply patch.</div>
          </div>
        </div>
        
        <div class="sim-controls">
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">Apply the correct parameterized framework function to secure input fields from injections:</p>
          
          <div class="options-list">
            <div class="code-option-card" data-opt="opt-1">
              <span class="opt-title">Option A: Query Parameterization (Prepared Statement)</span>
              <pre><span class="code-keyword">const</span> query = <span class="code-string">'SELECT * FROM users WHERE email = ? AND password = ?'</span>;<br><span class="code-keyword">return</span> db.<span class="code-func">execute</span>(query, [email, password]);</pre>
            </div>
            
            <div class="code-option-card" data-opt="opt-2">
              <span class="opt-title">Option B: Client-side Input Regex Stripping</span>
              <pre><span class="code-keyword">const</span> cleanEmail = email.<span class="code-func">replace</span>(<span class="code-string">/['";]/g</span>, <span class="code-string">''</span>);<br><span class="code-keyword">const</span> query = <span class="code-string">\`SELECT * FROM ... email = '\${cleanEmail}'\`</span>;</pre>
            </div>
            
            <div class="code-option-card" data-opt="opt-3">
              <span class="opt-title">Option C: Parameter Boundary Validation limits</span>
              <pre><span class="code-keyword">if</span> (email.<span class="code-keyword">length</span> > 50) <span class="code-keyword">throw new</span> <span class="code-func">Error</span>(<span class="code-string">'Too long'</span>);<br><span class="code-keyword">const</span> query = <span class="code-string">\`SELECT * FROM ... email = '\${email}'\`</span>;</pre>
            </div>
          </div>
          
          <div class="sim-btn-row">
            <button class="sim-btn-execute" id="btn-sec-patch" disabled>
              <span>🛡️ Run Security Audit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="sim-tab-content" id="tab-content-ai">
      <div class="sim-grid">
        <div class="sim-display-panel">
          <div class="sim-canvas-container">
            <canvas id="ai-sim-canvas" class="sim-canvas"></canvas>
          </div>
          
          <div class="sim-console" id="ai-console">
            <div class="sim-console-line info">[SYS] Neural Model compiler initialized.</div>
            <div class="sim-console-line">[SYS] Model Parameters: Epochs: 10 | Loss target: &lt; 0.05.</div>
            <div class="sim-console-line info">[SYS] Adjust Hyperparameters (Learning Rate & Optimizer) to converge loss.</div>
          </div>
        </div>
        
        <div class="sim-controls">
          <div class="sim-stats-bar">
            <div class="sim-stat-box">
              <span class="lbl">Epoch</span>
              <div class="val" id="ai-stat-epoch">0 / 10</div>
            </div>
            <div class="sim-stat-box">
              <span class="lbl">Loss</span>
              <div class="val alert-red" id="ai-stat-loss">0.95</div>
            </div>
            <div class="sim-stat-box">
              <span class="lbl">Status</span>
              <div class="val" id="ai-stat-status">IDLE</div>
            </div>
          </div>
          
          <div class="sim-control-group">
            <label>Learning Rate <span class="val-badge" id="val-lr">0.500</span></label>
            <input type="range" class="sim-slider" id="slider-lr" min="-4.0" max="0.0" step="0.5" value="-0.3">
            <div class="slider-labels"><span>0.0001 (Slow)</span><span>1.0 (Diverges)</span></div>
          </div>
          
          <div class="sim-control-group">
            <label>Model Training Optimizer</label>
            <select class="form-group" id="select-optimizer" style="padding: 10px; background: rgba(0,0,0,0.2); border: 1px solid var(--glass-border); color: white; border-radius: var(--border-radius-sm); width: 100%;">
              <option value="SGD">Stochastic Gradient Descent (SGD)</option>
              <option value="Momentum">Momentum SGD</option>
              <option value="RMSprop">RMSprop</option>
              <option value="Adam" selected>Adam Optimizer</option>
            </select>
          </div>
          
          <div class="sim-btn-row">
            <button class="sim-btn-execute" id="btn-ai-train">
              <span>🧠 Compile & Train Model</span>
            </button>
            <button class="sim-btn-reset" id="btn-ai-reset">Reset</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="sim-success-overlay" id="eng-success-overlay">
      <div class="sim-success-content">
        <div class="sim-success-icon">🏆</div>
        <h3 id="eng-success-title">Task Solved!</h3>
        <p id="eng-success-desc">Congratulations! You successfully resolved the engineering bottleneck.</p>
        <button class="btn btn-primary" id="btn-eng-success-ok" style="margin-top: 15px; padding: 10px 24px;">Complete Task</button>
      </div>
    </div>
  `;

  const tabSecurity = document.getElementById("tab-btn-security");
  const tabAI = document.getElementById("tab-btn-ai");
  const contentSecurity = document.getElementById("tab-content-security");
  const contentAI = document.getElementById("tab-content-ai");
  
  const consoleSec = document.getElementById("sec-console");
  const consoleAI = document.getElementById("ai-console");
  const btnSecPatch = document.getElementById("btn-sec-patch");
  
  const sliderLR = document.getElementById("slider-lr");
  const selectOpt = document.getElementById("select-optimizer");
  const labelLR = document.getElementById("val-lr");
  const btnAITrain = document.getElementById("btn-ai-train");
  const btnAIReset = document.getElementById("btn-ai-reset");
  
  const statEpoch = document.getElementById("ai-stat-epoch");
  const statLoss = document.getElementById("ai-stat-loss");
  const statStatus = document.getElementById("ai-stat-status");
  
  const codeOptions = document.querySelectorAll(".code-option-card");
  const overlay = document.getElementById("eng-success-overlay");
  const successTitle = document.getElementById("eng-success-title");
  const successDesc = document.getElementById("eng-success-desc");
  const btnSuccessOk = document.getElementById("btn-eng-success-ok");

  tabSecurity.addEventListener("click", () => {
    tabSecurity.classList.add("active");
    tabAI.classList.remove("active");
    contentSecurity.classList.add("active");
    contentAI.classList.remove("active");
  });

  tabAI.addEventListener("click", () => {
    tabAI.classList.add("active");
    tabSecurity.classList.remove("active");
    contentAI.classList.add("active");
    contentSecurity.classList.remove("active");
    setTimeout(resizeAICanvas, 50);
  });

  codeOptions.forEach(card => {
    card.addEventListener("click", () => {
      if (engineeringSimState.isExecuting) return;
      codeOptions.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      engineeringSimState.selectedCodeOption = card.dataset.opt;
      btnSecPatch.disabled = false;
    });
  });

  function logSec(message, type = "") {
    const p = document.createElement("div");
    p.className = `sim-console-line ${type}`;
    p.textContent = `[SYS] ${message}`;
    consoleSec.appendChild(p);
    consoleSec.scrollTop = consoleSec.scrollHeight;
  }

  btnSecPatch.addEventListener("click", () => {
    if (engineeringSimState.isExecuting || !engineeringSimState.selectedCodeOption) return;

    engineeringSimState.isExecuting = true;
    btnSecPatch.disabled = true;
    
    logSec("Initiating sandbox dependency audit test suite...", "info");
    
    setTimeout(() => {
      logSec("Injecting mock SQL payloads: ' OR '1'='1 ...", "info");
      
      setTimeout(() => {
        if (engineeringSimState.selectedCodeOption === "opt-1") {
          logSec("Test 1: SQL Injection block verification -> PASSED", "success");
          logSec("Test 2: Parameter boundary escaping check -> PASSED", "success");
          logSec("Sandbox status: SECURED. Applying query database patch...", "success");
          
          setTimeout(() => {
            successTitle.textContent = "API Layer Secured!";
            successDesc.textContent = "You successfully patched the SQL injection vector using query parameterization (Prepared Statements), preventing unauthorized data extraction.";
            overlay.classList.add("active");
            userState.completedSims += 1;
            showToast("Vulnerability Patched", "Compiled secure code layers successfully.", "success");
          }, 800);
          
        } else if (engineeringSimState.selectedCodeOption === "opt-2") {
          logSec("Test 1: SQL Injection block verification -> PASSED", "success");
          logSec("Test 2: Injection via nested encoding characters -> FAILED", "error");
          logSec("Auditing Failure: Regex strip regex bypass detected. Hackers could exploit nested parameters.", "error");
          btnSecPatch.disabled = false;
          engineeringSimState.isExecuting = false;
          showToast("Vulnerability Audit Failed", "Regex filter bypassed by complex syntax.", "error");
          
        } else {
          logSec("Test 1: SQL Injection block verification -> FAILED", "error");
          logSec("Auditing Failure: Length boundaries alone cannot prevent structured query injection payloads.", "error");
          btnSecPatch.disabled = false;
          engineeringSimState.isExecuting = false;
          showToast("Vulnerability Audit Failed", "Vulnerable code path is still exploitable.", "error");
        }
      }, 1000);
    }, 800);
  });

  const aiCanvas = document.getElementById("ai-sim-canvas");
  const aiCtx = aiCanvas.getContext("2d");
  
  function resizeAICanvas() {
    if (!aiCanvas) return;
    aiCanvas.width = aiCanvas.offsetWidth;
    aiCanvas.height = aiCanvas.offsetHeight || 250;
    drawLossGrid();
  }

  let lossHistory = [];
  function drawLossGrid() {
    if (!aiCanvas) return;
    aiCtx.clearRect(0, 0, aiCanvas.width, aiCanvas.height);
    
    aiCtx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    aiCtx.lineWidth = 1;
    for (let x = 30; x < aiCanvas.width; x += 40) {
      aiCtx.beginPath();
      aiCtx.moveTo(x, 10);
      aiCtx.lineTo(x, aiCanvas.height - 25);
      aiCtx.stroke();
    }
    for (let y = 20; y < aiCanvas.height - 20; y += 40) {
      aiCtx.beginPath();
      aiCtx.moveTo(30, y);
      aiCtx.lineTo(aiCanvas.width - 10, y);
      aiCtx.stroke();
    }

    aiCtx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    aiCtx.lineWidth = 2;
    aiCtx.beginPath();
    aiCtx.moveTo(30, 10);
    aiCtx.lineTo(30, aiCanvas.height - 25);
    aiCtx.lineTo(aiCanvas.width - 10, aiCanvas.height - 25);
    aiCtx.stroke();

    aiCtx.fillStyle = "rgba(255, 255, 255, 0.5)";
    aiCtx.font = "9px monospace";
    aiCtx.fillText("Loss", 4, 15);
    aiCtx.fillText("Epochs", aiCanvas.width - 45, aiCanvas.height - 10);

    if (lossHistory.length > 0) {
      aiCtx.beginPath();
      const paddingX = 30;
      const graphWidth = aiCanvas.width - 40;
      const graphHeight = aiCanvas.height - 45;
      
      const startX = paddingX;
      const startY = 20 + (1 - lossHistory[0]) * graphHeight;
      aiCtx.moveTo(startX, startY);

      lossHistory.forEach((val, idx) => {
        const x = paddingX + (idx / 10) * graphWidth;
        let clampedVal = val;
        if (clampedVal > 1.2) clampedVal = 1.2;
        if (clampedVal < 0) clampedVal = 0;
        const y = 20 + (1.0 - clampedVal / 1.0) * graphHeight;
        aiCtx.lineTo(x, y);
      });

      aiCtx.strokeStyle = "#c084fc";
      aiCtx.lineWidth = 2.5;
      aiCtx.stroke();

      const lastIdx = lossHistory.length - 1;
      const lx = paddingX + (lastIdx / 10) * graphWidth;
      const ly = 20 + (1.0 - (lossHistory[lastIdx] > 1.2 ? 1.2 : lossHistory[lastIdx]) / 1.0) * graphHeight;
      aiCtx.beginPath();
      aiCtx.arc(lx, ly, 5, 0, Math.PI * 2);
      aiCtx.fillStyle = "#c084fc";
      aiCtx.fill();
    }
  }

  function getLearningRate() {
    const power = parseFloat(sliderLR.value);
    return Math.pow(10, power);
  }

  function updateLRDisplay() {
    const lrVal = getLearningRate();
    labelLR.textContent = lrVal.toFixed(lrVal >= 0.1 ? 2 : 4);
  }

  sliderLR.addEventListener("input", updateLRDisplay);
  updateLRDisplay();

  function logAI(message, type = "") {
    const p = document.createElement("div");
    p.className = `sim-console-line ${type}`;
    p.textContent = `[SYS] ${message}`;
    consoleAI.appendChild(p);
    consoleAI.scrollTop = consoleAI.scrollHeight;
  }

  btnAITrain.addEventListener("click", () => {
    if (engineeringSimState.isExecuting) return;

    engineeringSimState.isExecuting = true;
    btnAITrain.disabled = true;
    sliderLR.disabled = true;
    selectOpt.disabled = true;

    const lr = getLearningRate();
    const opt = selectOpt.value;

    logAI(`Starting Model Compilation. Optimizer = ${opt}, Learning Rate = ${lr.toFixed(4)}...`, "info");
    logAI(`Allocating batch buffers... Tensor weights bounds verified.`, "");
    
    statStatus.textContent = "TRAINING";
    statStatus.className = "val alert-cyan";

    let epoch = 0;
    let currentLoss = 0.95;
    lossHistory = [currentLoss];
    drawLossGrid();

    activeSimInterval = setInterval(() => {
      epoch += 1;
      statEpoch.textContent = `${epoch} / 10`;

      if (lr > 0.1) {
        currentLoss = currentLoss * (1.1 + Math.random() * 0.3);
        logAI(`Epoch ${epoch}/10 - loss: ${currentLoss.toFixed(4)} - val_loss: ${(currentLoss*1.05).toFixed(4)}`, "error");
      } else if (lr < 0.0009) {
        currentLoss = currentLoss - (0.01 + Math.random() * 0.01);
        logAI(`Epoch ${epoch}/10 - loss: ${currentLoss.toFixed(4)} - val_loss: ${(currentLoss*1.02).toFixed(4)}`, "");
      } else {
        let optimalMultiplier = 0.5;
        if (opt === "Adam") optimalMultiplier = 0.35;
        else if (opt === "RMSprop") optimalMultiplier = 0.42;
        else if (opt === "Momentum") optimalMultiplier = 0.48;
        
        const learningFactor = lr * 200;
        currentLoss = currentLoss * (optimalMultiplier + Math.random() * 0.15) - (learningFactor * 0.01);
        if (currentLoss < 0.01) currentLoss = 0.01 + Math.random() * 0.02;

        logAI(`Epoch ${epoch}/10 - loss: ${currentLoss.toFixed(4)} - val_loss: ${(currentLoss*1.01).toFixed(4)}`, "success");
      }

      statLoss.textContent = currentLoss.toFixed(3);
      if (currentLoss < 0.05) {
        statLoss.className = "val alert-green";
      } else {
        statLoss.className = "val alert-red";
      }

      lossHistory.push(currentLoss);
      drawLossGrid();

      if (epoch >= 10) {
        clearInterval(activeSimInterval);
        activeSimInterval = null;
        engineeringSimState.isExecuting = false;

        if (currentLoss < 0.05) {
          statStatus.textContent = "CONVERGED";
          statStatus.className = "val alert-green";
          logAI("Model Convergence achieved! Saving weights to node buffers.", "success");

          setTimeout(() => {
            successTitle.textContent = "AI Model Converged!";
            successDesc.textContent = `You successfully tuned the Neural Network parameters using a Learning Rate of ${lr.toFixed(4)} and the ${opt} Optimizer. The training loss converged cleanly to target limits.`;
            overlay.classList.add("active");
            userState.completedSims += 1;
            showToast("Optimization Complete", "Saved converged weights database.", "success");
          }, 800);
        } else {
          statStatus.textContent = "DIVERGED";
          statStatus.className = "val alert-red";
          btnAITrain.disabled = false;
          sliderLR.disabled = false;
          selectOpt.disabled = false;
          
          if (lr > 0.1) {
            logAI("Compilation Fail: Gradients exploded due to overly high learning rate.", "error");
          } else {
            logAI("Compilation Fail: Learning threshold failed to reach target loss boundaries.", "error");
          }
        }
      }
    }, 400);
  });

  btnAIReset.addEventListener("click", () => {
    if (activeSimInterval) clearInterval(activeSimInterval);
    engineeringSimState.isExecuting = false;
    btnAITrain.disabled = false;
    sliderLR.disabled = false;
    selectOpt.disabled = false;
    
    sliderLR.value = "-0.3";
    selectOpt.value = "Adam";
    updateLRDisplay();

    statEpoch.textContent = "0 / 10";
    statLoss.textContent = "0.95";
    statLoss.className = "val alert-red";
    statStatus.textContent = "IDLE";
    statStatus.className = "val";

    lossHistory = [];
    drawLossGrid();

    consoleAI.innerHTML = `
      <div class="sim-console-line info">[SYS] Neural Model compiler initialized.</div>
      <div class="sim-console-line">[SYS] Model Parameters: Epochs: 10 | Loss target: &lt; 0.05.</div>
      <div class="sim-console-line info">[SYS] Adjust Hyperparameters (Learning Rate & Optimizer) to converge loss.</div>
    `;
  });

  btnSuccessOk.addEventListener("click", () => {
    overlay.classList.remove("active");
    window.location.hash = "#simulation";
  });
}

// ==========================================
// SITUATIONAL MCQ ASSESSMENT ENGINE
// ==========================================
function initMCQSimulator(careerId) {
  const career = careersData.find(c => c.id === careerId);
  if (!career || !career.questions || career.questions.length === 0) return;

  const userAnswers = new Array(career.questions.length).fill(null);
  renderMCQQuestion(career, 0, userAnswers);
}

function renderMCQQuestion(career, qIndex, userAnswers) {
  const container = document.getElementById("ast-mcq-container");
  if (!container) return;

  const question = career.questions[qIndex];
  const totalQ = career.questions.length;
  const progressPct = ((qIndex) / totalQ) * 100;
  const isAnswered = userAnswers[qIndex] !== null;

  container.innerHTML = `
    <div class="mcq-card glass-card fade-in">
      <div class="mcq-progress-container">
        <div class="mcq-progress-header">
          <span class="mcq-number-span">Situation ${qIndex + 1} of ${totalQ}</span>
          <span class="mcq-pct-span">${Math.round(progressPct)}% Complete</span>
        </div>
        <div class="mcq-progress-bar">
          <div class="mcq-progress-fill" style="width: ${progressPct}%;"></div>
        </div>
      </div>

      <div class="mcq-body">
        <h3 class="mcq-situation-text">${question.text}</h3>
        
        <div class="mcq-options-grid ${isAnswered ? 'grid-disabled' : ''}">
          ${question.options.map((opt, optIdx) => {
            let extraClass = '';
            let bulletChar = String.fromCharCode(65 + optIdx);
            
            if (isAnswered) {
              if (question.correctIdx !== undefined) {
                if (optIdx === question.correctIdx) {
                  extraClass = 'correct-choice disabled';
                  bulletChar = '✓';
                } else if (userAnswers[qIndex] === optIdx) {
                  extraClass = 'incorrect-choice disabled';
                  bulletChar = '✕';
                } else {
                  extraClass = 'disabled';
                }
              } else {
                if (userAnswers[qIndex] === optIdx) {
                  extraClass = 'selected';
                }
              }
            }
            return `
              <div class="mcq-option-card ${extraClass}" data-opt-idx="${optIdx}">
                <div class="option-bullet">${bulletChar}</div>
                <div class="option-text">${opt.text}</div>
              </div>
            `;
          }).join('')}
        </div>

        ${isAnswered && question.correctIdx !== undefined ? `
          <div class="mcq-explanation-card glass-card fade-in" style="margin-top: 24px; padding: 20px; border-left: 4px solid ${userAnswers[qIndex] === question.correctIdx ? 'var(--accent-green)' : '#f43f5e'}; background: rgba(255, 255, 255, 0.01);">
            <h4 style="margin-bottom: 8px; font-size: 0.95rem; display: flex; align-items: center; gap: 8px; color: ${userAnswers[qIndex] === question.correctIdx ? 'var(--accent-green)' : '#f43f5e'};">
              <span>${userAnswers[qIndex] === question.correctIdx ? '🎉 Correct Action!' : '🚨 Warning: Safety Threat Detected'}</span>
            </h4>
            <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-muted);">${question.explanation}</p>
          </div>
        ` : ''}
      </div>

      <div class="mcq-footer-row">
        <button class="btn btn-secondary" id="mcq-prev-btn" ${qIndex === 0 ? 'disabled' : ''}>Back</button>
        <button class="btn btn-primary" id="mcq-next-btn" ${userAnswers[qIndex] === null ? 'disabled' : ''}>
          ${qIndex === totalQ - 1 ? 'Review Answers' : 'Next Situation'}
        </button>
      </div>
    </div>
  `;

  // Bind option clicks
  const optionCards = container.querySelectorAll(".mcq-option-card");
  optionCards.forEach(card => {
    card.addEventListener("click", () => {
      if (userAnswers[qIndex] !== null) return; // Prevent changing after answered
      
      const optIdx = parseInt(card.dataset.optIdx);
      userAnswers[qIndex] = optIdx;
      
      const isCorrect = question.correctIdx === undefined || optIdx === question.correctIdx;
      
      if (question.correctIdx !== undefined) {
        optionCards.forEach((c, idx) => {
          c.classList.add("disabled");
          if (idx === question.correctIdx) {
            c.classList.add("correct-choice");
            c.querySelector(".option-bullet").textContent = "✓";
          } else if (idx === optIdx) {
            c.classList.add("incorrect-choice");
            c.querySelector(".option-bullet").textContent = "✕";
          }
        });
        
        // Append explanation card dynamically
        const explanationDiv = document.createElement("div");
        explanationDiv.className = "mcq-explanation-card glass-card fade-in";
        explanationDiv.style.cssText = `margin-top: 24px; padding: 20px; border-left: 4px solid ${isCorrect ? 'var(--accent-green)' : '#f43f5e'}; background: rgba(255, 255, 255, 0.01);`;
        explanationDiv.innerHTML = `
          <h4 style="margin-bottom: 8px; font-size: 0.95rem; display: flex; align-items: center; gap: 8px; color: ${isCorrect ? 'var(--accent-green)' : '#f43f5e'};">
            <span>${isCorrect ? '🎉 Correct Action!' : '🚨 Warning: Safety Threat Detected'}</span>
          </h4>
          <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-muted);">${question.explanation}</p>
        `;
        container.querySelector(".mcq-body").appendChild(explanationDiv);
      } else {
        optionCards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
      }
      
      // Enable next button
      document.getElementById("mcq-next-btn").disabled = false;
    });
  });

  // Bind navigation buttons
  document.getElementById("mcq-prev-btn").addEventListener("click", () => {
    renderMCQQuestion(career, qIndex - 1, userAnswers);
  });

  document.getElementById("mcq-next-btn").addEventListener("click", () => {
    if (qIndex === totalQ - 1) {
      renderMCQReview(career, userAnswers);
    } else {
      renderMCQQuestion(career, qIndex + 1, userAnswers);
    }
  });
}

function renderMCQReview(career, userAnswers) {
  const container = document.getElementById("ast-mcq-container");
  if (!container) return;

  container.innerHTML = `
    <div class="mcq-card glass-card fade-in">
      <div class="mcq-progress-container">
        <div class="mcq-progress-header">
          <span class="mcq-number-span" style="font-weight:800; color:var(--primary);">Assessment Review</span>
          <span class="mcq-pct-span">Ready to Submit</span>
        </div>
        <div class="mcq-progress-bar">
          <div class="mcq-progress-fill" style="width: 100%; background: linear-gradient(90deg, var(--accent-blue), var(--accent-green));"></div>
        </div>
      </div>

      <div class="mcq-body">
        <h3 class="mcq-situation-text" style="font-size:1.3rem; margin-bottom: 20px;">Review your choices before submitting flight coordinates:</h3>
        
        <div class="mcq-review-list" style="display:flex; flex-direction:column; gap:16px;">
          ${career.questions.map((q, idx) => {
            const hasCorrectIdx = q.correctIdx !== undefined;
            const isCorrect = !hasCorrectIdx || userAnswers[idx] === q.correctIdx;
            const statusColor = hasCorrectIdx ? (isCorrect ? 'var(--accent-green)' : '#f43f5e') : 'var(--accent-blue)';
            const bulletText = hasCorrectIdx ? (isCorrect ? '✓' : '✕') : String.fromCharCode(65 + userAnswers[idx]);
            
            return `
              <div class="mcq-review-item" style="background:rgba(255,255,255,0.03); border:1px solid var(--glass-border); padding:16px; border-radius:var(--border-radius-sm); position:relative;">
                <h4 style="font-size:0.9rem; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                  <span style="color:var(--text-meta); font-weight:700;">Situation ${idx + 1}</span>
                  <button class="btn-change-answer" data-q-idx="${idx}" style="background:none; border:none; color:var(--primary); font-size:0.8rem; font-weight:600; cursor:pointer; text-decoration:underline; padding:0;">Change</button>
                </h4>
                <p style="font-size:0.8rem; line-height:1.4; color:var(--text-muted); margin-bottom:8px;">${q.text}</p>
                <div style="font-size:0.85rem; font-weight:600; color:${statusColor}; display:flex; gap:8px; align-items:flex-start;">
                  <span style="background:${statusColor}; color:black; width:18px; height:18px; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; font-size:0.7rem; flex-shrink:0; font-weight:700;">${bulletText}</span>
                  <span>Your Answer: ${q.options[userAnswers[idx]].text}</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="mcq-footer-row" style="margin-top:30px;">
        <button class="btn btn-secondary" id="review-back-btn">Back</button>
        <button class="btn btn-primary btn-glow" id="review-submit-btn">🚀 Submit Flight Assessment</button>
      </div>
    </div>
  `;

  // Bind change buttons
  container.querySelectorAll(".btn-change-answer").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.qIdx);
      renderMCQQuestion(career, idx, userAnswers);
    });
  });

  // Back button
  document.getElementById("review-back-btn").addEventListener("click", () => {
    renderMCQQuestion(career, career.questions.length - 1, userAnswers);
  });

  // Submit button
  document.getElementById("review-submit-btn").addEventListener("click", () => {
    const finalScores = calculateMCQScores(career, userAnswers);
    renderMCQResults(career, finalScores, userAnswers);
  });
}

function calculateMCQScores(career, userAnswers) {
  const totals = { leadership: 0, problemSolving: 0, creativity: 0, communication: 0, criticalThinking: 0 };
  const maxPossible = { leadership: 0, problemSolving: 0, creativity: 0, communication: 0, criticalThinking: 0 };

  career.questions.forEach((q, idx) => {
    const chosenOpt = q.options[userAnswers[idx]];
    Object.keys(totals).forEach(k => {
      totals[k] += chosenOpt.scores[k] || 0;
    });

    Object.keys(maxPossible).forEach(k => {
      const maxInQ = Math.max(...q.options.map(o => o.scores[k] || 0));
      maxPossible[k] += maxInQ;
    });
  });

  const normalized = {};
  Object.keys(totals).forEach(k => {
    const max = maxPossible[k] || 1;
    normalized[k] = Math.round((totals[k] / max) * 100);
  });

  return normalized;
}

function renderMCQResults(career, scores, userAnswers = null) {
  const container = document.getElementById("ast-mcq-container");
  if (!container) return;

  const categories = Object.keys(scores);
  const averageScore = Math.round(categories.reduce((acc, cat) => acc + scores[cat], 0) / categories.length);

  let ratingLabel = "";
  let ratingClass = "";
  let ratingColor = "";

  if (averageScore <= 40) {
    ratingLabel = "Beginner";
    ratingClass = "alert-red";
    ratingColor = "#f43f5e";
  } else if (averageScore <= 70) {
    ratingLabel = "Developing";
    ratingClass = "alert-yellow";
    ratingColor = "#eab308";
  } else {
    ratingLabel = "Career Ready";
    ratingClass = "alert-green";
    ratingColor = "#10b981";
  }

  const strengths = [];
  const improvements = [];
  
  const skillLabels = {
    leadership: "Leadership",
    problemSolving: "Problem Solving",
    creativity: "Creativity",
    communication: "Communication",
    criticalThinking: "Critical Thinking"
  };

  const recommendations = {
    leadership: [
      "Take charge of group presentations or team simulation projects.",
      "Join student leadership councils or public debate modules.",
      "Practice delegating project elements and facilitating group consensus."
    ],
    problemSolving: [
      "Engage in logical grids, chess, or algorithm training modules.",
      "Break down complex system errors into smaller debug steps.",
      "Participate in physical telemetry or logical puzzle sessions."
    ],
    creativity: [
      "Participate in brainstorming cycles, UI prototyping, or draft design modules.",
      "Experiment with lateral thinking challenges and creative mockups.",
      "Build visual prototypes for futuristic telemetry interfaces."
    ],
    communication: [
      "Join public speech groups or communications masterclasses.",
      "Practice writing direct technical updates for general student audiences.",
      "Focus on active listening metrics during team roleplay games."
    ],
    criticalThinking: [
      "Analyze historical failures in space exploration or systems architecture.",
      "Read journals on telemetry science, data filters, and system testing.",
      "Practice structured risk analysis and hypothesis auditing."
    ]
  };

  categories.forEach(cat => {
    if (scores[cat] >= 70) {
      strengths.push(skillLabels[cat]);
    } else {
      improvements.push(skillLabels[cat]);
    }
  });

  if (strengths.length === 0) strengths.push("Telemetry Alignment Basics");
  if (improvements.length === 0) improvements.push("Advanced System Management");

  let actionBullets = [];
  categories.sort((a,b) => scores[a] - scores[b]);
  const weakSkills = categories.slice(0, 2);
  weakSkills.forEach(skill => {
    actionBullets = actionBullets.concat(recommendations[skill] || []);
  });
  actionBullets = actionBullets.slice(0, 3);

  const circumference = 2 * Math.PI * 50;
  const strokeDashoffset = circumference - (averageScore / 100) * circumference;

  let correctCount = 0;
  let hasCorrectChecking = false;
  if (userAnswers) {
    career.questions.forEach((q, idx) => {
      if (q.correctIdx !== undefined) {
        hasCorrectChecking = true;
        if (userAnswers[idx] === q.correctIdx) {
          correctCount++;
        }
      }
    });
  }

  let scoreBannerHTML = "";
  if (hasCorrectChecking) {
    const totalQ = career.questions.length;
    const isPerfect = correctCount === totalQ;
    const scoreColor = isPerfect ? 'var(--accent-green)' : correctCount >= totalQ / 2 ? 'var(--accent-blue)' : '#f43f5e';
    scoreBannerHTML = `
      <div class="mcq-accuracy-badge" style="background: rgba(255,255,255,0.03); border: 1px solid var(--glass-border); padding: 12px 24px; border-radius: var(--border-radius-sm); display: inline-flex; align-items: center; gap: 10px; margin: 15px 0 25px 0;">
        <span style="font-size: 1.25rem;">🛸</span>
        <span style="font-size: 0.95rem; font-weight: 600;">Mission Accuracy: <strong style="color: ${scoreColor}; font-size: 1.15rem;">${correctCount} / ${totalQ} Correct</strong></span>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="mcq-card glass-card fade-in" style="padding: 40px 30px;">
      <div class="results-header" style="text-align: center; margin-bottom: 20px;">
        <h3 style="font-size:1.8rem; font-weight:800; margin-bottom: 8px;">Assessment Completed!</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Telemetry data analyzed. Here is your Career Readiness Profile:</p>
        ${scoreBannerHTML}
      </div>

      <div class="results-layout" style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 30px; align-items: center; margin-bottom: 30px;">
        <div class="gauge-col" style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 30px; border-radius: var(--border-radius-md);">
          <h4 style="font-size:0.9rem; color:var(--text-meta); margin-bottom: 16px; text-transform: uppercase; letter-spacing:0.05em; font-weight:700;">Career Readiness</h4>
          
          <div style="position: relative; width: 140px; height: 140px; display: flex; align-items: center; justify-content: center;">
            <svg style="transform: rotate(-90deg); width: 140px; height: 140px;">
              <circle cx="70" cy="70" r="50" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="12"></circle>
              <circle cx="70" cy="70" r="50" fill="none" stroke="${ratingColor}" stroke-width="12" 
                stroke-dasharray="${circumference}" stroke-dashoffset="${strokeDashoffset}" stroke-linecap="round"
                style="transition: stroke-dashoffset 1s ease-out;"></circle>
            </svg>
            <div style="position: absolute; display: flex; flex-direction: column; align-items: center;">
              <span style="font-size: 2rem; font-weight: 800; font-family: var(--font-heading); color: white;">${averageScore}%</span>
            </div>
          </div>

          <div class="val-badge ${ratingClass}" style="margin-top: 20px; font-weight: 700; font-size: 0.95rem; text-transform: uppercase;">
            ${ratingLabel}
          </div>
        </div>

        <div class="chart-col" style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 24px; border-radius: var(--border-radius-md); height: 100%; display: flex; flex-direction: column; justify-content: center;">
          <h4 style="font-size:0.9rem; color:var(--text-meta); margin-bottom: 16px; text-transform: uppercase; letter-spacing:0.05em; font-weight:700;">Cognitive Skill Breakdown</h4>
          
          <div class="bar-chart-container" style="display: flex; flex-direction: column; gap: 12px;">
            ${categories.map(cat => `
              <div class="bar-chart-row">
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px; font-weight: 500;">
                  <span style="color:var(--text-main);">${skillLabels[cat]}</span>
                  <span style="font-weight: 700; color: ${scores[cat] >= 70 ? 'var(--accent-green)' : scores[cat] >= 40 ? 'var(--accent-blue)' : '#f43f5e'};">${scores[cat]}%</span>
                </div>
                <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden;">
                  <div style="width: ${scores[cat]}%; height: 100%; background: ${scores[cat] >= 70 ? 'var(--accent-green)' : scores[cat] >= 40 ? 'var(--accent-blue)' : '#f43f5e'}; border-radius: 4px; transition: width 1s ease-out;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="feedback-grid" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; margin-bottom: 30px;">
        <div class="feedback-card glass-card" style="padding: 24px; background: rgba(255,255,255,0.01);">
          <h4 style="font-size: 1rem; margin-bottom: 12px; border-bottom: 1px solid var(--glass-border); padding-bottom: 6px;">💡 Suggested Actions</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem; color: var(--text-muted);">
            ${actionBullets.map(bullet => `
              <li style="display: flex; gap: 8px; align-items: flex-start;">
                <span style="color: var(--primary);">✦</span>
                <span>${bullet}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="strengths-card glass-card" style="padding: 24px; background: rgba(255,255,255,0.01);">
          <h4 style="font-size: 1rem; margin-bottom: 12px; border-bottom: 1px solid var(--glass-border); padding-bottom: 6px;">🎯 Profile Insights</h4>
          <div style="font-size: 0.8rem; display: flex; flex-direction: column; gap: 8px;">
            <div>
              <strong style="color: var(--accent-green); display: block; margin-bottom: 2px;">Key Strengths:</strong>
              <span style="color: var(--text-muted);">${strengths.join(', ')}</span>
            </div>
            <div>
              <strong style="color: var(--accent-pink); display: block; margin-bottom: 2px;">Areas to Develop:</strong>
              <span style="color: var(--text-muted);">${improvements.join(', ')}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="results-actions" style="display: flex; gap: 15px; justify-content: center;">
        <button class="btn btn-secondary" id="results-retry-btn" style="padding: 10px 24px;">Retry Assessment</button>
        <button class="btn btn-primary btn-glow" id="results-complete-btn" style="padding: 10px 24px;">Complete & Exit</button>
      </div>
    </div>
  `;

  // Retry Button
  document.getElementById("results-retry-btn").addEventListener("click", () => {
    initMCQSimulator(career.id);
  });

  // Complete & Exit
  document.getElementById("results-complete-btn").addEventListener("click", () => {
    window.location.hash = "#simulation";
  });
}

// ==========================================
// 5-MINUTE SPACE CRISIS SURVIVAL SIMULATOR
// ==========================================

let survivalGameState = {
  timer: null,
  secondsLeft: 300,
  isPlaying: false,
  isEmergencyActive: false,
  emergencyTimer: null,
  emergencySecondsLeft: 20,
  currentEmergencyIdx: -1,
  crisisQueue: [],
  crisisQueueIdx: 0,
  secondsUntilNextCrisis: 30,
  crisesSolved: 0,
  oxygen: 100,
  pressure: 101.3,
  hull: 100,
  speed: 7.66,
  eventLog: []
};

const survivalEmergencies = [
  {
    title: "Micrometeoroid Storm — Debris Field Incoming",
    desc: "DANGER: High-velocity micrometeoroid cluster on direct intercept course. Radar track: 340g fragment at 18 km/s — impact energy = 4 kg TNT. T-minus 20 seconds to crew module strike. Evasive action required immediately.",
    timer: 20,
    options: [
      { text: "Fire RCS attitude thrusters: 0.5-second pitch burst to shift spacecraft apogee by 0.3°, stepping clear of the debris trajectory.", correct: true, feedback: "Executed! Debris cluster passes 22 meters below the heat shield. No structural damage. Trajectory re-locked to nominal orbit." },
      { text: "Deploy emergency cargo bay blast doors and external debris shield panels to absorb the impact directly.", correct: false, feedback: "Blast panels are not rated for hypervelocity kinetic impacts. The fragment punches through and punctures Crew Module B. Fatal decompression in 8 seconds." },
      { text: "Alert all crew to brace at impact positions and lock all bulkhead doors before the collision.", correct: false, feedback: "Ship did not maneuver. Fragment impacts the communication array and ricochets into the fuel distribution manifold. Catastrophic explosion. Total loss." }
    ],
    skills: ["Orbital Mechanics", "RCS Maneuvering", "Rapid Decision Making"],
    failCause: "Crew module structural failure from hypervelocity micrometeoroid impact.",
    focusAdvice: "Master RCS thruster burst commands for spacecraft attitude adjustment. When debris is on an intercept course, the only safe response is a controlled pitch or yaw burn to shift your apogee. Blast shields and bracing positions are never substitutes for trajectory maneuvers."
  },
  {
    title: "Cabin Pressure Breach — Decompression Critical",
    desc: "ALERT: Sensor array detects a 4mm stress fracture in port-side Module B pressure hull. Cabin pressure dropping at 3.8 kPa per second. At this rate, hypoxia will incapacitate all crew in 18 seconds. Manual equalization is NOT possible.",
    timer: 18,
    options: [
      { text: "Order all crew to don pressure suits immediately, seal Module B bulkhead doors, then activate auto-patch foam injectors.", correct: true, feedback: "Module B isolated! Pressure suits protect the crew. Auto-patch foam seals the fracture in 6 seconds. Main cabin pressure holds at 97.2 kPa. Crisis contained." },
      { text: "Increase emergency oxygen flow from the primary reserve tanks to compensate for the pressure loss.", correct: false, feedback: "Flooding an open fracture with oxygen accelerates gas loss. Pressure reaches zero in 6 seconds. All crew incapacitated by explosive decompression. Fatal." },
      { text: "Dispatch the EVA team into the airlock to manually patch the hull fracture from outside.", correct: false, feedback: "Standard airlock depressurization takes 4.5 minutes. The entire crew collapses from hypoxia at 18 seconds. The EVA team finds no survivors." }
    ],
    skills: ["Emergency Protocols", "Extreme Physiology", "Rapid Containment"],
    failCause: "Fatal hypoxia from explosive cabin pressure collapse.",
    focusAdvice: "Practice donning pressure suits in under 10 seconds. In decompression scenarios, the three priorities are: protect the crew (suits first), isolate the compartment (bulkhead seal), then contain the breach (auto-seal foam). Never try to compensate a fractured hull with oxygen flow."
  },
  {
    title: "Guidance Computer Crash — Orbital Decay Alert",
    desc: "CRITICAL: A cosmic ray single-event upset (SEU) has triggered an uncontrolled shutdown of the primary flight guidance computer. Spacecraft entering gravity well decay at −0.12°/second. Atmospheric reentry contact window opens in 20 seconds. All autopilot systems offline.",
    timer: 20,
    options: [
      { text: "Hard-reset the flight computer via the manual breaker panel and boot the backup telemetry BIOS from read-only ROM.", correct: true, feedback: "BIOS boot completes in 9.4 seconds. Guidance re-established. Orbital apogee correction burn fires automatically. Trajectory fully stabilized. Crisis cleared." },
      { text: "Send an emergency uplink to Ground Control to remotely upload a guidance software patch via satellite relay.", correct: false, feedback: "Ground-to-orbit signal latency is 2.4 seconds minimum. Full patch upload requires 40+ seconds. The spacecraft burns up on atmospheric contact before upload completes." },
      { text: "Manually open the fuel valve handles to raw-fire the main engines and counteract orbital decay by hand.", correct: false, feedback: "Without digital thrust vectoring active, unregulated fuel pressure causes thruster gimbal asymmetry. Spacecraft enters uncontrolled spin and disintegrates at 72 km altitude." }
    ],
    skills: ["Telemetry Systems", "Hardware Troubleshooting", "Orbital Mechanics"],
    failCause: "Aerodynamic friction incinerates spacecraft during uncontrolled reentry.",
    focusAdvice: "Study the BIOS hard-reset procedure for your spacecraft's guidance computer. Ground Control uplinks fail due to latency, and raw fuel burns cause uncontrolled spin without digital vectoring. The immediate response to guidance system failures is always a local hardware-level reset sequence."
  },
  {
    title: "Solar Proton Storm — Lethal Radiation Surge",
    desc: "RADIATION ALERT: NOAA has issued a G5-class coronal mass ejection (CME) warning. A proton flux of 10⁵ particles/cm²/s will sweep through your orbital coordinates in 18 seconds. Unshielded crew will receive 2,100 mSv — 8 times the lethal radiation dose limit.",
    timer: 18,
    options: [
      { text: "Keep all systems powered to record rare solar telemetry data during the storm passage.", correct: false, feedback: "Unshielded electronics fail instantly. Life support computers go dark. Crew receives 2,100 mSv over 40 seconds — 8 times the lethal dose. No survivors." },
      { text: "Rotate spacecraft to face the engine block toward the solar surge, retract solar panels, and move crew to the water-jacketed central core module.", correct: true, feedback: "Engine gimbals and 8cm water tanks absorb 97% of the proton flux. Crew receives only 18 mSv — well within safe limits. All electronics and crew survive intact." },
      { text: "Shut down all primary power buses to protect electronics while crew remains seated at flight positions.", correct: false, feedback: "Electronics survive. However, crew is fully exposed to direct ionizing radiation without shielding cover. Three crew members develop acute radiation syndrome — fatal within 72 hours." }
    ],
    skills: ["Space Radiation Physics", "Emergency Protocols", "Crew Safety"],
    failCause: "Crew incapacitated by acute lethal solar proton radiation exposure.",
    focusAdvice: "Understand layered radiation shielding geometry. Water molecules in the central core tanks are the best proton absorbers onboard. During G5+ solar events, crew positioning within shielded modules — not electronics power state — determines survival."
  },
  {
    title: "Runaway Supply Capsule — Docking Ring Collision",
    desc: "WARNING: Automated resupply vehicle ATV-7 has suffered a thruster lock failure and is accelerating toward your docking node at 3.2 m/s. Vehicle mass: 8,200 kg. Structural analysis confirms the docking adapter will shear apart on impact in 16 seconds.",
    timer: 16,
    options: [
      { text: "Apply maximum voltage to electromagnetic docking locks to magnetically capture and decelerate ATV-7.", correct: false, feedback: "Combined kinetic energy exceeds the magnetic shear limit by factor of 12. The docking module is ripped from the hull. Fatal decompression of both spacecraft." },
      { text: "Broadcast emergency command sequences via proximity radio to remotely override ATV-7's thruster firmware.", correct: false, feedback: "ATV-7's guidance processor reset closed the remote access port. No override achieved in time. Capsule impacts at full velocity, shearing the docking collar." },
      { text: "Immediately fire RCS attitude thrusters to decouple from the docking port and shift the station 2 meters laterally out of ATV-7's trajectory.", correct: true, feedback: "Station clears the collision vector by 1.4 meters. ATV-7 tumbles harmlessly past the docking node. Docking system intact. No decompression event recorded." }
    ],
    skills: ["Orbital Mechanics", "RCS Maneuvering", "Emergency Protocols"],
    failCause: "Docking collar structural failure causes catastrophic hull decompression.",
    focusAdvice: "Study relative velocity and kinetic energy calculations. An 8-tonne vehicle at 3.2 m/s exceeds any magnetic or tether capture system by orders of magnitude. The correct response is always to decouple and laterally shift away using RCS — never attempt to absorb the impact."
  },
  {
    title: "CO₂ Scrubber Failure — Toxic Atmosphere Rising",
    desc: "LIFE SUPPORT ALERT: Primary Molecular Sieve Bed CO₂ scrubber has shut down — coolant loop failure. Cabin CO₂ rising at 0.15% per minute. CO₂ narcosis will incapacitate all crew in 20 seconds. Lethal hypercapnia poisoning follows within 90 seconds.",
    timer: 20,
    options: [
      { text: "Open all cabin air vents wide to circulate air and dilute the rising CO₂ concentration.", correct: false, feedback: "Circulating air without active scrubbing only spreads CO₂-rich air throughout the cabin. Concentration keeps rising. Two crew members lose consciousness at 18 seconds. Fatal." },
      { text: "Switch crew to LiOH emergency chemical canister backups and activate the secondary scrubber fan circuit breaker.", correct: true, feedback: "LiOH canisters immediately absorb CO₂ at 2.3 kg/hour. Secondary fan activated. CO₂ drops to 0.38% within 90 seconds — safely within the breathable range for the crew." },
      { text: "Instruct crew to breathe slowly and shallowly to reduce CO₂ output until the primary scrubber is repaired.", correct: false, feedback: "Voluntary CO₂ output reduction is physiologically insufficient to counter the scrubber failure rate. CO₂ toxicity progresses regardless. All crew members are hypercapnic within 60 seconds." }
    ],
    skills: ["Life Support Systems", "Emergency Protocols", "Chemical Engineering"],
    failCause: "Crew incapacitated by CO₂ hypercapnia toxic atmosphere poisoning.",
    focusAdvice: "Learn your life support system's backup redundancies. LiOH chemical canisters are the primary backup for molecular sieve scrubber failures. Air circulation alone never solves CO₂ toxicity — it requires active chemical absorption. Know where every backup canister is stored onboard."
  },
  {
    title: "Electrical Fire — Oxygen Module Ablaze",
    desc: "FIRE ALARM: Power distribution panel short circuit in Module B has ignited a wiring harness bundle. In the 21% O₂ cabin atmosphere, fire propagates 4× faster than on Earth. Three smoke sensors confirm active combustion. Fire reaches fuel cell manifold in 18 seconds.",
    timer: 18,
    options: [
      { text: "Grab portable fire extinguisher units and manually spray the burning wiring harness directly.", correct: false, feedback: "Portable extinguishers temporarily suppress the surface fire, but residual heat reignites within 8 seconds. Fire reaches the fuel cell manifold and causes a catastrophic onboard explosion." },
      { text: "Seal Module B bulkhead, activate the Halon CO₂ fire suppression charge, and shut down all non-essential power buses to Module B.", correct: true, feedback: "Halon discharge suppresses cabin oxygen and smothers the fire within 4 seconds. Power isolation prevents reignition. Module B sealed and safe. No fire spread to fuel cells occurred." },
      { text: "Open Module B external vent valves to push smoke and fire toward the vacuum of space.", correct: false, feedback: "Venting Module B evacuates all pressure in 12 seconds. While fire is smothered, decompression stress ruptures two fuel cell hoses, triggering a secondary explosion. Total ship loss." }
    ],
    skills: ["Fire Suppression", "Emergency Protocols", "Systems Engineering"],
    failCause: "Fire reached the fuel cell manifold, triggering a catastrophic onboard explosion.",
    focusAdvice: "Halon total-flooding systems are the only effective spacecraft fire suppression method. Portable extinguishers are insufficient for wiring harness fires, and venting creates catastrophic decompression risks. The correct protocol is always: seal the module → activate Halon → cut all power to the module."
  },
  {
    title: "EVA Suit Failure — Spacewalk Crew in Danger",
    desc: "EVA DISTRESS: Mission Specialist Chen reports a micro-crack in her right glove pressure layer during exterior repairs. Suit pressure dropping at 0.8 kPa/min. Her suit has 9 minutes of safe operation left — but standard airlock re-pressurization takes 12 minutes. Decide in 18 seconds.",
    timer: 18,
    options: [
      { text: "Activate the inner pressure suit bladder redundancy layer and immediately abort the EVA — initiate rapid airlock emergency re-pressurization override.", correct: true, feedback: "Inner bladder activated — extends safe suit time to 23 minutes. Emergency override compresses re-pressurization to 4.5 minutes. Chen returns safely. EVA aborted without injury." },
      { text: "Instruct Chen to apply EVA repair tape over the glove micro-crack to seal the breach while still outside.", correct: false, feedback: "Adhesive tape cannot hold against suit overpressure in vacuum conditions. Tape fails in 90 seconds. Glove tears open. Chen's hand is exposed to hard vacuum. Fatal injury." },
      { text: "Order Chen to complete the exterior repair task quickly and return before suit pressure reaches critical threshold.", correct: false, feedback: "The repair task requires 8 minutes minimum. Suit pressure reaches critical threshold at 6 minutes. Chen becomes incapacitated during EVA with no recovery option from this orbital position." }
    ],
    skills: ["EVA Operations", "Extreme Physiology", "Emergency Decision Making"],
    failCause: "EVA suit failure causes crew member fatality from hard vacuum exposure.",
    focusAdvice: "EVA emergencies require immediate abort when suit integrity is compromised — no exceptions. The inner bladder redundancy system exists precisely for this scenario. Never prioritize completing an exterior task over crew survival. Mission objectives are replaceable; crew members are not."
  }
];

function formatTime(secs) {
  const mins = Math.floor(secs / 60);
  const remainingSecs = secs % 60;
  return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
}

function updateNextCrisisCountdown() {
  const countdownEl = document.getElementById("next-crisis-countdown-val");
  const countdownBarEl = document.getElementById("next-crisis-countdown-bar");
  if (countdownEl) {
    countdownEl.textContent = `${survivalGameState.secondsUntilNextCrisis}s`;
  }
  if (countdownBarEl) {
    const pct = (survivalGameState.secondsUntilNextCrisis / 30) * 100;
    countdownBarEl.style.width = `${Math.max(0, pct)}%`;
    if (survivalGameState.secondsUntilNextCrisis <= 5) {
      countdownBarEl.style.background = '#ef4444';
    } else if (survivalGameState.secondsUntilNextCrisis <= 15) {
      countdownBarEl.style.background = '#eab308';
    } else {
      countdownBarEl.style.background = 'var(--accent-green)';
    }
  }
}

function initFiveMinSimulator() {
  const container = document.getElementById("ast-five-min-container");
  if (!container) return;

  stopSurvivalGame();

  container.innerHTML = `
    <div class="survival-welcome-panel glass-card fade-in" style="padding: 40px; text-align: center;">
      <span style="font-size: 3rem;">⚡</span>
      <h3 style="margin-top: 15px; font-size: 1.6rem; font-family: var(--font-heading);">Be an Astronaut for 5 Minutes</h3>
      <p style="color: var(--text-muted); max-width: 600px; margin: 15px auto; font-size: 0.95rem; line-height: 1.6;">
        Take command of orbital operations. You will enter a 5-minute real-time simulation shift in low-Earth orbit. System anomalies and extreme space hazards will test your decision speed. 
        <br><strong style="color: var(--accent-pink);">Warning: An incorrect choice or exceeding the time limit will result in cabin decompression or explosion (Death).</strong>
      </p>
      <button class="btn btn-primary btn-glow" id="btn-start-survival" style="padding: 12px 30px; font-size: 1rem;">
        🚀 Initiate Space Crisis Simulation
      </button>
    </div>
  `;

  document.getElementById("btn-start-survival").addEventListener("click", () => {
    startSurvivalGame();
  });
}

function stopSurvivalGame() {
  if (survivalGameState.timer) {
    clearInterval(survivalGameState.timer);
    survivalGameState.timer = null;
  }
  if (survivalGameState.emergencyTimer) {
    clearInterval(survivalGameState.emergencyTimer);
    survivalGameState.emergencyTimer = null;
  }
  survivalGameState.isPlaying = false;
  survivalGameState.isEmergencyActive = false;
}

function startSurvivalGame() {
  stopSurvivalGame();

  // Fisher-Yates shuffle the crisis event queue for randomized order
  const indices = survivalEmergencies.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  survivalGameState = {
    timer: null,
    secondsLeft: 300,
    isPlaying: true,
    isEmergencyActive: false,
    emergencyTimer: null,
    emergencySecondsLeft: 20,
    currentEmergencyIdx: -1,
    crisisQueue: indices,
    crisisQueueIdx: 0,
    secondsUntilNextCrisis: 30,
    crisesSolved: 0,
    oxygen: 100,
    pressure: 101.3,
    hull: 100,
    speed: 7.66,
    eventLog: []
  };

  renderSurvivalUI();

  addSurvivalLog("Entering Low-Earth Orbit coordinate lock — altitude 405 km.", "info");
  addSurvivalLog("Primary batteries connected. Life support system: NOMINAL.", "success");
  addSurvivalLog("Orbital velocity: 7.66 km/s. Tracking trajectory vectors.", "info");
  addSurvivalLog("Horizon scan active. No immediate debris anomalies detected.", "success");
  addSurvivalLog("⚠ WARNING: First anomaly event approaching in 30 seconds. Stay alert.", "warning");

  // Main game loop — ticks every second
  survivalGameState.timer = setInterval(() => {
    survivalGameState.secondsLeft--;

    const clockEl = document.getElementById("survival-time-val");
    if (clockEl) clockEl.textContent = formatTime(survivalGameState.secondsLeft);

    if (survivalGameState.secondsLeft <= 0) {
      triggerSurvivalSuccess();
      return;
    }

    // Ambient telemetry fluctuations when no emergency is active
    if (!survivalGameState.isEmergencyActive) {
      survivalGameState.speed = (7.65 + Math.random() * 0.03).toFixed(2);
      const speedEl = document.getElementById("surv-val-speed");
      if (speedEl) speedEl.textContent = `${survivalGameState.speed} km/s`;

      if (Math.random() < 0.08) {
        survivalGameState.pressure = (101.1 + Math.random() * 0.4).toFixed(1);
        const pressEl = document.getElementById("surv-val-pressure");
        if (pressEl) pressEl.textContent = `${survivalGameState.pressure} kPa`;
      }

      // Crisis countdown — fire next crisis 30 seconds after previous was solved
      if (survivalGameState.crisisQueueIdx < survivalGameState.crisisQueue.length) {
        survivalGameState.secondsUntilNextCrisis--;
        updateNextCrisisCountdown();

        if (survivalGameState.secondsUntilNextCrisis <= 0) {
          const nextIdx = survivalGameState.crisisQueue[survivalGameState.crisisQueueIdx];
          triggerEmergencyEvent(nextIdx);
        }
      }
    }

    // Ambient system status logs every 45 seconds
    if (!survivalGameState.isEmergencyActive && survivalGameState.secondsLeft % 45 === 0) {
      const ambientLogs = [
        "GPS navigation signal lock: 100%. All satellites nominal.",
        "Solar array angle auto-adjusted for maximum power output.",
        "CO₂ scrubber cycle: Operating within safe parameters.",
        "Station docking ring sensors: All systems nominal.",
        "Thermal control loop: Stable at 22.4°C cabin temperature.",
        "Attitude control gyroscopes: All 4 CMGs operating nominally."
      ];
      addSurvivalLog(ambientLogs[Math.floor(Math.random() * ambientLogs.length)], "info");
    }
  }, 1000);
}

function renderSurvivalUI() {
  const container = document.getElementById("ast-five-min-container");
  if (!container) return;

  container.innerHTML = `
    <div class="survival-play-panel fade-in" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px;">
      <!-- Left Column: Logs and Choices -->
      <div class="survival-left-col" style="display: flex; flex-direction: column; gap: 20px;">
        <!-- Active Status Board -->
        <div class="survival-status-board glass-card" style="padding: 20px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-meta); font-weight: 700; display: block; margin-bottom: 4px;">Flight Timer</span>
            <span id="survival-time-val" style="font-size: 2.2rem; font-weight: 800; font-family: monospace; letter-spacing: 2px; color: var(--accent-blue);">05:00</span>
          </div>
          <div id="survival-mode-badge" class="mode-badge stable-mode" style="padding: 8px 16px; border-radius: 20px; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">
            Orbit Stable
          </div>
        </div>

        <!-- Center Interactive Console -->
        <div id="survival-action-panel" class="glass-card" style="padding: 28px; min-height: 380px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; position: relative; overflow: hidden;">
          <div class="stable-flight-state" style="display: flex; flex-direction: column; align-items: center; width: 100%;">
            <div class="orbit-scanner" style="position: relative; width: 80px; height: 80px; margin: 0 auto 20px auto; border-radius: 50%; border: 2px solid var(--accent-green); display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 2.5rem; display: block; animation: pulseGlow 1.5s infinite alternate;">📡</span>
            </div>
            <h4 style="font-size: 1.15rem; margin-bottom: 6px; font-family: var(--font-heading);">Orbit Coordinates Locked</h4>
            <p style="color: var(--text-muted); font-size: 0.85rem; max-width: 340px; line-height: 1.5; margin-bottom: 20px;">Spacecraft in stable orbit at 405 km altitude. First crisis event approaching — stay alert.</p>
            <div style="width: 100%; max-width: 300px;">
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">
                <span style="color: var(--text-meta);">⚡ Next Crisis Event</span>
                <span id="next-crisis-countdown-val" style="color: #f43f5e; font-family: monospace; font-weight: 800;">30s</span>
              </div>
              <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;">
                <div id="next-crisis-countdown-bar" style="width: 100%; height: 100%; background: var(--accent-green); transition: width 1s linear; border-radius: 3px;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Telemetry Dashboard & Logs -->
      <div class="survival-right-col" style="display: flex; flex-direction: column; gap: 20px;">
        <!-- Telemetries Card -->
        <div class="survival-telemetries-card glass-card" style="padding: 20px;">
          <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; border-bottom: 1px solid var(--glass-border); padding-bottom: 8px; font-family: var(--font-heading); font-weight: 700;">Telemetry Dashboard</h4>
          
          <div style="display: flex; flex-direction: column; gap: 14px;">
            <!-- Oxygen meter -->
            <div class="telemetry-bar-row">
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px; font-weight: 600;">
                <span>🍀 Life Support (Oxygen)</span>
                <span id="surv-val-oxygen" style="color: var(--accent-green);">100%</span>
              </div>
              <div class="telemetry-progress-bar" style="width: 100%; height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden;">
                <div id="surv-bar-oxygen" class="telemetry-progress-fill" style="width: 100%; height: 100%; background: var(--accent-green); transition: width 0.5s ease;"></div>
              </div>
            </div>

            <!-- Cabin Pressure -->
            <div class="telemetry-bar-row">
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px; font-weight: 600;">
                <span>💨 Cabin Pressure</span>
                <span id="surv-val-pressure" style="color: var(--accent-blue);">101.3 kPa</span>
              </div>
              <div class="telemetry-progress-bar" style="width: 100%; height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden;">
                <div id="surv-bar-pressure" class="telemetry-progress-fill" style="width: 100%; height: 100%; background: var(--accent-blue); transition: width 0.5s ease;"></div>
              </div>
            </div>

            <!-- Hull Integrity -->
            <div class="telemetry-bar-row">
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px; font-weight: 600;">
                <span>🛡️ Hull Integrity</span>
                <span id="surv-val-hull" style="color: var(--accent-green);">100%</span>
              </div>
              <div class="telemetry-progress-bar" style="width: 100%; height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden;">
                <div id="surv-bar-hull" class="telemetry-progress-fill" style="width: 100%; height: 100%; background: var(--accent-green); transition: width 0.5s ease;"></div>
              </div>
            </div>

            <!-- Orbital Velocity -->
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; font-weight: 600; background: rgba(0,0,0,0.15); padding: 8px 12px; border-radius: 6px; border: 1px solid var(--glass-border);">
              <span>🛸 Orbital Velocity</span>
              <span id="surv-val-speed" style="color: var(--accent-purple); font-family: monospace;">7.66 km/s</span>
            </div>
          </div>
        </div>

        <!-- Scrolling System Logs -->
        <div class="survival-logs-card glass-card" style="padding: 20px; flex: 1; min-height: 200px; display: flex; flex-direction: column;">
          <h4 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px; border-bottom: 1px solid var(--glass-border); padding-bottom: 6px; font-family: var(--font-heading); font-weight: 700;">Telemetry System Log</h4>
          <div id="survival-log-box" style="flex: 1; overflow-y: auto; font-family: monospace; font-size: 0.75rem; line-height: 1.4; max-height: 160px; display: flex; flex-direction: column; gap: 4px; padding-right: 4px;">
            <!-- Dynamic Logs -->
          </div>
        </div>
      </div>
    </div>
  `;
}

function addSurvivalLog(message, type = "info") {
  const logBox = document.getElementById("survival-log-box");
  if (!logBox) return;

  const line = document.createElement("div");
  line.className = `log-line log-${type}`;
  line.style.padding = "2px 0";
  
  let typeColor = "var(--text-main)";
  if (type === "success") typeColor = "var(--accent-green)";
  else if (type === "warning") typeColor = "var(--accent-yellow)";
  else if (type === "error") typeColor = "#f43f5e";

  const time = formatTime(survivalGameState.secondsLeft);
  line.innerHTML = `<span style="color: var(--text-meta); margin-right: 6px;">[${time}]</span><span style="color: ${typeColor};">${message}</span>`;
  
  logBox.appendChild(line);
  logBox.scrollTop = logBox.scrollHeight;
  
  // Also push to state memory
  survivalGameState.eventLog.push({ time, message, type });
}

function triggerEmergencyEvent(idx) {
  if (survivalGameState.isEmergencyActive) return;

  survivalGameState.isEmergencyActive = true;
  survivalGameState.currentEmergencyIdx = idx;

  const emergency = survivalEmergencies[idx];
  survivalGameState.emergencySecondsLeft = emergency.timer;

  addSurvivalLog(`⚡ CRISIS ALERT: ${emergency.title}`, "warning");
  showToast("⚠ Emergency Alert!", emergency.title, "error");

  const badge = document.getElementById("survival-mode-badge");
  if (badge) {
    badge.textContent = "⚠ CRISIS ACTIVE";
    badge.className = "mode-badge critical-mode";
  }

  const actionPanel = document.getElementById("survival-action-panel");
  if (actionPanel) {
    actionPanel.classList.add("shake-animation");
    setTimeout(() => actionPanel.classList.remove("shake-animation"), 1000);
  }

  renderEmergencyPanel(emergency);

  // Emergency countdown — time runs out = instant death
  survivalGameState.emergencyTimer = setInterval(() => {
    survivalGameState.emergencySecondsLeft--;

    const timerEl = document.getElementById("emergency-time-val");
    if (timerEl) timerEl.textContent = `${survivalGameState.emergencySecondsLeft}s`;

    const fillEl = document.getElementById("emergency-progress-fill");
    if (fillEl) {
      const pct = (survivalGameState.emergencySecondsLeft / emergency.timer) * 100;
      fillEl.style.width = `${pct}%`;
      if (pct < 30) fillEl.style.background = '#ef4444';
      else if (pct < 60) fillEl.style.background = '#eab308';
    }

    if (survivalGameState.emergencySecondsLeft <= 0) {
      clearInterval(survivalGameState.emergencyTimer);
      survivalGameState.emergencyTimer = null;
      triggerSurvivalDeath("Time limit exceeded — no corrective action was taken in time.", emergency.failCause);
    }
  }, 1000);
}

function renderEmergencyPanel(emergency) {
  const actionPanel = document.getElementById("survival-action-panel");
  if (!actionPanel) return;

  actionPanel.innerHTML = `
    <div class="emergency-state fade-in" style="width: 100%; text-align: left;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <h4 style="color: #f43f5e; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 6px; font-family: var(--font-heading);">
          <span class="warning-icon">⚠</span> EMERGENCY: ${emergency.title}
        </h4>
        <span id="emergency-time-val" style="color: #f43f5e; font-family: monospace; font-weight: 800; font-size: 1.1rem; border: 1px solid #f43f5e; padding: 2px 8px; border-radius: 4px; animation: pulseGlow 1s infinite alternate;">
          ${emergency.timer}s
        </span>
      </div>
      
      <p style="color: var(--text-main); font-size: 0.85rem; line-height: 1.5; margin-bottom: 15px; padding: 12px; background: rgba(244, 63, 94, 0.05); border: 1px solid rgba(244, 63, 94, 0.15); border-radius: 6px;">
        ${emergency.desc}
      </p>

      <div class="emergency-progress-bar" style="width: 100%; height: 4px; background: rgba(255,255,255,0.1); margin-bottom: 16px; border-radius: 2px; overflow: hidden;">
        <div id="emergency-progress-fill" style="width: 100%; height: 100%; background: #f43f5e; transition: width 0.1s linear;"></div>
      </div>

      <div class="survival-options-list" style="display: flex; flex-direction: column; gap: 8px;">
        ${emergency.options.map((opt, optIdx) => `
          <button class="survival-option-btn glass-card" data-opt-idx="${optIdx}" style="width: 100%; text-align: left; padding: 10px 14px; font-size: 0.8rem; cursor: pointer; color: var(--text-main); font-weight: 500; display: flex; gap: 10px; align-items: center; background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); border-radius: var(--border-radius-sm); transition: var(--transition-fast);">
            <span style="background: rgba(255,255,255,0.1); width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.75rem; flex-shrink: 0; color: white;">
              ${String.fromCharCode(65 + optIdx)}
            </span>
            <span>${opt.text}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  // Bind option clicks
  actionPanel.querySelectorAll(".survival-option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.dataset.optIdx);
      handleSurvivalChoice(idx);
    });
  });
}

function handleSurvivalChoice(choiceIdx) {
  if (!survivalGameState.isEmergencyActive) return;

  if (survivalGameState.emergencyTimer) {
    clearInterval(survivalGameState.emergencyTimer);
    survivalGameState.emergencyTimer = null;
  }

  const emergency = survivalEmergencies[survivalGameState.currentEmergencyIdx];
  const choice = emergency.options[choiceIdx];

  if (choice.correct) {
    // ✅ Correct — stabilize and queue next crisis in 30 seconds
    survivalGameState.isEmergencyActive = false;
    survivalGameState.crisisQueueIdx++;
    survivalGameState.crisesSolved++;
    survivalGameState.secondsUntilNextCrisis = 30;

    updateLiveDashboardMeters();
    addSurvivalLog(`✓ RESOLVED: ${choice.feedback}`, "success");

    const allCrisesDone = survivalGameState.crisisQueueIdx >= survivalGameState.crisisQueue.length;
    showToast("Crisis Averted!", allCrisesDone ? "All anomalies neutralized! Coasting to mission end." : "Telemetry stabilizing. Next crisis event in 30 seconds.", "success");

    const badge = document.getElementById("survival-mode-badge");
    if (badge) {
      badge.textContent = "Orbit Stable";
      badge.className = "mode-badge stable-mode";
    }

    const actionPanel = document.getElementById("survival-action-panel");
    if (actionPanel) {
      actionPanel.innerHTML = `
        <div class="stable-flight-state fade-in" style="display: flex; flex-direction: column; align-items: center; width: 100%; text-align: center;">
          <div class="orbit-scanner" style="position: relative; width: 80px; height: 80px; margin: 0 auto 20px auto; border-radius: 50%; border: 2px solid var(--accent-green); display: flex; align-items: center; justify-content: center;">
            <span style="font-size: 2.5rem; display: block; animation: pulseGlow 1.5s infinite alternate;">📡</span>
          </div>
          <h4 style="font-size: 1.15rem; margin-bottom: 6px; font-family: var(--font-heading);">Orbit Coordinates Locked</h4>
          <p style="color: var(--text-muted); font-size: 0.85rem; max-width: 340px; line-height: 1.5; margin-bottom: 20px;">
            ${allCrisesDone ? 'All anomalies neutralized. Coasting to mission completion.' : 'Spacecraft stable. Next crisis event incoming in 30 seconds...'}
          </p>
          ${!allCrisesDone ? `
          <div style="width: 100%; max-width: 300px;">
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 700; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.05em;">
              <span style="color: var(--text-meta);">⚡ Next Crisis Event</span>
              <span id="next-crisis-countdown-val" style="color: #f43f5e; font-family: monospace; font-weight: 800;">30s</span>
            </div>
            <div style="width: 100%; height: 5px; background: rgba(255,255,255,0.08); border-radius: 3px; overflow: hidden;">
              <div id="next-crisis-countdown-bar" style="width: 100%; height: 100%; background: var(--accent-green); transition: width 1s linear; border-radius: 3px;"></div>
            </div>
          </div>
          ` : ''}
        </div>
      `;
    }

    if (allCrisesDone) {
      addSurvivalLog("All orbital anomalies neutralized. Maintaining stable orbit to mission completion.", "success");
    }
  } else {
    // ❌ Wrong answer → IMMEDIATE mission failure, no second chances
    survivalGameState.oxygen = 0;
    survivalGameState.pressure = 0;
    survivalGameState.hull = 0;
    updateLiveDashboardMeters();
    triggerSurvivalDeath(choice.feedback, emergency.failCause);
  }
}

function updateLiveDashboardMeters() {
  const o2Val = document.getElementById("surv-val-oxygen");
  const o2Bar = document.getElementById("surv-bar-oxygen");
  const prVal = document.getElementById("surv-val-pressure");
  const prBar = document.getElementById("surv-bar-pressure");
  const hlVal = document.getElementById("surv-val-hull");
  const hlBar = document.getElementById("surv-bar-hull");

  if (o2Val) {
    o2Val.textContent = `${survivalGameState.oxygen}%`;
    o2Bar.style.width = `${survivalGameState.oxygen}%`;
    if (survivalGameState.oxygen < 30) {
      o2Val.style.color = "#f43f5e";
      o2Bar.style.background = "#f43f5e";
    } else {
      o2Val.style.color = "var(--accent-green)";
      o2Bar.style.background = "var(--accent-green)";
    }
  }

  if (prVal) {
    prVal.textContent = `${survivalGameState.pressure} kPa`;
    const pressPct = (survivalGameState.pressure / 101.3) * 100;
    prBar.style.width = `${pressPct}%`;
    if (survivalGameState.pressure < 80) {
      prVal.style.color = "#f43f5e";
      prBar.style.background = "#f43f5e";
    } else {
      prVal.style.color = "var(--accent-blue)";
      prBar.style.background = "var(--accent-blue)";
    }
  }

  if (hlVal) {
    hlVal.textContent = `${survivalGameState.hull}%`;
    hlBar.style.width = `${survivalGameState.hull}%`;
    if (survivalGameState.hull < 30) {
      hlVal.style.color = "#f43f5e";
      hlBar.style.background = "#f43f5e";
    } else {
      hlVal.style.color = "var(--accent-green)";
      hlBar.style.background = "var(--accent-green)";
    }
  }
}

function triggerSurvivalDeath(feedback, failCause) {
  stopSurvivalGame();

  const container = document.getElementById("ast-five-min-container");
  if (!container) return;

  const secsSurvived = 300 - survivalGameState.secondsLeft;
  const mins = Math.floor(secsSurvived / 60);
  const secs = secsSurvived % 60;
  const timeSurvivedStr = `${mins}m ${secs}s`;

  // Calculate readiness score based on survival time percentage
  const readinessScore = Math.round((secsSurvived / 300) * 100);

  // Dynamically pull focusAdvice from the emergency that caused the death
  const currentEmergency = survivalEmergencies[survivalGameState.currentEmergencyIdx];
  const focusAdvice = currentEmergency ? currentEmergency.focusAdvice : "Focus on rapid emergency protocol execution. Practice each crisis response scenario until your decisions become instinctive under pressure.";

  container.innerHTML = `
    <div class="survival-death-panel glass-card fade-in" style="padding: 40px 30px; text-align: center; border: 2px solid #f43f5e; box-shadow: 0 0 25px rgba(244,63,94,0.15);">
      <span style="font-size: 3.5rem; display: block; filter: drop-shadow(0 0 10px #f43f5e);">💀</span>
      <h3 style="font-size: 1.8rem; font-weight: 800; color: #f43f5e; margin: 15px 0 8px 0; font-family: var(--font-heading);">CREW INCAPACITATED</h3>
      <p style="color: var(--text-meta); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 20px;">Mission Failure: Deceased</p>
      
      <div class="survival-death-reason" style="margin: 20px auto; padding: 16px; border-radius: var(--border-radius-sm); background: rgba(244, 63, 94, 0.05); border: 1px solid rgba(244, 63, 94, 0.15); max-width: 600px; text-align: left; font-size: 0.85rem; line-height: 1.5;">
        <strong style="color: #f43f5e; display: block; margin-bottom: 4px;">Telemetry Event:</strong>
        <span style="color: var(--text-main); font-style: italic;">"${feedback}"</span>
        <hr style="border: 0; border-top: 1px solid rgba(244,63,94,0.15); margin: 10px 0;">
        <strong style="color: var(--text-muted); display: block; margin-bottom: 2px;">Incident Cause:</strong>
        <span style="color: var(--text-muted);">${failCause}</span>
      </div>

      <div style="display: inline-flex; gap: 30px; margin: 15px 0 25px 0; background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 15px 30px; border-radius: var(--border-radius-sm);">
        <div>
          <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-meta); font-weight: 700; display: block; margin-bottom: 2px;">Time Survived</span>
          <span style="font-size: 1.6rem; font-weight: 800; color: white;">${timeSurvivedStr}</span>
        </div>
        <div style="border-left: 1px solid var(--glass-border); padding-left: 30px;">
          <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-meta); font-weight: 700; display: block; margin-bottom: 2px;">Readiness Score</span>
          <span style="font-size: 1.6rem; font-weight: 800; color: #f43f5e;">${readinessScore}%</span>
        </div>
      </div>

      <div class="feedback-grid" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; text-align: left; margin-bottom: 30px;">
        <div class="feedback-card glass-card" style="padding: 20px; background: rgba(255,255,255,0.01);">
          <h4 style="font-size: 0.95rem; margin-bottom: 12px; border-bottom: 1px solid var(--glass-border); padding-bottom: 6px; color: var(--accent-blue); font-family: var(--font-heading); font-weight: 700;">💡 Training Focus Advice</h4>
          <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-muted);">${focusAdvice}</p>
        </div>

        <div class="strengths-card glass-card" style="padding: 20px; background: rgba(255,255,255,0.01);">
          <h4 style="font-size: 0.95rem; margin-bottom: 12px; border-bottom: 1px solid var(--glass-border); padding-bottom: 6px; color: var(--accent-pink); font-family: var(--font-heading); font-weight: 700;">🎯 Required Skills Profile</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.8rem; color: var(--text-muted);">
            ${currentEmergency && currentEmergency.skills ? currentEmergency.skills.map(s => `<li style="display: flex; gap: 6px;"><span style="color: var(--accent-pink);">✦</span> <strong>${s}</strong></li>`).join('') : '<li style="display: flex; gap: 6px;"><span style="color: var(--accent-pink);">✦</span> <strong>Emergency Crisis Response</strong></li><li style="display: flex; gap: 6px;"><span style="color: var(--accent-pink);">✦</span> <strong>Orbital Mechanics</strong></li>'}
          </ul>
        </div>
      </div>

      <div class="results-actions" style="display: flex; gap: 15px; justify-content: center;">
        <button class="btn btn-secondary" id="btn-restart-survival" style="padding: 10px 24px;">Restart Survival Shift</button>
        <button class="btn btn-primary btn-glow" id="btn-exit-survival" style="padding: 10px 24px;">Exit Simulation</button>
      </div>
    </div>
  `;

  document.getElementById("btn-restart-survival").addEventListener("click", () => {
    startSurvivalGame();
  });
  document.getElementById("btn-exit-survival").addEventListener("click", () => {
    initFiveMinSimulator();
  });
}

function triggerSurvivalSuccess() {
  stopSurvivalGame();

  const container = document.getElementById("ast-five-min-container");
  if (!container) return;

  container.innerHTML = `
    <div class="survival-success-panel glass-card fade-in" style="padding: 40px 30px; text-align: center; border: 2px solid var(--accent-green); box-shadow: 0 0 25px rgba(52,211,153,0.15);">
      <span style="font-size: 3.5rem; display: block; filter: drop-shadow(0 0 10px var(--accent-green));">🏆</span>
      <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--accent-green); margin: 15px 0 8px 0; font-family: var(--font-heading);">ORBITAL SHIFT COMPLETED</h3>
      <p style="color: var(--text-meta); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; font-weight: 700; margin-bottom: 20px;">Status: Survived & Space Flight Ready</p>
      
      <div class="survival-death-reason" style="margin: 20px auto; padding: 16px; border-radius: var(--border-radius-sm); background: rgba(52, 211, 153, 0.05); border: 1px solid rgba(52, 211, 153, 0.15); max-width: 600px; text-align: left; font-size: 0.85rem; line-height: 1.5;">
        <strong style="color: var(--accent-green); display: block; margin-bottom: 4px;">Mission Evaluation:</strong>
        <span style="color: var(--text-main);">"Outstanding performance! You successfully resolved all 5 orbital crisis scenarios during your flight deck command shift. Telemetries remained within nominal bounds. You survived the 5-minute training run."</span>
      </div>

      <div style="display: inline-flex; gap: 30px; margin: 15px 0 25px 0; background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); padding: 15px 30px; border-radius: var(--border-radius-sm);">
        <div>
          <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-meta); font-weight: 700; display: block; margin-bottom: 2px;">Time Survived</span>
          <span style="font-size: 1.6rem; font-weight: 800; color: white;">05:00</span>
        </div>
        <div style="border-left: 1px solid var(--glass-border); padding-left: 30px;">
          <span style="font-size: 0.7rem; text-transform: uppercase; color: var(--text-meta); font-weight: 700; display: block; margin-bottom: 2px;">Readiness Score</span>
          <span style="font-size: 1.6rem; font-weight: 800; color: var(--accent-green);">100%</span>
        </div>
      </div>

      <div class="feedback-grid" style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; text-align: left; margin-bottom: 30px;">
        <div class="feedback-card glass-card" style="padding: 20px; background: rgba(255,255,255,0.01);">
          <h4 style="font-size: 0.95rem; margin-bottom: 12px; border-bottom: 1px solid var(--glass-border); padding-bottom: 6px; color: var(--accent-blue); font-family: var(--font-heading); font-weight: 700;">💡 Next Steps Focus</h4>
          <p style="font-size: 0.85rem; line-height: 1.5; color: var(--text-muted);">Continue polishing your manual vector telemetry skills and keep tracking space radiation updates. Excellent focus and quick response margins. You are ready to explore further payload specialist simulations.</p>
        </div>

        <div class="strengths-card glass-card" style="padding: 20px; background: rgba(255,255,255,0.01);">
          <h4 style="font-size: 0.95rem; margin-bottom: 12px; border-bottom: 1px solid var(--glass-border); padding-bottom: 6px; color: var(--accent-pink); font-family: var(--font-heading); font-weight: 700;">🎯 Core Proficiencies Demonstrated</h4>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px; font-size: 0.8rem; color: var(--text-muted);">
            <li style="display: flex; gap: 6px;"><span style="color: var(--accent-green);">✓</span> <strong>RCS Trajectory Alignment</strong></li>
            <li style="display: flex; gap: 6px;"><span style="color: var(--accent-green);">✓</span> <strong>Bulkhead Isolation Containment</strong></li>
            <li style="display: flex; gap: 6px;"><span style="color: var(--accent-green);">✓</span> <strong>Space Radiation Navigation</strong></li>
            <li style="display: flex; gap: 6px;"><span style="color: var(--accent-green);">✓</span> <strong>Dynamic Decoupling vectors</strong></li>
          </ul>
        </div>
      </div>

      <div class="results-actions" style="display: flex; gap: 15px; justify-content: center;">
        <button class="btn btn-secondary" id="btn-restart-survival" style="padding: 10px 24px;">Restart Survival Shift</button>
        <button class="btn btn-primary btn-glow" id="btn-exit-survival" style="padding: 10px 24px;">Exit Simulation</button>
      </div>
    </div>
  `;

  document.getElementById("btn-restart-survival").addEventListener("click", () => {
    startSurvivalGame();
  });
  document.getElementById("btn-exit-survival").addEventListener("click", () => {
    initFiveMinSimulator();
  });
}
