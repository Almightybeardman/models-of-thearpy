(function () {
  "use strict";

  var resources = [
    {
      title: "Bowen Center: Eight Concepts",
      url: "https://www.thebowencenter.org/introduction-eight-concepts",
      note: "Bowen theory concepts and family diagram orientation"
    },
    {
      title: "ICEEFT: Fundamentals of EFT",
      url: "https://iceeft.com/fundamentals-of-emotionally-focused-therapy/",
      note: "Attachment, EFT Tango, EFCT, EFIT, and EFFT frame"
    },
    {
      title: "AMFTRB Exam Domains",
      url: "https://amftrb.org/exam-info/",
      note: "LMFT exam domains and systemic practice emphasis"
    },
    {
      title: "AAMFT Code of Ethics",
      url: "https://www.aamft.org/AAMFT/Legal_Ethics/code_of_ethics.aspx",
      note: "Ethics anchors for informed consent, competence, records, and boundaries"
    }
  ];

  var studySections = [
    {
      id: "bowen-core",
      model: "Bowen",
      title: "Bowen Family Systems Therapy",
      overview: "Bowen views the family as an emotional unit. Symptoms are understood through anxiety, reactivity, triangles, differentiation, and multigenerational patterns rather than only through one identified patient.",
      therapistRole: "The therapist acts like a calm coach and researcher. The role is to lower reactivity, ask process questions, map patterns, and help clients think more clearly about their own part in the system.",
      goals: ["Increase differentiation of self", "Reduce fusion and emotional reactivity", "Detriangle from conflict", "Understand multigenerational patterns"],
      interventions: ["Genogram or family diagram", "Process questions", "I-position practice", "Detriangling", "Coaching contact with family of origin"],
      keyTerms: [
        { term: "Differentiation of self", definition: "The ability to stay emotionally connected while thinking and acting from a clear self." },
        { term: "Triangle", definition: "A three-person relationship pattern used to manage tension between two people." },
        { term: "Family projection process", definition: "Parents transmit anxiety and functioning patterns to a child." },
        { term: "Emotional cutoff", definition: "Managing unresolved attachment by distance, silence, or avoidance." },
        { term: "Multigenerational transmission", definition: "Relationship patterns and levels of differentiation are shaped across generations." }
      ],
      examWatch: "If the question asks for coaching, process questions, genograms, detriangling, or differentiation, Bowen is usually the strongest fit."
    },
    {
      id: "eft-core",
      model: "EFT",
      title: "Emotionally Focused Therapy",
      overview: "EFT is experiential, systemic, and attachment-based. Relationship distress is seen as a negative cycle that protects against attachment fear while blocking safety, responsiveness, and emotional engagement.",
      therapistRole: "The therapist is active, attuned, and process-focused. The role is to track the cycle, validate protective strategies, access primary emotion, and choreograph new bonding interactions.",
      goals: ["De-escalate negative cycles", "Access primary emotion and attachment needs", "Create new responsive interactions", "Consolidate new positions and solutions"],
      interventions: ["Reflect and validate emotion", "Evocative questions", "Reframe conflict as cycle and attachment protest", "Enactments", "EFT Tango moves"],
      keyTerms: [
        { term: "Negative cycle", definition: "The recurring interaction pattern that maintains distress." },
        { term: "Primary emotion", definition: "Vulnerable emotion under reactive anger, withdrawal, or blame." },
        { term: "Attachment longing", definition: "Need for safety, closeness, reassurance, acceptance, or responsiveness." },
        { term: "Enactment", definition: "A guided in-session exchange that creates new emotional experience." },
        { term: "Consolidation", definition: "Stabilizing new interactions and applying them to practical problems." }
      ],
      examWatch: "If the question centers on attachment fear, pursue-withdraw cycles, emotional accessibility, or enactments, EFT is likely being tested."
    },
    {
      id: "lmft-systemic-role",
      model: "Systemic Roles",
      title: "LMFT Systemic Therapist Role",
      overview: "LMFT practice focuses on the client system: individuals, couples, families, groups, and relevant contexts. Problems are assessed relationally, developmentally, culturally, ethically, and legally.",
      therapistRole: "The therapist maintains a systemic lens, balances alliance across members, forms and revises hypotheses, designs treatment, evaluates progress, and manages crisis or mandated duties.",
      goals: ["Track interactional patterns", "Build balanced alliance", "Create systemic hypotheses", "Match interventions to goals and risk", "Evaluate progress and termination readiness"],
      interventions: ["Circular questions", "Relational assessment", "Treatment contracts", "Feedback-informed adjustments", "Safety planning and mandated reporting when required"],
      keyTerms: [
        { term: "Client system", definition: "The people and relationships relevant to treatment." },
        { term: "Joining", definition: "Building alliance while respecting structure, culture, and each member's experience." },
        { term: "Hypothesizing", definition: "A tentative systemic explanation that guides assessment and treatment." },
        { term: "Feedback loop", definition: "Ongoing information used to revise treatment." },
        { term: "Scope of competence", definition: "Practicing within training, supervision, law, and ethical standards." }
      ],
      examWatch: "LMFT exam questions often reward systemic thinking, risk assessment, consent, documentation, culture, and legally required actions."
    },
    {
      id: "bowen-vs-eft",
      model: "Comparison",
      title: "Bowen vs EFT",
      overview: "Both models are systemic, but they organize treatment differently. Bowen emphasizes thinking, differentiation, and intergenerational patterns. EFT emphasizes emotion, attachment, and corrective bonding events.",
      therapistRole: "Bowen therapists stay neutral and coach observation of process. EFT therapists are more emotionally evocative and structure new interactions in session.",
      goals: ["Choose the model from the question's language", "Avoid mixing interventions that do not fit the model", "Name therapist role accurately"],
      interventions: ["Bowen: genogram, process questions, detriangling", "EFT: enactment, validation, emotional deepening, attachment reframe"],
      keyTerms: [
        { term: "Bowen clue", definition: "Differentiation, triangles, emotional cutoff, sibling position, family projection." },
        { term: "EFT clue", definition: "Attachment injury, pursue-withdraw, primary emotion, responsiveness, enactment." },
        { term: "Common trap", definition: "Choosing insight or advice when the better answer is systemic process or emotional experience." }
      ],
      examWatch: "When answers all sound helpful, pick the one that best matches the named model's theory of change."
    },
    {
      id: "ethics-crisis",
      model: "Ethics",
      title: "Ethics, Risk, and Professional Judgment",
      overview: "Ethical LMFT practice includes informed consent, confidentiality limits, balanced care for the client system, competence, documentation, consultation, and mandated legal duties.",
      therapistRole: "The therapist clearly explains limits, assesses risk directly, documents decisions, seeks consultation when needed, and takes legally required steps when safety or mandated reporting is involved.",
      goals: ["Protect clients and the public", "Practice within competence", "Document clinical reasoning", "Respect client autonomy", "Manage crisis and mandated duties"],
      interventions: ["Informed consent review", "Risk assessment", "Safety planning", "Consultation and supervision", "Mandated reports when legally required"],
      keyTerms: [
        { term: "Informed consent", definition: "Clear agreement about services, risks, fees, confidentiality, and limits." },
        { term: "Mandated reporting", definition: "Legally required reporting for specified safety concerns." },
        { term: "Duty to protect", definition: "Jurisdiction-specific steps when credible serious threats emerge." },
        { term: "Multiple relationships", definition: "Roles that may impair judgment or increase exploitation risk." },
        { term: "Competence", definition: "Training, consultation, or supervision adequate for the service provided." }
      ],
      examWatch: "When risk or law appears in a question, assess safety and follow mandated duties before using a model-specific intervention."
    },
    {
      id: "bowen-eight-concepts",
      model: "Bowen",
      title: "Bowen Eight Concepts Drill",
      overview: "Bowen questions often test whether you can recognize the eight interlocking concepts in ordinary family language. Do not just memorize terms; connect each term to how anxiety moves through the system.",
      therapistRole: "The therapist keeps a calm, observational stance and helps clients study their own family process instead of reacting automatically.",
      goals: ["Recognize triangles and fusion", "Differentiate cutoff from mature distance", "Connect symptoms to family projection and nuclear family process", "Notice sibling position and societal anxiety as context"],
      interventions: ["Family diagram review", "Process questions about sequence", "Coaching an I-position", "Observation of reactivity", "Detriangling practice"],
      keyTerms: [
        { term: "Nuclear family emotional process", definition: "Patterns of marital conflict, dysfunction in one spouse, impairment in a child, or emotional distance." },
        { term: "Family projection process", definition: "Parental anxiety focuses on a child and shapes the child's functioning." },
        { term: "Sibling position", definition: "Birth-order patterns can shape expectations and roles, but they are clues rather than fixed rules." },
        { term: "Societal emotional process", definition: "Broader social anxiety can intensify family reactivity." },
        { term: "Detriangling", definition: "Staying connected without being pulled into taking over or taking sides." }
      ],
      examWatch: "Bowen exam answers usually avoid blame, advice-giving, and emotional intensity; they favor observation, coaching, and differentiation."
    },
    {
      id: "bowen-genogram",
      model: "Bowen",
      title: "Genogram and Family Diagram Use",
      overview: "A genogram is not just a family tree. In Bowen-informed work it organizes facts across generations so patterns of functioning, cutoff, anxiety, illness, conflict, sibling roles, and triangles become visible.",
      therapistRole: "The therapist asks calm, factual questions and invites the client to become curious about repeated family process.",
      goals: ["Map three-generation patterns", "Identify repeating roles", "Separate facts from emotional assumptions", "Find points for less reactive contact"],
      interventions: ["Three-generation family diagram", "Questions about who contacts whom", "Tracking illness, symptoms, divorce, cutoff, migration, and loss", "Coaching contact experiments"],
      keyTerms: [
        { term: "Fact base", definition: "Dates, events, relationship contact, symptoms, and functioning used to study process." },
        { term: "Family-of-origin work", definition: "Studying one's original family system to increase self-observation and differentiation." },
        { term: "Contact experiment", definition: "A planned effort to relate differently without rescuing, blaming, or cutting off." },
        { term: "Overfunctioning", definition: "Taking excessive responsibility for another person's functioning." },
        { term: "Underfunctioning", definition: "Leaning on others to manage decisions, distress, or responsibilities." }
      ],
      examWatch: "If the stem mentions three generations, cutoffs, repeated symptoms, or family roles, a genogram or family diagram is often the best Bowen-consistent tool."
    },
    {
      id: "eft-stages-steps",
      model: "EFT",
      title: "EFT Stages and Change Events",
      overview: "EFT organizes treatment around de-escalating the negative cycle, restructuring interactions, and consolidating new patterns. The therapist tracks process and creates new emotional experiences in session.",
      therapistRole: "The therapist is active, attuned, evocative, and careful with pacing. The therapist validates protection while shaping access to primary emotion and attachment needs.",
      goals: ["De-escalate the cycle", "Access primary emotion", "Create new bonding interactions", "Consolidate new solutions"],
      interventions: ["Cycle tracking", "Attachment reframe", "Evocative responding", "Heightening", "Enactments", "Processing new interactions"],
      keyTerms: [
        { term: "Stage 1", definition: "Assessment and de-escalation of the negative cycle." },
        { term: "Stage 2", definition: "Restructuring interactions through deeper emotional engagement and responsiveness." },
        { term: "Stage 3", definition: "Consolidating gains and solving old problems from new positions." },
        { term: "Withdrawer re-engagement", definition: "A change event where the withdrawn partner risks accessible engagement." },
        { term: "Pursuer softening", definition: "A change event where the pursuing partner risks vulnerable attachment needs instead of criticism." }
      ],
      examWatch: "EFT answers usually name the cycle, validate both partners, access softer emotion, and use enactments when safety and pacing allow."
    },
    {
      id: "eft-tango",
      model: "EFT",
      title: "EFT Tango and Micro Skills",
      overview: "The EFT Tango is a repeatable map for working with emotion and interaction: reflect the process, assemble emotion, choreograph an encounter, process the encounter, and integrate the new meaning.",
      therapistRole: "The therapist slows the room down and uses attunement, reflection, validation, evocative questions, and focused enactments.",
      goals: ["Organize emotion", "Make attachment meanings explicit", "Create safe contact", "Strengthen new positions"],
      interventions: ["Reflecting", "Validating", "Evocative questions", "RISSSC-style softening and slowing", "Enactments", "Processing the enactment"],
      keyTerms: [
        { term: "Move 1", definition: "Reflect the present process and cycle." },
        { term: "Move 2", definition: "Assemble emotion: trigger, body, meaning, action tendency, and need." },
        { term: "Move 3", definition: "Choreograph an encounter or enactment." },
        { term: "Move 4", definition: "Process what happened in the encounter." },
        { term: "Move 5", definition: "Integrate and summarize new positions or meanings." }
      ],
      examWatch: "When a client has just accessed vulnerable emotion, the next EFT move is often to shape a safe direct message, not to move into problem-solving too fast."
    },
    {
      id: "lmft-exam-domains",
      model: "Systemic Roles",
      title: "LMFT Exam Domains Map",
      overview: "LMFT exam items often ask for the best next step across systemic practice, assessment, treatment, evaluation, crisis, and ethics. The right answer usually balances model fit with risk, law, culture, and client-system context.",
      therapistRole: "The therapist forms and revises systemic hypotheses while maintaining ethical, legal, and professional standards.",
      goals: ["Use systemic theory", "Assess and diagnose carefully", "Design treatment", "Evaluate progress", "Manage crisis", "Maintain ethics"],
      interventions: ["Relational assessment", "Treatment planning", "Feedback-informed adjustment", "Safety planning", "Consultation", "Documentation"],
      keyTerms: [
        { term: "Practice of systemic therapy", definition: "Using relational theory and alliance with the client system." },
        { term: "Assessing and hypothesizing", definition: "Gathering data and forming tentative systemic explanations." },
        { term: "Designing treatment", definition: "Choosing interventions that fit goals, risk, and client context." },
        { term: "Evaluating process", definition: "Monitoring progress, revising plans, and preparing termination." },
        { term: "Ethical standards", definition: "Law, consent, competence, confidentiality, records, and professionalism." }
      ],
      examWatch: "If an answer jumps to technique before assessment, safety, consent, or alliance, be suspicious."
    },
    {
      id: "assessment-hypothesizing",
      model: "Systemic Roles",
      title: "Assessment and Systemic Hypotheses",
      overview: "A systemic hypothesis is a working idea about how symptoms, relationships, context, development, culture, and interaction patterns fit together. It guides treatment but must stay flexible.",
      therapistRole: "The therapist gathers information from the client system, asks circular questions, considers diagnosis and context, and revises the hypothesis as new data appears.",
      goals: ["Avoid premature certainty", "Assess risk and context", "Track sequences", "Include culture and development", "Revise with feedback"],
      interventions: ["Circular questions", "Sequence mapping", "Relational timeline", "Risk screening", "Collateral coordination with consent", "Diagnostic assessment"],
      keyTerms: [
        { term: "Circular question", definition: "A question that explores differences, sequences, meanings, and relationships." },
        { term: "Linear hypothesis", definition: "A one-way explanation that may miss relational feedback loops." },
        { term: "Systemic hypothesis", definition: "A tentative relational explanation that remains open to revision." },
        { term: "Contextual assessment", definition: "Including culture, power, identity, resources, stressors, and development." },
        { term: "Client system", definition: "The person or people directly and indirectly involved in treatment." }
      ],
      examWatch: "The best answer often says assess, hypothesize, consult, or gather more systemic data before intervening."
    },
    {
      id: "treatment-planning",
      model: "Systemic Roles",
      title: "Treatment Planning and Termination",
      overview: "Treatment planning turns assessment into goals, roles, interventions, and evaluation. Termination is part of treatment, not an afterthought.",
      therapistRole: "The therapist collaborates with the client system, documents goals, evaluates progress, revises the plan, and closes or refers when appropriate.",
      goals: ["Define measurable goals", "Match interventions to theory and risk", "Monitor outcomes", "Prevent drift", "Terminate ethically"],
      interventions: ["Treatment contracts", "Progress review", "Relapse-prevention planning", "Step-down sessions", "Referral or transfer planning"],
      keyTerms: [
        { term: "Treatment drift", definition: "Continuing sessions without clear goals, evaluation, or clinical need." },
        { term: "Relapse prevention", definition: "Planning how clients will maintain gains and respond to old patterns." },
        { term: "Step-down", definition: "Reducing session frequency as clients consolidate gains." },
        { term: "Appropriate termination", definition: "Ending with planning, referrals if needed, and documentation." },
        { term: "Feedback-informed care", definition: "Using client feedback and outcomes to revise treatment." }
      ],
      examWatch: "If goals are met or treatment is not helping, the best answer usually evaluates progress and revises, steps down, refers, or terminates with care."
    },
    {
      id: "crisis-risk",
      model: "Ethics",
      title: "Crisis, Risk, and Level of Care",
      overview: "When crisis appears, routine model work pauses. The therapist assesses danger, protective factors, legal duties, documentation, consultation, and appropriate level of care.",
      therapistRole: "The therapist asks direct risk questions, makes a safety plan when appropriate, consults or refers as needed, and documents clinical reasoning.",
      goals: ["Assess imminent risk", "Protect vulnerable people", "Use mandated duties", "Coordinate care", "Document decisions"],
      interventions: ["Suicide risk assessment", "Violence/coercion screening", "Child/elder/dependent adult abuse reporting as required", "Safety planning", "Emergency referral", "Consultation"],
      keyTerms: [
        { term: "Intent, plan, means", definition: "Core elements of suicide or violence risk assessment." },
        { term: "Protective factors", definition: "Supports, values, responsibilities, reasons for living, and barriers to harm." },
        { term: "Level of care", definition: "The intensity of treatment needed for current risk and functioning." },
        { term: "Mandated reporting", definition: "Required reporting under law for specified safety concerns." },
        { term: "Documentation", definition: "Recording assessment, reasoning, actions, consultation, and follow-up." }
      ],
      examWatch: "If safety is in the stem, choose assessment/reporting/level-of-care steps before Bowen, EFT, or communication techniques."
    },
    {
      id: "couples-ethics",
      model: "Ethics",
      title: "Couple and Family Ethics",
      overview: "Couple and family therapy adds special consent, confidentiality, record, alliance, and secrets-policy issues because the client is the relational system, not just one individual.",
      therapistRole: "The therapist sets the frame clearly, balances alliance, avoids secret side alliances, and explains how records and confidentiality work.",
      goals: ["Clarify who the client is", "Explain secrets policy", "Maintain balanced alliance", "Protect confidentiality", "Avoid role conflicts"],
      interventions: ["Informed consent discussion", "Secrets-policy review", "Documentation of contacts", "Role clarification", "Referral when a forensic role is needed"],
      keyTerms: [
        { term: "No-secrets policy", definition: "A couple/family therapy policy about how private disclosures are handled." },
        { term: "Split alliance", definition: "A pattern where the therapist is pulled into one member's side." },
        { term: "Collateral contact", definition: "Contact with someone outside the therapy room that requires consent and documentation." },
        { term: "Forensic role", definition: "Evaluation for legal purposes, different from therapy." },
        { term: "Role conflict", definition: "When therapist duties collide with another requested role." }
      ],
      examWatch: "Secret emails, court letters, custody opinions, and one-sided collateral calls are ethics traps."
    },
    {
      id: "culture-context",
      model: "Systemic Roles",
      title: "Culture, Context, and Power",
      overview: "Systemic therapy includes culture, identity, power, social location, resources, discrimination, immigration, religion/spirituality, gender, sexuality, disability, and socioeconomic context.",
      therapistRole: "The therapist practices cultural humility, asks rather than assumes, and explores meanings while avoiding value imposition.",
      goals: ["Understand client meanings", "Avoid pathologizing difference", "Include power and context", "Build culturally responsive goals", "Maintain balanced alliance"],
      interventions: ["Cultural genogram questions", "Meaning-oriented circular questions", "Power and safety assessment", "Client-defined goal setting", "Consultation when needed"],
      keyTerms: [
        { term: "Cultural humility", definition: "A stance of curiosity, accountability, and openness to client-defined meaning." },
        { term: "Value imposition", definition: "Pushing the therapist's personal values as clinical truth." },
        { term: "Minority stress", definition: "Stress related to stigma, discrimination, and marginalization." },
        { term: "Power differential", definition: "Unequal power inside relationships or between client and therapist." },
        { term: "Contextual fit", definition: "Whether an intervention fits the client's culture, resources, safety, and values." }
      ],
      examWatch: "The exam usually rewards cultural humility plus concrete assessment, not vague statements that culture matters."
    },
    {
      id: "model-comparison-traps",
      model: "Comparison",
      title: "Model Comparison and Exam Traps",
      overview: "Many exam questions are less about knowing a fact and more about matching the intervention to the theory of change. Look for the model language in the stem.",
      therapistRole: "The therapist role changes by model: Bowen coach, EFT emotional process guide, systemic assessor, or ethical risk manager.",
      goals: ["Match intervention to theory", "Avoid model mixing on test items", "Prioritize safety over technique", "Choose process before advice"],
      interventions: ["Bowen: genogram, process questions, detriangling", "EFT: cycle tracking, primary emotion, enactments", "Systemic: circular questions and relational hypotheses", "Ethics: consent, safety, records, consultation"],
      keyTerms: [
        { term: "Bowen clue", definition: "Differentiation, triangles, cutoff, sibling position, family projection, generations." },
        { term: "EFT clue", definition: "Attachment, cycle, primary emotion, enactment, responsiveness, pursuer/withdrawer." },
        { term: "Ethics clue", definition: "Risk, abuse, confidentiality, consent, court, records, competence." },
        { term: "Assessment clue", definition: "Missing information, unclear diagnosis, cultural context, level of care." },
        { term: "Trap answer", definition: "Sounds helpful but skips the core model, safety, consent, or assessment task." }
      ],
      examWatch: "If two answers sound good, choose the one that fits the model named in the question and the immediate risk level."
    },
    {
      id: "quick-study-cheatsheet",
      model: "Comparison",
      title: "Quick Study Cheat Sheet",
      overview: "Use this as a fast review before a quiz. First ask: Is there risk? Is consent clear? What model is named? What is the client system? What is the least blaming next step?",
      therapistRole: "The therapist is responsible for safety, ethics, alliance, assessment, and model-consistent intervention.",
      goals: ["Choose the safest next step", "Think systemically", "Use model language", "Avoid blame", "Document and consult when needed"],
      interventions: ["Risk first", "Consent before secrets/collateral/court letters", "Assessment before intervention", "Feedback before continuing drift", "Referral when outside competence"],
      keyTerms: [
        { term: "First-session priority", definition: "Alliance, consent, assessment, risk, and goals." },
        { term: "Wrong-answer pattern", definition: "Blame, guarantee, secrecy, side-taking, skipping safety, or practicing outside competence." },
        { term: "Best-next-step pattern", definition: "Assess, clarify, consult, document, safety plan, or choose a model-consistent process intervention." },
        { term: "Hard-question pattern", definition: "Combines model knowledge with ethics, crisis, culture, or legal context." },
        { term: "Study move", definition: "For missed items, name what the stem was testing before memorizing the answer." }
      ],
      examWatch: "When unsure, slow down: client system, safety, consent, model, then intervention."
    },
    {
      id: "bowen-triangles-detriangling",
      model: "Bowen",
      title: "Triangles and Detriangling",
      overview: "Triangles are one of the fastest Bowen clues on exam items. Anxiety between two people is stabilized by pulling in a third person, symptom, child, in-law, therapist, or outside issue.",
      therapistRole: "The therapist stays connected without joining sides, naming blame, or becoming the problem solver for the triangle.",
      goals: ["Recognize the three-point pattern", "Lower reactivity without cutoff", "Keep the therapist out of the triangle", "Help each person observe their own part"],
      interventions: ["Process questions about who gets pulled in", "Coaching an I-position", "Slowing side-taking requests", "Mapping triangles on a family diagram"],
      keyTerms: [
        { term: "Triangle", definition: "A three-person pattern that manages tension in a two-person relationship." },
        { term: "Detriangling", definition: "Staying emotionally connected while refusing to take over, rescue, or take sides." },
        { term: "Third point", definition: "The person or issue used to stabilize tension between two others." },
        { term: "Side-taking trap", definition: "A wrong answer that asks the therapist to judge who is right." },
        { term: "Process stance", definition: "Observing the interaction sequence instead of debating content." }
      ],
      examWatch: "If a couple or family asks the therapist to decide who is right, the Bowen answer is usually detriangling and process coaching.",
      microDrill: "What is the exam clue for a Bowen triangle?",
      microAnswer: "Tension between two people gets managed through a third person, child, symptom, issue, or therapist."
    },
    {
      id: "bowen-differentiation-iposition",
      model: "Bowen",
      title: "Differentiation and I-Position",
      overview: "Differentiation is not emotional distance. It is the ability to stay connected to important people while thinking, choosing, and speaking from a clearer self.",
      therapistRole: "The therapist coaches clients to observe reactivity, separate thinking from feeling, and practice calmer self-definition in the relationship system.",
      goals: ["Separate self-definition from blame", "Stay connected under pressure", "Reduce fusion and automatic compliance", "Practice thoughtful contact"],
      interventions: ["I-position rehearsal", "Questions about personal responsibility", "Family-of-origin observation tasks", "Coaching contact without rescuing or attacking"],
      keyTerms: [
        { term: "Differentiation", definition: "Maintaining thoughtful self-direction while remaining emotionally connected." },
        { term: "I-position", definition: "A clear statement of one's own belief, choice, or limit without blaming others." },
        { term: "Fusion", definition: "Difficulty separating one's own thinking and functioning from the emotional system." },
        { term: "Pseudo-self", definition: "Borrowed beliefs or positions held mainly to gain approval or avoid anxiety." },
        { term: "Solid self", definition: "More stable principles and choices that can hold under relationship pressure." }
      ],
      examWatch: "If the answer says calm coaching, self-observation, I-position, or staying connected without fusion, it is probably Bowen.",
      microDrill: "What is the exam clue for differentiation?",
      microAnswer: "The client needs to stay connected while thinking and acting from a clearer self, not cut off or comply automatically."
    },
    {
      id: "eft-cycle-deescalation",
      model: "EFT",
      title: "Cycle De-escalation",
      overview: "Early EFT work focuses on naming the negative cycle as the enemy, validating each partner's protective move, and linking reactivity to softer attachment fears.",
      therapistRole: "The therapist tracks the present interaction, reflects both positions, slows escalation, and reframes blame as protection inside the cycle.",
      goals: ["Externalize the cycle", "Validate both partners", "Access primary emotion", "Create safety before deeper enactments"],
      interventions: ["Cycle tracking", "Attachment reframe", "Evocative questions", "Validation of protective strategies", "Heightening primary emotion"],
      keyTerms: [
        { term: "Pursue-withdraw", definition: "A common cycle where one partner protests disconnection and the other protects by distancing." },
        { term: "Cycle as enemy", definition: "The pattern is framed as the problem, not either partner." },
        { term: "Secondary emotion", definition: "Reactive emotion such as anger, criticism, defensiveness, or shutdown." },
        { term: "Primary emotion", definition: "More vulnerable fear, sadness, shame, longing, or need underneath protection." },
        { term: "Attachment reframe", definition: "Conflict is understood as a protest or protection around attachment security." }
      ],
      examWatch: "In early EFT, choose tracking, validation, and cycle de-escalation before problem-solving or direct advice.",
      microDrill: "What does an EFT therapist usually do first with an escalating couple?",
      microAnswer: "Name and de-escalate the cycle while validating both partners and accessing softer attachment emotions."
    },
    {
      id: "eft-attachment-injuries",
      model: "EFT",
      title: "Attachment Injuries and Repair",
      overview: "An attachment injury is a betrayal, abandonment, or failure of responsiveness during a moment of deep need. EFT repair requires emotional engagement, accountability, and new responsiveness.",
      therapistRole: "The therapist helps the hurt partner organize the injury and longing, then helps the other partner respond with accessible, accountable engagement when safety allows.",
      goals: ["Identify the attachment meaning", "Access hurt and longing", "Support accountable response", "Create new bonding interaction"],
      interventions: ["Slow injury narrative", "Evocative exploration of impact", "Structured enactment", "Processing the response", "Consolidating the repair moment"],
      keyTerms: [
        { term: "Attachment injury", definition: "A relational wound where a partner was unavailable or harmful during a key moment of need." },
        { term: "Accountability", definition: "Owning the injury's impact without defensiveness or minimization." },
        { term: "Responsive engagement", definition: "A direct, emotionally accessible response to the partner's attachment need." },
        { term: "Repair enactment", definition: "A guided exchange that creates a new corrective emotional experience." },
        { term: "Pacing", definition: "Moving only as fast as safety, regulation, and alliance permit." }
      ],
      examWatch: "If the stem names betrayal, abandonment, or failure at a vulnerable moment, EFT repair focuses on injury, emotion, accountability, and responsiveness.",
      microDrill: "What is the EFT clue for an attachment injury?",
      microAnswer: "A partner was hurt by abandonment, betrayal, or nonresponsiveness during a vulnerable moment of need."
    },
    {
      id: "ethics-informed-consent-confidentiality",
      model: "Ethics",
      title: "Informed Consent and Confidentiality Limits",
      overview: "Ethics questions often test whether the therapist clarifies the frame before acting. Consent includes services, risks, fees, records, confidentiality, limits, and who the client is in relational treatment.",
      therapistRole: "The therapist explains limits clearly, checks understanding, documents consent, and revisits the frame when treatment format or participants change.",
      goals: ["Clarify the client system", "Explain confidentiality and limits", "Document consent", "Avoid secret side agreements", "Revisit consent when treatment changes"],
      interventions: ["Informed consent review", "Release-of-information discussion", "Secrets-policy clarification", "Documentation of consent", "Consultation when the frame is unclear"],
      keyTerms: [
        { term: "Informed consent", definition: "Ongoing agreement about the nature, risks, limits, and expectations of services." },
        { term: "Confidentiality limit", definition: "A safety, legal, or ethical exception to ordinary privacy." },
        { term: "Identified client", definition: "Who the therapist is treating, especially important in couple and family work." },
        { term: "Release of information", definition: "Permission to communicate with outside parties." },
        { term: "Frame change", definition: "A shift in participants or purpose that may require renewed consent." }
      ],
      examWatch: "If the question involves secrets, collateral calls, minors, records, or changing from individual to couple therapy, clarify consent first.",
      microDrill: "What clue tells you to choose informed consent before intervention?",
      microAnswer: "The frame is unclear: who the client is, what can be shared, what records mean, or what limits apply."
    },
    {
      id: "ethics-documentation-consultation",
      model: "Ethics",
      title: "Documentation and Consultation",
      overview: "Good documentation records clinical reasoning, risk assessment, consent, treatment goals, consultation, referrals, and follow-up. It is not just paperwork after the fact.",
      therapistRole: "The therapist documents enough to show thoughtful, ethical care and seeks consultation when risk, competence, law, or role conflict becomes complex.",
      goals: ["Record clinical reasoning", "Support continuity of care", "Manage risk and legal duties", "Use consultation appropriately", "Avoid vague or excessive notes"],
      interventions: ["Progress notes", "Risk assessment documentation", "Consultation log", "Referral documentation", "Treatment-plan updates"],
      keyTerms: [
        { term: "Clinical reasoning", definition: "Why the therapist chose a specific assessment, intervention, referral, or safety action." },
        { term: "Consultation", definition: "Seeking professional guidance while protecting client privacy." },
        { term: "Continuity of care", definition: "Documentation that helps treatment remain coherent over time or during transfer." },
        { term: "Minimum necessary", definition: "Sharing or recording only what is needed for the clinical or legal purpose." },
        { term: "Risk note", definition: "A record of risk questions, client responses, protective factors, plan, consultation, and follow-up." }
      ],
      examWatch: "If the item asks what to do after a risky or ambiguous decision, document reasoning and consult when appropriate.",
      microDrill: "What is the exam clue for consultation?",
      microAnswer: "Risk, role conflict, legal uncertainty, competence limits, or an ambiguous ethical decision."
    },
    {
      id: "comparison-bowen-eft-next-step",
      model: "Comparison",
      title: "Bowen vs EFT Next Step",
      overview: "Bowen and EFT can both sound relational, but their next steps differ. Bowen slows reactivity through observation and differentiation. EFT slows reactivity by organizing emotion and creating new attachment engagement.",
      therapistRole: "The therapist chooses a role that fits the model named in the stem: Bowen coach/researcher or EFT attuned emotional process guide.",
      goals: ["Read the model cue first", "Match the next intervention", "Avoid model blending on exam items", "Notice whether the target is thinking process or attachment emotion"],
      interventions: ["Bowen: process question, family diagram, I-position", "EFT: cycle tracking, emotion deepening, enactment", "Avoid: advice, side-taking, premature problem-solving"],
      keyTerms: [
        { term: "Bowen next step", definition: "Coach observation, ask process questions, map family patterns, or practice I-position." },
        { term: "EFT next step", definition: "Track cycle, validate protection, access primary emotion, or shape enactment." },
        { term: "Thinking system", definition: "Bowen emphasizes thoughtful self-regulation under family anxiety." },
        { term: "Attachment system", definition: "EFT emphasizes safety, responsiveness, and bonding emotions." },
        { term: "Exam mismatch", definition: "A good technique from the wrong model." }
      ],
      examWatch: "If the stem names Bowen, avoid EFT enactment; if it names EFT, avoid making a genogram the immediate emotional-process move.",
      microDrill: "How do you tell a Bowen next step from an EFT next step?",
      microAnswer: "Bowen asks clients to observe and self-define; EFT deepens emotion and shapes responsive interaction."
    },
    {
      id: "comparison-ethics-first",
      model: "Comparison",
      title: "Ethics-First Versus Model-First",
      overview: "Some questions tempt you with a familiar model intervention even though risk, consent, law, or competence must come first. The exam often rewards sequencing.",
      therapistRole: "The therapist is a clinician and ethical decision-maker before being a model technician.",
      goals: ["Identify safety overrides", "Sequence consent before treatment moves", "Use consultation when uncertain", "Return to model work after risk is addressed"],
      interventions: ["Risk assessment before enactment", "Mandated report before family-processing abuse", "Consent clarification before collateral contact", "Consultation before unfamiliar service"],
      keyTerms: [
        { term: "Safety override", definition: "Risk or legal duty that takes priority over routine therapy technique." },
        { term: "Sequencing", definition: "Doing the ethically required step before the model-consistent step." },
        { term: "Mandated duty", definition: "A legal requirement that cannot be replaced by clinical preference." },
        { term: "Competence limit", definition: "A service area where training, supervision, or referral may be needed." },
        { term: "Return to model", definition: "Use Bowen, EFT, or systemic work after the urgent ethical step is handled." }
      ],
      examWatch: "If abuse, imminent harm, confidentiality limits, court requests, or competence problems appear, choose the ethics-first answer.",
      microDrill: "What tells you ethics comes before Bowen or EFT?",
      microAnswer: "Safety, mandated reporting, confidentiality limits, unclear consent, court/legal demands, or competence concerns."
    }
  ];

  var questions = [
    {
      id: "bowen-easy-1",
      model: "Bowen",
      topic: "Differentiation",
      difficulty: "easy",
      prompt: "A client says, 'I cut off my parents because every call turns into pressure to fix my brother's life.' Which Bowen concept is most central?",
      choices: ["Enactment", "Emotional cutoff", "Miracle question", "Attachment injury"],
      answerIndex: 1,
      hint: "Look for distance used to manage unresolved family intensity.",
      explanation: "Emotional cutoff describes managing unresolved attachment and anxiety through distance or avoidance.",
      wrongExplanations: [
        "Enactment is more associated with models that create in-session interaction, especially EFT or structural work.",
        "",
        "The miracle question is solution-focused and does not describe multigenerational family distance.",
        "Attachment injury is an EFT concept and is not the best fit for Bowen family-of-origin cutoff."
      ]
    },
    {
      id: "bowen-easy-2",
      model: "Bowen",
      topic: "Triangles",
      difficulty: "easy",
      prompt: "Two parents reduce marital tension by focusing all concern on their teen's grades. Bowen would most likely describe this as:",
      choices: ["A triangle", "A corrective emotional experience", "Circular causality only", "A paradoxical injunction"],
      answerIndex: 0,
      hint: "Tension between two people gets stabilized through a third person.",
      explanation: "A triangle forms when a third person is drawn into a dyadic tension pattern.",
      wrongExplanations: [
        "",
        "Corrective emotional experience is not the Bowen term for this relationship pattern.",
        "Circular causality is systemic but too broad; the three-person stabilizing pattern is a triangle.",
        "A paradoxical injunction is a strategic intervention, not the Bowen pattern described."
      ]
    },
    {
      id: "bowen-medium-1",
      model: "Bowen",
      topic: "Therapist role",
      difficulty: "medium",
      prompt: "In Bowen therapy, a couple argues in session and asks the therapist to decide who is right. What is the best therapist response?",
      choices: ["Choose the less reactive partner's side", "Coach each partner to observe the process and speak from an I-position", "Immediately assign a date night to improve closeness", "Ask them to enact the softer attachment need"],
      answerIndex: 1,
      hint: "Bowen therapists avoid becoming the third point of a triangle.",
      explanation: "The Bowen therapist stays detriangled and coaches calm observation, process thinking, and I-position statements.",
      wrongExplanations: [
        "Taking sides pulls the therapist into the triangle and increases reactivity.",
        "",
        "A date night may be helpful in some contexts, but it does not address Bowen's central process goal.",
        "Enacting softer attachment needs fits EFT more than Bowen."
      ]
    },
    {
      id: "bowen-medium-2",
      model: "Bowen",
      topic: "Genogram",
      difficulty: "medium",
      prompt: "A therapist maps three generations of cutoffs, sibling positions, symptoms, and alliances. The most likely purpose is to:",
      choices: ["Diagnose each family member", "Identify multigenerational patterns in the emotional system", "Create a behavioral reward plan", "Prove which parent caused the problem"],
      answerIndex: 1,
      hint: "Bowen uses family diagrams to see patterns across generations.",
      explanation: "A genogram or family diagram helps identify emotional process and transmission across generations.",
      wrongExplanations: [
        "Diagnosis may be part of care, but this mapping is not mainly for diagnosing every person.",
        "",
        "A reward plan is behavioral and does not match the described family diagram work.",
        "Bowen avoids blame and focuses on systemic process."
      ]
    },
    {
      id: "bowen-hard-1",
      model: "Bowen",
      topic: "Differentiation",
      difficulty: "hard",
      prompt: "A highly fused adult child says, 'If my mother is upset, I cannot make any decisions until she feels better.' Which treatment goal best fits Bowen theory?",
      choices: ["Increase emotional distance until anxiety disappears", "Increase differentiation while remaining in meaningful contact", "Restructure the family hierarchy through directives", "Help the client discharge anger through catharsis"],
      answerIndex: 1,
      hint: "Differentiation is not the same thing as isolation.",
      explanation: "Bowen aims for greater self-definition and thoughtful functioning while staying connected when possible.",
      wrongExplanations: [
        "Distance alone can become emotional cutoff rather than differentiation.",
        "",
        "Hierarchy restructuring is more structural than Bowen.",
        "Catharsis is not Bowen's core change process."
      ]
    },
    {
      id: "bowen-hard-2",
      model: "Bowen",
      topic: "Family projection",
      difficulty: "hard",
      prompt: "Parents anxious about failure repeatedly monitor one child, interpret normal mistakes as danger, and the child becomes increasingly helpless. Bowen would emphasize:",
      choices: ["Family projection process", "Shaping through reinforcement only", "A completed attachment injury repair", "A therapist-led symptom prescription"],
      answerIndex: 0,
      hint: "Parental anxiety is being transmitted to a child.",
      explanation: "The family projection process describes how parental anxiety can focus on and shape a child's functioning.",
      wrongExplanations: [
        "",
        "Reinforcement may be present, but Bowen's concept is family projection.",
        "Attachment injury repair is an EFT frame and does not fit this transmission pattern.",
        "Symptom prescription is strategic, not Bowen."
      ]
    },
    {
      id: "eft-easy-1",
      model: "EFT",
      topic: "Negative cycle",
      difficulty: "easy",
      prompt: "One partner pursues with criticism while the other withdraws and shuts down. EFT would first focus on:",
      choices: ["Finding the guilty partner", "Identifying and de-escalating the negative cycle", "Teaching a budget worksheet", "Exploring sibling position"],
      answerIndex: 1,
      hint: "EFT treats the cycle as the enemy.",
      explanation: "EFT begins by tracking and de-escalating the negative interaction cycle that blocks attachment safety.",
      wrongExplanations: [
        "EFT avoids blame and frames the cycle, not one partner, as the problem.",
        "",
        "Budgeting may be useful later, but it does not address the attachment cycle.",
        "Sibling position is a Bowen concept."
      ]
    },
    {
      id: "eft-easy-2",
      model: "EFT",
      topic: "Primary emotion",
      difficulty: "easy",
      prompt: "A partner's anger softens into, 'I panic that I do not matter to you.' EFT would call this movement toward:",
      choices: ["Primary emotion and attachment fear", "Detriangling", "A strategic ordeal", "Differentiation of self"],
      answerIndex: 0,
      hint: "Look underneath reactive anger.",
      explanation: "EFT accesses primary vulnerable emotion and attachment meaning beneath reactive secondary emotion.",
      wrongExplanations: [
        "",
        "Detriangling is Bowen language and does not describe emotional deepening.",
        "A strategic ordeal is not part of EFT's central process.",
        "Differentiation is Bowen's central goal, not this EFT emotional shift."
      ]
    },
    {
      id: "eft-medium-1",
      model: "EFT",
      topic: "Enactment",
      difficulty: "medium",
      prompt: "After helping a withdrawn partner access sadness and longing, the EFT therapist asks them to turn and tell their partner directly. This is:",
      choices: ["An enactment", "A genogram interview", "A paradoxical prescription", "A behavioral contract"],
      answerIndex: 0,
      hint: "EFT often choreographs new in-session interactions.",
      explanation: "An enactment guides partners to share new emotional experience directly with one another.",
      wrongExplanations: [
        "",
        "A genogram interview maps family patterns and is not the direct emotional exchange described.",
        "A paradoxical prescription asks clients to continue or exaggerate a symptom; that is not happening here.",
        "A behavioral contract specifies actions, not vulnerable in-session emotional engagement."
      ]
    },
    {
      id: "eft-medium-2",
      model: "EFT",
      topic: "Therapist role",
      difficulty: "medium",
      prompt: "In EFT, the therapist reframes a partner's criticism as a protest against disconnection. The purpose is to:",
      choices: ["Excuse harmful behavior", "Link the behavior to attachment needs and reduce blame", "Teach the partner to win arguments", "Avoid discussing emotion"],
      answerIndex: 1,
      hint: "EFT reframes reactive moves in attachment terms.",
      explanation: "The attachment reframe reduces blame and helps partners see protective moves and unmet needs inside the cycle.",
      wrongExplanations: [
        "Validation does not excuse harm; accountability and safety still matter.",
        "",
        "EFT is not about winning arguments; it is about creating safety and responsiveness.",
        "EFT directly engages emotion rather than avoiding it."
      ]
    },
    {
      id: "eft-hard-1",
      model: "EFT",
      topic: "Contraindications",
      difficulty: "hard",
      prompt: "A couple requests EFT, but one partner reports ongoing intimidation and fear of retaliation at home. What should the therapist prioritize?",
      choices: ["Move directly into vulnerability enactments", "Assess safety, coercion, and appropriate level of care before couple work", "Tell both partners to pursue harder", "Focus only on family-of-origin triangles"],
      answerIndex: 1,
      hint: "Attachment work requires enough safety.",
      explanation: "Ongoing coercion or violence requires safety assessment and appropriate planning before emotionally vulnerable couple interventions.",
      wrongExplanations: [
        "Vulnerability enactments can be unsafe when coercion or retaliation risk is present.",
        "",
        "Encouraging pursuit can intensify danger or the negative cycle.",
        "Family-of-origin work does not replace immediate risk assessment."
      ]
    },
    {
      id: "eft-hard-2",
      model: "EFT",
      topic: "Stages",
      difficulty: "hard",
      prompt: "A couple can now identify the cycle and access vulnerable needs. They begin asking directly for comfort and responsiveness. In EFT, this most closely reflects:",
      choices: ["Stage 2 restructuring interactions", "Initial intake only", "Bowen detriangling", "A strategic homework paradox"],
      answerIndex: 0,
      hint: "The couple is moving from de-escalation into new bonding interactions.",
      explanation: "Stage 2 includes restructuring interactions through deeper emotional engagement and new responsive exchanges.",
      wrongExplanations: [
        "",
        "The described change is beyond an initial intake.",
        "Detriangling is not the EFT stage being described.",
        "A paradox is a strategic intervention, not EFT restructuring."
      ]
    },
    {
      id: "systemic-easy-1",
      model: "Systemic Roles",
      topic: "Client system",
      difficulty: "easy",
      prompt: "An LMFT assesses how a child's symptoms relate to parent conflict, school stress, culture, and family routines. This best demonstrates:",
      choices: ["A systemic lens", "Individual blame", "Ignoring diagnosis", "A purely medical model"],
      answerIndex: 0,
      hint: "The therapist is looking at patterns and context.",
      explanation: "A systemic lens considers interaction, context, and relationships around the presenting concern.",
      wrongExplanations: [
        "",
        "The description avoids blame by broadening assessment.",
        "Systemic assessment can include diagnosis; it does not ignore it.",
        "A purely medical model would not emphasize relationship patterns and context this strongly."
      ]
    },
    {
      id: "systemic-medium-1",
      model: "Systemic Roles",
      topic: "Alliance",
      difficulty: "medium",
      prompt: "In the first family session, two members push the therapist to agree that the third person is the problem. The LMFT should first:",
      choices: ["Join with the majority", "Balance alliance and assess interactional patterns", "Refuse to meet with families", "Diagnose the third person immediately"],
      answerIndex: 1,
      hint: "LMFTs attend to every member and the pattern between them.",
      explanation: "Balanced alliance and systemic assessment reduce scapegoating and support treatment of the client system.",
      wrongExplanations: [
        "Joining the majority can reinforce scapegoating.",
        "",
        "Family work is within LMFT practice when appropriate.",
        "Diagnosis may be needed, but immediate labeling can miss systemic process and alliance."
      ]
    },
    {
      id: "systemic-medium-2",
      model: "Systemic Roles",
      topic: "Hypothesizing",
      difficulty: "medium",
      prompt: "A therapist forms a tentative idea that a teen's outbursts interrupt escalating parent conflict. What should the therapist do with this idea?",
      choices: ["Treat it as a final fact", "Use it as a systemic hypothesis and revise it with new data", "Tell the teen they caused the conflict", "Ignore patterns and focus only on symptoms"],
      answerIndex: 1,
      hint: "Hypotheses guide assessment; they are not verdicts.",
      explanation: "Systemic hypotheses are tentative and should be tested and revised as treatment unfolds.",
      wrongExplanations: [
        "A hypothesis is not a final fact.",
        "",
        "The hypothesis is about a pattern, not blame.",
        "LMFT assessment includes symptoms and relational patterns."
      ]
    },
    {
      id: "systemic-hard-1",
      model: "Systemic Roles",
      topic: "Treatment planning",
      difficulty: "hard",
      prompt: "A couple asks for communication skills, but assessment reveals untreated substance use, threats of self-harm, and no safety plan. What is the best next step?",
      choices: ["Teach active listening first", "Prioritize risk assessment, safety planning, and appropriate referrals or coordination", "Begin family-of-origin coaching only", "Schedule termination"],
      answerIndex: 1,
      hint: "Safety and level of care come before routine skills work.",
      explanation: "Crisis and safety concerns must be assessed and managed before lower-risk treatment goals.",
      wrongExplanations: [
        "Communication skills are secondary when self-harm threats and substance use risk are active.",
        "",
        "Family-of-origin coaching does not address immediate safety needs.",
        "Termination is not the first step unless appropriate transfer and safety planning are addressed."
      ]
    },
    {
      id: "ethics-easy-1",
      model: "Ethics",
      topic: "Informed consent",
      difficulty: "easy",
      prompt: "Before starting couple therapy, the LMFT explains confidentiality limits, records, fees, and how secrets will be handled. This is primarily:",
      choices: ["Informed consent", "Emotional cutoff", "A paradoxical directive", "A symptom prescription"],
      answerIndex: 0,
      hint: "This happens before and during treatment so clients understand the service.",
      explanation: "Informed consent includes clear explanation of services, limits, risks, fees, records, and relevant policies.",
      wrongExplanations: [
        "",
        "Emotional cutoff is a Bowen relationship process.",
        "A paradoxical directive is an intervention, not consent.",
        "Symptom prescription is strategic, not informed consent."
      ]
    },
    {
      id: "ethics-medium-1",
      model: "Ethics",
      topic: "Competence",
      difficulty: "medium",
      prompt: "A therapist is asked to treat a specialized issue outside their training. The most ethical response is to:",
      choices: ["Accept because all therapy skills transfer automatically", "Seek training, supervision, consultation, or refer as needed", "Avoid documenting the issue", "Promise guaranteed outcomes"],
      answerIndex: 1,
      hint: "Competence is maintained through training, supervision, and consultation.",
      explanation: "Ethical practice requires working within competence and getting training, consultation, supervision, or referral when needed.",
      wrongExplanations: [
        "Skills do not automatically transfer to every specialty without competence.",
        "",
        "Avoiding documentation creates additional ethical and legal risk.",
        "Guaranteed outcomes are not ethically appropriate."
      ]
    },
    {
      id: "ethics-hard-1",
      model: "Ethics",
      topic: "Mandated duties",
      difficulty: "hard",
      prompt: "During a family session, a child describes current abuse by a caregiver. What should the LMFT do?",
      choices: ["Keep it confidential because the family requested privacy", "Follow mandated reporting law and address immediate safety", "Use only an EFT enactment", "Wait several months to confirm the pattern"],
      answerIndex: 1,
      hint: "Mandated law and safety override ordinary confidentiality.",
      explanation: "Current child abuse concerns require mandated reporting according to law and attention to immediate safety.",
      wrongExplanations: [
        "Confidentiality has legal and safety limits.",
        "",
        "A model-specific intervention does not replace mandated duties.",
        "Waiting can leave a child at risk and violate reporting duties."
      ]
    },
    {
      id: "compare-medium-1",
      model: "Comparison",
      topic: "Model selection",
      difficulty: "medium",
      prompt: "A test item asks for the intervention most consistent with Bowen therapy. Which answer should you prefer?",
      choices: ["Have partners enact vulnerable attachment needs", "Use a genogram and process questions to explore multigenerational patterns", "Prescribe the symptom", "Use exposure to reduce phobia"],
      answerIndex: 1,
      hint: "Bowen language often includes genograms, process, and generations.",
      explanation: "Genograms and process questions fit Bowen's focus on multigenerational emotional systems and differentiation.",
      wrongExplanations: [
        "This is more EFT than Bowen.",
        "",
        "Symptom prescription is more strategic.",
        "Exposure may be useful for anxiety treatment but is not the Bowen family systems answer."
      ]
    },
    {
      id: "compare-hard-1",
      model: "Comparison",
      topic: "Therapist role",
      difficulty: "hard",
      prompt: "A therapist is calm, neutral, and encourages a client to define their own position with family rather than reactively rescuing others. Which role is being modeled?",
      choices: ["Bowen coach", "EFT choreographer of enactments", "Strategic director of paradox", "Psychoanalytic interpreter of transference"],
      answerIndex: 0,
      hint: "Think differentiation and I-position.",
      explanation: "The description fits the Bowen therapist as a calm coach supporting differentiation and detriangling.",
      wrongExplanations: [
        "",
        "EFT therapists may be active and evocative, but this prompt stresses neutrality, coaching, and self-definition.",
        "Strategic paradox is not described.",
        "The prompt does not focus on transference interpretation."
      ]
    },
    {
      id: "bowen-hard-3",
      model: "Bowen",
      topic: "Triangles",
      difficulty: "hard",
      prompt: "A client reports that whenever she and her spouse argue, she calls her father, who then criticizes the spouse. From a Bowen perspective, what is the best first therapeutic focus?",
      choices: ["Help the client observe the triangle and her own part in stabilizing it", "Invite the father to decide whether the marriage should continue", "Teach the spouse to win the father's approval", "Encourage the client to cut off all family contact immediately"],
      answerIndex: 0,
      hint: "Bowen work starts by seeing how anxiety moves through relationships.",
      explanation: "The Bowen focus is observing and detriangling from the three-person pattern while increasing thoughtful self-definition.",
      wrongExplanations: [
        "",
        "This makes the father the authority and deepens the triangle.",
        "Winning approval keeps the spouse organized around the triangle rather than changing the process.",
        "Immediate cutoff can be reactive distance rather than differentiation."
      ]
    },
    {
      id: "bowen-hard-4",
      model: "Bowen",
      topic: "Societal emotional process",
      difficulty: "hard",
      prompt: "A family becomes more reactive after months of community stress, financial pressure, and polarized news. Bowen theory would most likely connect this to:",
      choices: ["Societal emotional process increasing chronic anxiety in relationship systems", "A completed corrective attachment event", "A purely individual intrapsychic conflict", "A therapist-created paradox"],
      answerIndex: 0,
      hint: "Bowen extends emotional process beyond the nuclear family.",
      explanation: "Societal emotional process describes how broader social anxiety can intensify reactivity and functioning in families.",
      wrongExplanations: [
        "",
        "Corrective attachment events are not the Bowen concept for social anxiety affecting family functioning.",
        "Bowen would not reduce this to only an individual intrapsychic conflict.",
        "A paradox is a strategic intervention, not the concept being tested."
      ]
    },
    {
      id: "bowen-hard-5",
      model: "Bowen",
      topic: "Sibling position",
      difficulty: "hard",
      prompt: "In a genogram, the therapist notices that oldest children across generations become caretakers and youngest children are treated as fragile. In Bowen theory, this observation is most useful because:",
      choices: ["Sibling position can help illuminate predictable family functioning patterns", "Sibling position proves a fixed diagnosis", "Birth order should be used to assign blame", "It replaces assessment of triangles and differentiation"],
      answerIndex: 0,
      hint: "Sibling position is a clue, not a verdict.",
      explanation: "Bowen uses sibling position as one lens for understanding recurring roles and functioning in the family emotional system.",
      wrongExplanations: [
        "",
        "Sibling position is not a fixed diagnosis.",
        "Bowen concepts are used to understand process, not assign blame.",
        "Sibling position complements, not replaces, assessment of other Bowen concepts."
      ]
    },
    {
      id: "eft-hard-3",
      model: "EFT",
      topic: "Enactment",
      difficulty: "hard",
      prompt: "A partner begins to access shame and says, 'I never know how to ask for comfort.' What would be the most EFT-consistent therapist move if safety and alliance are adequate?",
      choices: ["Shape a brief enactment asking the partner for comfort in a clear, emotionally engaged way", "Move away from emotion and debate household facts", "Tell the partner to stop needing reassurance", "Assign a genogram as the only intervention"],
      answerIndex: 0,
      hint: "EFT turns accessed emotion into new interaction.",
      explanation: "EFT uses enactments to create new bonding experiences from primary emotion and attachment needs.",
      wrongExplanations: [
        "",
        "Debating facts misses the emotional process that EFT is targeting.",
        "This shames the attachment need rather than helping it be expressed safely.",
        "Genograms can be useful elsewhere, but they are not the EFT move described."
      ]
    },
    {
      id: "eft-hard-4",
      model: "EFT",
      topic: "Cycle formulation",
      difficulty: "hard",
      prompt: "A couple wants the therapist to teach communication rules, but each attempt at rules collapses when one partner hears criticism and the other hears rejection. EFT would most likely:",
      choices: ["Track the attachment meanings that organize the communication cycle", "Give more rules without exploring emotional triggers", "Decide which partner communicates correctly", "Avoid the relationship pattern and focus only on individual hobbies"],
      answerIndex: 0,
      hint: "EFT asks what the move means emotionally and relationally.",
      explanation: "EFT focuses on the attachment meanings and emotional triggers that organize the negative cycle beneath communication problems.",
      wrongExplanations: [
        "",
        "Rules alone often fail when the underlying attachment cycle stays active.",
        "EFT avoids blame and does not choose the correct partner.",
        "The relationship pattern is central to EFT case formulation."
      ]
    },
    {
      id: "eft-hard-5",
      model: "EFT",
      topic: "Therapeutic pacing",
      difficulty: "hard",
      prompt: "During an EFT session, one partner becomes flooded, stops making eye contact, and says, 'I cannot do this.' What is the best therapist response?",
      choices: ["Slow the process, validate overwhelm, and regulate before continuing emotional work", "Push harder because vulnerability means the model is working", "End therapy permanently", "Tell the other partner to confront them more strongly"],
      answerIndex: 0,
      hint: "EFT works at the edge of tolerance, not beyond it.",
      explanation: "The therapist should pace emotional work, regulate overwhelm, and keep the client within a tolerable range for engagement.",
      wrongExplanations: [
        "",
        "Pushing beyond tolerance can increase shutdown or risk.",
        "Overwhelm calls for pacing, not automatic termination.",
        "Confrontation may intensify flooding and does not fit EFT attunement."
      ]
    },
    {
      id: "eft-hard-6",
      model: "EFT",
      topic: "Attachment reframe",
      difficulty: "hard",
      prompt: "A partner says, 'I check your location because I know you will leave me.' In EFT, the most useful reframe is:",
      choices: ["The checking is a protective protest organized around attachment fear, while accountability and safety still matter", "The checking is romantic proof of love", "The partner being checked caused all of the behavior", "The therapist should ignore possible control concerns"],
      answerIndex: 0,
      hint: "EFT validates the fear without excusing harmful behavior.",
      explanation: "EFT reframes the behavior in attachment terms while still assessing safety, control, and accountability.",
      wrongExplanations: [
        "",
        "Framing control as romance can minimize harm.",
        "EFT avoids blame and still holds each partner responsible for behavior.",
        "Possible control or coercion must be assessed."
      ]
    },
    {
      id: "systemic-hard-2",
      model: "Systemic Roles",
      topic: "Circular questioning",
      difficulty: "hard",
      prompt: "A therapist asks, 'When your son refuses school, who notices first, who responds next, and how does everyone else react?' This question is best described as:",
      choices: ["A circular question exploring interactional sequences", "A directive to suppress emotion", "A diagnostic test with a single correct score", "A paradoxical symptom prescription"],
      answerIndex: 0,
      hint: "The therapist is mapping the sequence between people.",
      explanation: "Circular questions explore relational patterns, differences, sequences, and meanings across the client system.",
      wrongExplanations: [
        "",
        "The question explores emotion and interaction rather than suppressing it.",
        "It is not a scored diagnostic test.",
        "It does not prescribe or exaggerate the symptom."
      ]
    },
    {
      id: "systemic-hard-3",
      model: "Systemic Roles",
      topic: "Feedback-informed care",
      difficulty: "hard",
      prompt: "After four sessions, the family reports feeling less heard and the original goal no longer fits. What should the LMFT do?",
      choices: ["Invite feedback, reassess the hypothesis, and revise the treatment plan collaboratively", "Continue the same plan because changing it looks uncertain", "Blame the family for resistance", "Terminate immediately without planning"],
      answerIndex: 0,
      hint: "LMFT treatment planning is ongoing, not one-and-done.",
      explanation: "Ongoing evaluation and feedback should guide reformulation, treatment-plan revision, and collaboration.",
      wrongExplanations: [
        "",
        "Rigidly continuing can ignore important process and outcome feedback.",
        "Labeling the family as resistant misses systemic feedback.",
        "Termination may be discussed if appropriate, but not as an abrupt first response."
      ]
    },
    {
      id: "systemic-hard-4",
      model: "Systemic Roles",
      topic: "Joining",
      difficulty: "hard",
      prompt: "In a high-conflict family intake, each member watches closely to see whose side the therapist will take. What is the best joining stance?",
      choices: ["Build balanced alliance by validating each position while tracking the pattern between them", "Join the loudest member first", "Avoid all emotion to appear neutral", "Tell the family one person is the identified villain"],
      answerIndex: 0,
      hint: "Balanced alliance is active, not emotionally blank.",
      explanation: "Joining in systemic work requires alliance with the client system while avoiding coalition and scapegoating.",
      wrongExplanations: [
        "",
        "Joining the loudest member risks coalition.",
        "Neutrality does not mean emotional disengagement.",
        "Villain language reinforces blame and scapegoating."
      ]
    },
    {
      id: "ethics-hard-2",
      model: "Ethics",
      topic: "Multiple relationships",
      difficulty: "hard",
      prompt: "A former couple therapy client asks the therapist to mediate a business dispute between the former partners. What is the best ethical response?",
      choices: ["Evaluate role conflict, competence, confidentiality, and potential harm before accepting or refer", "Accept automatically because the therapist already knows them", "Use confidential therapy information to decide the business issue", "Promise neutrality without documenting risks"],
      answerIndex: 0,
      hint: "Prior therapy creates role and confidentiality concerns.",
      explanation: "The therapist must consider multiple-role risks, confidentiality, competence, informed consent, and potential harm before accepting or referring.",
      wrongExplanations: [
        "",
        "Prior knowledge can create risk rather than automatic suitability.",
        "Using confidential therapy information for a new role can violate trust and consent.",
        "Risks should be considered and documented, not minimized."
      ]
    },
    {
      id: "ethics-hard-3",
      model: "Ethics",
      topic: "Records",
      difficulty: "hard",
      prompt: "A client asks the therapist to remove all references to suicidal thoughts from the record because the client is embarrassed. What should the therapist do?",
      choices: ["Maintain accurate records while discussing privacy, access, and documentation concerns", "Delete clinically relevant risk documentation", "Promise never to document risk", "Let the client write the official note alone"],
      answerIndex: 0,
      hint: "Clinical records need to be accurate and adequate.",
      explanation: "Ethical practice requires accurate records, especially around risk assessment and clinical decision-making.",
      wrongExplanations: [
        "",
        "Deleting relevant risk information can create clinical, ethical, and legal problems.",
        "Risk assessment and decisions should be documented.",
        "Client input can matter, but the therapist remains responsible for accurate records."
      ]
    },
    {
      id: "ethics-hard-4",
      model: "Ethics",
      topic: "Confidentiality",
      difficulty: "hard",
      prompt: "In conjoint therapy, one partner privately discloses an affair and says, 'Do not tell my partner, but keep helping us rebuild trust.' What is the best next step?",
      choices: ["Follow the previously agreed secrets policy and address informed consent and treatment viability", "Immediately disclose every detail regardless of consent policy", "Keep the secret indefinitely without considering the therapy frame", "Pretend the disclosure never happened"],
      answerIndex: 0,
      hint: "The answer depends on the couple therapy frame and informed consent.",
      explanation: "The therapist should follow the agreed policy, consider confidentiality and consent, and assess whether the treatment frame remains viable.",
      wrongExplanations: [
        "",
        "Automatic disclosure may violate the agreed policy and informed consent.",
        "Keeping the secret indefinitely can undermine couple therapy and informed consent.",
        "Ignoring it avoids a clinical and ethical issue that affects treatment."
      ]
    },
    {
      id: "ethics-medium-2",
      model: "Ethics",
      topic: "Informed consent",
      difficulty: "medium",
      prompt: "A couple begins therapy and asks whether one partner can have private sessions that stay secret from the other. What should the LMFT do first?",
      choices: ["Clarify the couple therapy frame and secrets policy before agreeing", "Agree automatically because privacy always overrides the couple frame", "Refuse all individual contact in every case", "Ask one partner to decide the policy later"],
      answerIndex: 0,
      hint: "The policy should be clear before private information is gathered.",
      explanation: "Informed consent in couple therapy should include how private disclosures and individual contacts will be handled.",
      wrongExplanations: ["", "Privacy matters, but couple therapy also requires a clear consent frame.", "Some models allow individual contacts with clear policies, so an absolute rule is too rigid.", "The therapist is responsible for clarifying the policy, not leaving it to one partner."]
    },
    {
      id: "ethics-medium-3",
      model: "Ethics",
      topic: "Documentation",
      difficulty: "medium",
      prompt: "A client reports passive suicidal thoughts but denies intent or plan. What documentation is most appropriate?",
      choices: ["Document the risk assessment, protective factors, clinical reasoning, and follow-up plan", "Avoid documenting because the client denied intent", "Only write that the client was sad", "Let the client approve each word before any note is saved"],
      answerIndex: 0,
      hint: "Denial of intent does not erase the need to document assessment.",
      explanation: "Risk-related notes should reflect assessment, reasoning, protective factors, decisions, and follow-up.",
      wrongExplanations: ["", "Denial of intent is clinically relevant but does not remove documentation duties.", "That note is too vague for risk-related clinical reasoning.", "Client input can matter, but the therapist remains responsible for accurate records."]
    },
    {
      id: "ethics-medium-4",
      model: "Ethics",
      topic: "Confidentiality",
      difficulty: "medium",
      prompt: "A parent of an adult client calls and asks for updates. The parent says they pay for therapy. What is the best response?",
      choices: ["Do not disclose without the adult client's valid authorization", "Share attendance only because the parent pays", "Share all progress notes verbally", "Ask the parent to promise not to repeat it"],
      answerIndex: 0,
      hint: "Payment does not equal authorization.",
      explanation: "Confidentiality belongs to the client; disclosure generally requires valid authorization or a legal exception.",
      wrongExplanations: ["", "Paying for therapy does not automatically authorize disclosure.", "Progress notes and clinical details require proper authorization or legal basis.", "A promise from the parent does not replace client authorization."]
    },
    {
      id: "ethics-medium-5",
      model: "Ethics",
      topic: "Competence",
      difficulty: "medium",
      prompt: "An LMFT trained in couple therapy is asked to provide a specialized trauma treatment they have not studied. What should they do?",
      choices: ["Seek training, supervision, consultation, or refer to a competent provider", "Proceed because trauma is common in therapy", "Advertise the specialty after one client asks", "Avoid telling the client about the limits"],
      answerIndex: 0,
      hint: "Scope of competence matters even when the topic is common.",
      explanation: "Ethical practice requires services within competence or appropriate training, supervision, consultation, or referral.",
      wrongExplanations: ["", "Common problems still require competent treatment.", "Advertising a specialty without competence is misleading.", "Clients need accurate information for informed consent."]
    },
    {
      id: "ethics-medium-6",
      model: "Ethics",
      topic: "Boundaries",
      difficulty: "medium",
      prompt: "A current client invites the therapist to a family celebration. What is the best first step?",
      choices: ["Consider boundary, role, cultural, and potential harm issues before responding", "Attend because declining would always be rude", "Attend but do not document it", "Terminate immediately because invitations are unethical"],
      answerIndex: 0,
      hint: "Boundary questions require context and risk analysis.",
      explanation: "The therapist should evaluate potential multiple relationship, role, cultural, and harm concerns and document reasoning.",
      wrongExplanations: ["", "Cultural context matters, but attendance is not automatically appropriate.", "Avoiding documentation increases risk.", "An invitation alone does not automatically require termination."]
    },
    {
      id: "ethics-medium-7",
      model: "Ethics",
      topic: "Fees",
      difficulty: "medium",
      prompt: "A therapist changes cancellation fees after repeated missed sessions. What should happen ethically?",
      choices: ["Review the fee policy clearly and obtain informed agreement before applying changes", "Charge any amount without notice", "Hide the change in clinical notes only", "Use fees to punish emotional avoidance"],
      answerIndex: 0,
      hint: "Fees belong in informed consent and policy discussions.",
      explanation: "Clients should receive clear information about fees and policy changes before they are applied.",
      wrongExplanations: ["", "Unexpected charges without notice can violate informed consent.", "A hidden note does not provide clear agreement.", "Fees should not be used as punishment."]
    },
    {
      id: "ethics-medium-8",
      model: "Ethics",
      topic: "Telehealth",
      difficulty: "medium",
      prompt: "During telehealth intake, what information is especially important to collect?",
      choices: ["Client location, emergency contact or local resources, consent, and privacy limits", "Only the client's preferred nickname", "The therapist's favorite platform", "Nothing different from in-person therapy"],
      answerIndex: 0,
      hint: "Telehealth changes emergency and privacy planning.",
      explanation: "Telehealth requires attention to client location, emergency planning, privacy, consent, and technology limits.",
      wrongExplanations: ["", "Nickname alone is far from adequate for telehealth planning.", "Platform preference does not replace clinical and safety setup.", "Telehealth has additional practical and risk considerations."]
    },
    {
      id: "ethics-medium-9",
      model: "Ethics",
      topic: "Records",
      difficulty: "medium",
      prompt: "A client requests access to their record. What should the therapist do?",
      choices: ["Follow law, policy, and ethical standards for record access and document the request", "Refuse automatically because therapy notes are private", "Destroy the record before responding", "Only provide access if the therapist agrees with the client"],
      answerIndex: 0,
      hint: "Record access is handled by law and policy, not preference.",
      explanation: "Therapists should respond to record requests according to applicable law, policy, and ethical standards.",
      wrongExplanations: ["", "Automatic refusal may violate access rights.", "Destroying records is unethical and risky.", "Access is not based only on whether the therapist agrees."]
    },
    {
      id: "ethics-medium-10",
      model: "Ethics",
      topic: "Consultation",
      difficulty: "medium",
      prompt: "A therapist faces an unfamiliar ethical dilemma involving court records. What is the best response?",
      choices: ["Seek consultation or legal guidance while protecting confidentiality", "Ask social media followers for advice", "Guess quickly to avoid appearing uncertain", "Ignore the issue until a judge calls"],
      answerIndex: 0,
      hint: "Consultation is a strength, not a weakness.",
      explanation: "Ethical dilemmas, especially legal ones, often require consultation while protecting client confidentiality.",
      wrongExplanations: ["", "Public social media consultation risks confidentiality and poor guidance.", "Guessing can increase ethical and legal risk.", "Waiting may fail to protect clients and the therapist."]
    },
    {
      id: "ethics-medium-11",
      model: "Ethics",
      topic: "Mandated duties",
      difficulty: "medium",
      prompt: "A client describes possible elder abuse of a dependent relative. What should the LMFT do?",
      choices: ["Assess details and follow applicable mandated reporting requirements", "Promise secrecy before hearing more", "Wait until the relative attends therapy", "Use only communication skills with the client"],
      answerIndex: 0,
      hint: "Mandated duties can involve vulnerable adults too.",
      explanation: "Possible abuse of vulnerable people requires assessment and action consistent with applicable law and mandated duties.",
      wrongExplanations: ["", "Promises of secrecy can conflict with legal reporting limits.", "Reporting duties may not require the relative to attend therapy first.", "Skills training does not replace mandated duties."]
    },
    {
      id: "ethics-medium-12",
      model: "Ethics",
      topic: "Cultural humility",
      difficulty: "medium",
      prompt: "A therapist notices their own values conflict with a family's cultural practice. What is the best ethical stance?",
      choices: ["Use cultural humility, assess meaning and safety, and avoid imposing personal values", "Tell the family the therapist's values are healthier", "Avoid the topic completely", "Assume the practice is harmful without assessment"],
      answerIndex: 0,
      hint: "Assess meaning and safety without value imposition.",
      explanation: "Ethical systemic practice requires cultural humility, safety assessment, and avoiding value imposition.",
      wrongExplanations: ["", "Imposing therapist values can harm clients and alliance.", "Avoidance may miss important context or risk.", "Assumptions without assessment are not culturally responsive."]
    },
    {
      id: "ethics-medium-13",
      model: "Ethics",
      topic: "Referral",
      difficulty: "medium",
      prompt: "A therapist is moving and cannot continue services. What should they do?",
      choices: ["Plan termination or transfer with referrals and documentation", "Stop responding once they move", "Tell clients to find someone online without discussion", "Keep billing while unavailable"],
      answerIndex: 0,
      hint: "Avoid abandonment.",
      explanation: "Therapists should plan continuity, referrals, termination, or transfer and document the process.",
      wrongExplanations: ["", "Abruptly stopping contact risks abandonment.", "A vague instruction is not adequate transition planning.", "Billing while unavailable is not ethical care."]
    },
    {
      id: "ethics-medium-14",
      model: "Ethics",
      topic: "Technology",
      difficulty: "medium",
      prompt: "A therapist wants to text clients about clinical issues. What should be addressed first?",
      choices: ["Consent, privacy limits, documentation, emergency use, and security risks", "Only whether texting feels convenient", "Whether the therapist likes emojis", "Nothing, because texts disappear"],
      answerIndex: 0,
      hint: "Technology changes confidentiality and records.",
      explanation: "Clinical texting requires clear policies about consent, privacy, records, security, and emergencies.",
      wrongExplanations: ["", "Convenience alone is not enough.", "Style preferences do not address ethical risks.", "Texts can create records and privacy risks."]
    },
    {
      id: "ethics-medium-15",
      model: "Ethics",
      topic: "Supervision",
      difficulty: "medium",
      prompt: "An associate therapist is unsure how to handle a high-risk case. What is the most appropriate action?",
      choices: ["Consult their supervisor promptly and document the consultation", "Handle it alone to prove competence", "Ask the client what the supervisor would say", "Avoid documenting because supervision is informal"],
      answerIndex: 0,
      hint: "Supervision is part of competent care.",
      explanation: "High-risk uncertainty should prompt supervision or consultation and documentation of clinical reasoning.",
      wrongExplanations: ["", "Handling high risk alone can exceed competence.", "The client is not responsible for supervision.", "Consultation and supervision should be documented when relevant."]
    },
    {
      id: "ethics-medium-16",
      model: "Ethics",
      topic: "Termination",
      difficulty: "medium",
      prompt: "A client repeatedly attends while intoxicated and cannot participate safely. What should the therapist do?",
      choices: ["Assess safety and level of care, revise the plan, consult, and refer if needed", "Continue normal therapy as if nothing changed", "Terminate by voicemail only", "Punish the client with extra fees"],
      answerIndex: 0,
      hint: "Intoxication affects safety, consent, and level of care.",
      explanation: "The therapist should assess risk and level of care, adjust treatment, consult, and refer or transfer when needed.",
      wrongExplanations: ["", "Ignoring intoxication can compromise safety and treatment.", "Abrupt termination by voicemail is not adequate care.", "Fees should not be punitive."]
    },
    {
      id: "ethics-medium-17",
      model: "Ethics",
      topic: "Court involvement",
      difficulty: "medium",
      prompt: "A parent asks the child's therapist to write a custody recommendation after three therapy sessions. What should the therapist do?",
      choices: ["Clarify the treatment role and avoid giving a forensic custody opinion outside that role", "Write the recommendation because the therapist likes the parent", "Ask the child to choose in session", "Ignore consent and send records to court"],
      answerIndex: 0,
      hint: "Treatment and forensic roles are different.",
      explanation: "Therapists should avoid role conflicts and forensic opinions outside their role and competence.",
      wrongExplanations: ["", "Personal preference is not a clinical or ethical basis.", "The child should not be placed in that role.", "Court disclosures require legal basis, consent, or proper process."]
    },
    {
      id: "ethics-medium-18",
      model: "Ethics",
      topic: "Advertising",
      difficulty: "medium",
      prompt: "A therapist lists themselves as certified in a model after attending one introductory workshop. What is the concern?",
      choices: ["Misrepresentation of credentials or competence", "A required marketing strategy", "A confidentiality exception", "A mandated reporting duty"],
      answerIndex: 0,
      hint: "Advertising must be accurate.",
      explanation: "Therapists should accurately represent credentials, training, certification, and competence.",
      wrongExplanations: ["", "Marketing must remain truthful.", "This is not primarily a confidentiality issue.", "This is not a reporting duty."]
    },
    {
      id: "ethics-medium-19",
      model: "Ethics",
      topic: "Client autonomy",
      difficulty: "medium",
      prompt: "A therapist strongly believes a couple should separate. The couple wants to work on repair. What is the best ethical stance?",
      choices: ["Explore goals, assess safety, and avoid imposing the therapist's values", "Tell them separation is the only healthy choice", "Refuse treatment because they disagree", "Secretly persuade one partner to leave"],
      answerIndex: 0,
      hint: "Autonomy and safety both matter.",
      explanation: "The therapist should assess safety and work with client goals while avoiding value imposition.",
      wrongExplanations: ["", "The therapist's values should not replace client autonomy.", "Disagreement alone does not require refusal.", "Secret persuasion creates alliance and ethical problems."]
    },
    {
      id: "ethics-medium-20",
      model: "Ethics",
      topic: "Confidentiality",
      difficulty: "medium",
      prompt: "In family therapy, one member asks who can see the record. What should the therapist do?",
      choices: ["Explain record policies, client status, authorization, and applicable law clearly", "Say nobody can ever see anything", "Promise every family member separate secret records", "Avoid answering until conflict starts"],
      answerIndex: 0,
      hint: "Family records can be complicated; explain the policy clearly.",
      explanation: "Informed consent should include record access, confidentiality, authorizations, and relevant legal limits.",
      wrongExplanations: ["", "Absolute statements may be inaccurate.", "Separate secret records may not fit the treatment frame or law.", "Waiting increases confusion and risk."]
    },
    {
      id: "ethics-hard-5",
      model: "Ethics",
      topic: "Duty to protect",
      difficulty: "hard",
      prompt: "A client makes a specific, credible threat toward an identifiable person. What should the LMFT prioritize?",
      choices: ["Assess seriousness and follow applicable duty-to-protect law and safety procedures", "Keep it confidential in every circumstance", "Use only an EFT enactment", "Wait for the threatened person to call"],
      answerIndex: 0,
      hint: "Credible threats can trigger legal safety duties.",
      explanation: "Specific credible threats require risk assessment and action consistent with applicable duty-to-protect law and safety standards.",
      wrongExplanations: ["", "Confidentiality has safety and legal limits.", "A model intervention does not replace protection duties.", "Waiting can leave others at risk."]
    },
    {
      id: "ethics-hard-6",
      model: "Ethics",
      topic: "Coercive control",
      difficulty: "hard",
      prompt: "In couple intake, one partner appears fearful and the other says, 'They know not to upset me.' What should happen before routine conjoint work?",
      choices: ["Screen carefully for coercion, violence, and retaliation risk", "Begin vulnerability enactments to build closeness", "Tell the fearful partner to be more assertive in front of the other", "Ignore nonverbal cues without a disclosure"],
      answerIndex: 0,
      hint: "Safety screening can be needed even without a direct disclosure.",
      explanation: "Possible coercive control requires careful safety assessment before routine couple interventions.",
      wrongExplanations: ["", "Vulnerability work can be unsafe when coercion is active.", "Direct confrontation may increase retaliation risk.", "Nonverbal cues and intimidation language matter clinically."]
    },
    {
      id: "ethics-hard-7",
      model: "Ethics",
      topic: "Forensic role",
      difficulty: "hard",
      prompt: "A treating therapist is subpoenaed and asked to provide an opinion about which parent should have custody. What is the best ethical concern?",
      choices: ["The therapist must manage role limits, records, legal process, and avoid unsupported forensic opinions", "The therapist should choose the parent they like", "The therapist should ignore all court orders", "The therapist can disclose everything because court was mentioned"],
      answerIndex: 0,
      hint: "Treatment and forensic opinions are different roles.",
      explanation: "Court involvement requires careful handling of legal process, confidentiality, records, role limits, and competence.",
      wrongExplanations: ["", "Personal preference is not ethical or forensic evidence.", "Legal process should not simply be ignored.", "Court involvement does not erase confidentiality or consent rules."]
    },
    {
      id: "ethics-hard-8",
      model: "Ethics",
      topic: "No-secrets policy",
      difficulty: "hard",
      prompt: "A partner privately discloses ongoing gambling debt that affects the couple's finances. The therapist has a no-secrets policy reviewed at intake. What should the therapist do?",
      choices: ["Follow the agreed policy and work toward clinically appropriate disclosure within the therapy frame", "Keep the secret indefinitely while treating financial trust", "Immediately post the information to shared paperwork without discussion", "Pretend it was never said"],
      answerIndex: 0,
      hint: "Use the policy that was part of informed consent.",
      explanation: "The therapist should follow the agreed secrets policy and address how the information affects treatment viability and consent.",
      wrongExplanations: ["", "Keeping the secret may undermine the couple therapy frame.", "Disclosure should still be handled clinically and ethically.", "Ignoring it avoids an issue central to treatment."]
    },
    {
      id: "ethics-hard-9",
      model: "Ethics",
      topic: "Impaired therapist",
      difficulty: "hard",
      prompt: "A therapist notices their own grief is causing them to avoid a client's bereavement work. What is the best ethical response?",
      choices: ["Seek consultation, supervision, personal support, and adjust care to protect the client", "Keep practicing without reflection", "Tell the client to avoid grief too", "Terminate abruptly with no referral"],
      answerIndex: 0,
      hint: "Therapist impairment or countertransference needs attention.",
      explanation: "Therapists should monitor personal impairment and seek support or referral steps that protect clients.",
      wrongExplanations: ["", "Ignoring impairment can harm care.", "Imposing avoidance on the client is not ethical treatment.", "Abrupt termination risks abandonment."]
    },
    {
      id: "ethics-hard-10",
      model: "Ethics",
      topic: "High-risk documentation",
      difficulty: "hard",
      prompt: "After deciding not to hospitalize a suicidal client, what should documentation include?",
      choices: ["Risk and protective factors, rationale, consultation, safety plan, and follow-up", "Only the phrase 'client seemed fine'", "Nothing because hospitalization did not occur", "A promise that no future risk exists"],
      answerIndex: 0,
      hint: "A decision not to escalate care still needs reasoning.",
      explanation: "High-risk clinical decisions require clear documentation of assessment, reasoning, consultation, plan, and follow-up.",
      wrongExplanations: ["", "That phrase is too vague for a high-risk decision.", "No hospitalization does not mean no documentation.", "Future risk cannot be guaranteed."]
    },
    {
      id: "ethics-hard-11",
      model: "Ethics",
      topic: "Scope and referral",
      difficulty: "hard",
      prompt: "A couple needs intensive substance-use treatment, but the therapist only provides weekly couple counseling. What is the best next step?",
      choices: ["Assess level of care and coordinate referral or adjunctive treatment while managing safety", "Continue weekly couple counseling as the only service", "Tell the sober partner to monitor all use", "Avoid discussing substance use to preserve alliance"],
      answerIndex: 0,
      hint: "Level of care and competence come before routine sessions.",
      explanation: "When needs exceed the current service, the therapist should assess level of care and coordinate appropriate referral or adjunctive care.",
      wrongExplanations: ["", "Weekly couple counseling alone may be inadequate.", "Making a partner the monitor can worsen dynamics and safety.", "Avoiding the issue misses a core treatment and risk concern."]
    },
    {
      id: "ethics-hard-12",
      model: "Ethics",
      topic: "Telehealth jurisdiction",
      difficulty: "hard",
      prompt: "A client travels to another state for two months and wants telehealth sessions. What should the therapist do before continuing?",
      choices: ["Verify practice rules where the client is physically located and plan continuity legally", "Continue because the therapist's office state is all that matters", "Ask the client to hide their location", "Switch to texting to avoid telehealth rules"],
      answerIndex: 0,
      hint: "Client location matters for telehealth practice rules.",
      explanation: "Telehealth across jurisdictions requires verifying applicable rules and planning continuity or referral appropriately.",
      wrongExplanations: ["", "The client's physical location can matter.", "Hiding location is not ethical.", "Changing the medium does not avoid practice rules."]
    },
    {
      id: "ethics-hard-13",
      model: "Ethics",
      topic: "Multiple relationships",
      difficulty: "hard",
      prompt: "A therapist's close friend's child is referred for family therapy. What should the therapist consider first?",
      choices: ["Potential role conflict, confidentiality, objectivity, harm, and referral options", "Accept because friendship improves trust", "Treat the family but discuss it socially with the friend", "Ask the child to keep the friendship secret"],
      answerIndex: 0,
      hint: "Personal relationships can impair judgment and confidentiality.",
      explanation: "The therapist must evaluate multiple relationship risks, objectivity, confidentiality, potential harm, and referral options.",
      wrongExplanations: ["", "Trust does not remove role conflict.", "Social discussion would violate confidentiality.", "Secrecy does not resolve the ethical issue."]
    },
    {
      id: "ethics-hard-14",
      model: "Ethics",
      topic: "Minor consent",
      difficulty: "hard",
      prompt: "Separated parents disagree about whether their minor child can receive therapy. What should the therapist do first?",
      choices: ["Review legal authority, consent requirements, custody documents, and agency policy before treatment", "Treat the child based only on the first parent's request", "Ask the child to decide the legal issue", "Ignore the disagreement to preserve rapport"],
      answerIndex: 0,
      hint: "Authority to consent may be legal and document-based.",
      explanation: "Minor consent with separated parents requires attention to legal authority, custody documents, consent, and policy.",
      wrongExplanations: ["", "One parent's request may not be enough depending on authority and law.", "The child should not decide the legal consent question.", "Ignoring consent conflict increases risk."]
    },
    {
      id: "ethics-hard-15",
      model: "Ethics",
      topic: "Confidentiality limits",
      difficulty: "hard",
      prompt: "A client asks for absolute confidentiality before disclosing something dangerous. What is the best therapist response?",
      choices: ["Explain confidentiality and its limits before inviting disclosure", "Promise absolute secrecy to build trust", "Refuse to continue the session", "Say limits only apply after paperwork is signed"],
      answerIndex: 0,
      hint: "Do not promise what you cannot ethically keep.",
      explanation: "Therapists should explain confidentiality limits clearly and avoid promises of absolute secrecy.",
      wrongExplanations: ["", "Absolute secrecy may conflict with safety and law.", "Refusal without explanation is not the best first step.", "Limits exist as part of ethical and legal practice, not only paperwork."]
    },
    {
      id: "ethics-hard-16",
      model: "Ethics",
      topic: "Records request",
      difficulty: "hard",
      prompt: "One member of a family therapy case requests the entire record. Other members object. What should the therapist do?",
      choices: ["Follow applicable law, consent agreements, record policy, and seek consultation if needed", "Release everything immediately to whoever asks first", "Destroy the record to avoid conflict", "Let the family vote on legal access"],
      answerIndex: 0,
      hint: "Family records can involve several rights and duties.",
      explanation: "Family record requests require careful handling of law, consent, policy, confidentiality, and consultation when needed.",
      wrongExplanations: ["", "Immediate release can violate others' rights or policy.", "Destroying records is unethical and risky.", "A vote does not replace legal and ethical requirements."]
    },
    {
      id: "ethics-hard-17",
      model: "Ethics",
      topic: "Abandonment",
      difficulty: "hard",
      prompt: "A therapist decides a high-conflict client is too difficult and wants to stop treatment immediately. What is required ethically?",
      choices: ["Plan clinically appropriate termination, referrals, crisis coverage if needed, and documentation", "Stop all contact without notice", "Tell the client they are impossible to help", "Delete records to end responsibility"],
      answerIndex: 0,
      hint: "Ending care still requires care.",
      explanation: "Therapists should avoid abandonment through appropriate termination planning, referrals, coverage, and documentation.",
      wrongExplanations: ["", "Abruptly stopping can be abandonment.", "Shaming the client is harmful and unprofessional.", "Deleting records is unethical."]
    },
    {
      id: "ethics-hard-18",
      model: "Ethics",
      topic: "Research and publication",
      difficulty: "hard",
      prompt: "A therapist wants to publish a detailed case example from therapy. What is most important?",
      choices: ["Protect confidentiality through valid consent or thorough de-identification consistent with ethics and law", "Publish it if the therapist changes the first name", "Use the story because it is educational", "Ask readers not to identify the client"],
      answerIndex: 0,
      hint: "Educational value does not erase confidentiality.",
      explanation: "Case publication requires strong confidentiality protection, appropriate consent or de-identification, and legal/ethical compliance.",
      wrongExplanations: ["", "Changing a first name alone is usually not enough.", "Educational value does not remove confidentiality duties.", "Reader promises are not adequate protection."]
    },
    {
      id: "ethics-hard-19",
      model: "Ethics",
      topic: "Gifts",
      difficulty: "hard",
      prompt: "A client brings an expensive gift at termination and says refusing it would be deeply insulting in their culture. What is the best response?",
      choices: ["Explore meaning, cultural context, value, boundaries, and potential harm before deciding", "Accept every gift to respect culture", "Reject it immediately and shame the client", "Accept it secretly without documenting the reasoning"],
      answerIndex: 0,
      hint: "Gift decisions need context, boundaries, and documentation.",
      explanation: "The therapist should consider culture, meaning, value, boundary risk, exploitation, harm, and documentation.",
      wrongExplanations: ["", "Culture matters, but acceptance is not automatic.", "Shaming can harm the relationship and misses cultural meaning.", "Secret acceptance increases ethical risk."]
    },
    {
      id: "ethics-hard-20",
      model: "Ethics",
      topic: "Crisis coordination",
      difficulty: "hard",
      prompt: "A client at high suicide risk refuses permission to contact any support person. What should the therapist do?",
      choices: ["Assess imminent risk and follow safety, emergency, legal, and ethical duties even if confidentiality limits apply", "Respect refusal in every circumstance and end the session", "Ask the client to promise not to die and do nothing else", "Avoid documenting to protect privacy"],
      answerIndex: 0,
      hint: "Imminent risk can activate confidentiality limits and emergency duties.",
      explanation: "High imminent risk may require safety actions, emergency care, consultation, and documentation even when the client refuses ordinary releases.",
      wrongExplanations: ["", "Autonomy matters, but imminent risk can require protective steps.", "A promise alone is not adequate risk management.", "Risk decisions must be documented."]
    },
    {
      id: "compare-hard-2",
      model: "Comparison",
      topic: "Model selection",
      difficulty: "hard",
      prompt: "A question asks for the most EFT-consistent next move after a partner accesses fear of abandonment. Which answer best fits?",
      choices: ["Heighten and organize the emotion, then shape a safe enactment with the partner", "Ask for a three-generation family diagram as the immediate next move", "Prescribe the symptom as a paradox", "Interpret transference toward the therapist"],
      answerIndex: 0,
      hint: "EFT turns present emotion into new attachment interaction.",
      explanation: "EFT deepens primary emotion and uses enactments to create new responsive bonding experiences.",
      wrongExplanations: [
        "",
        "A genogram is more Bowen-consistent and not the immediate EFT move here.",
        "Symptom prescription is strategic, not EFT.",
        "Transference interpretation is not the EFT answer being tested."
      ]
    },
    {
      id: "compare-hard-3",
      model: "Comparison",
      topic: "Risk before model",
      difficulty: "hard",
      prompt: "An exam item includes active child abuse disclosure and then asks which family therapy model intervention to use. What should you prioritize?",
      choices: ["Mandated reporting and immediate safety before model-specific technique", "A Bowen genogram before any safety step", "An EFT enactment with the alleged abuser", "Ignoring the disclosure until the family confirms it together"],
      answerIndex: 0,
      hint: "Risk and law outrank routine model technique.",
      explanation: "When mandated safety concerns appear, legal and ethical duties take priority over model-specific interventions.",
      wrongExplanations: [
        "",
        "A genogram does not replace mandated reporting and safety planning.",
        "An enactment could be unsafe and ignores mandated duties.",
        "Waiting can increase risk and violate reporting obligations."
      ]
    }
  ];

  var scenarios = [
    {
      id: "scenario-bowen-parents-teen",
      title: "The Grade Monitor",
      difficulty: "easy",
      clientType: "Family",
      presentingProblem: "Parents argue about money and then become intensely focused on their teen's grades.",
      prompt: "Two parents bring in a 15-year-old because his grades dropped. In the session, the parents interrupt each other, then both turn to the teen and demand that he explain why he is not trying. The teen says, 'I guess I am the family problem.'",
      choices: {
        conceptualization: ["The teen alone lacks motivation", "A triangle may be stabilizing parent tension", "The family needs only a stricter homework contract", "The therapist should decide which parent is right"],
        therapistRole: ["Coach observation of the pattern while staying detriangled", "Take the teen's side against both parents", "Push the parents into a vulnerability enactment immediately", "Avoid asking about family context"],
        intervention: ["Use process questions and a family diagram", "Use only punishment and reward charts", "Prescribe more arguing", "Interpret dream symbols"],
        nextStep: ["Assess the interaction sequence and each person's part in it", "Tell the teen to apologize", "Ask one parent to leave treatment", "End treatment because grades are not relational"],
        ethicsRisk: ["Maintain balanced alliance and avoid scapegoating", "Promise the parents the teen's grades will improve", "Keep no records to reduce conflict", "Meet secretly with one parent as the default plan"]
      },
      idealSelections: { conceptualization: 1, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Names the relational pattern rather than blaming the teen.",
        therapistRole: "Keeps the therapist out of the triangle.",
        intervention: "Uses Bowen-consistent process work.",
        nextStep: "Assesses sequence before intervention.",
        ethicsRisk: "Protects balanced alliance."
      },
      modelAnswer: "A strong Bowen response would frame the teen's symptom in relation to the parents' anxious pattern without blaming anyone. The therapist would stay calm and detriangled, ask process questions about what happens before and after grade conversations, and consider a family diagram to identify patterns across generations. The next step is to help each member observe their part in the sequence and support more thoughtful, less reactive responses.",
      checklist: [
        { label: "Names triangle or scapegoating risk", keywords: ["triangle", "scapegoat", "identified patient"] },
        { label: "Uses process questions", keywords: ["process question", "sequence", "pattern"] },
        { label: "Mentions balanced alliance", keywords: ["balanced alliance", "neutral", "detriangled"] },
        { label: "Avoids blaming the teen", keywords: ["not blame", "avoid blame", "without blaming"] }
      ],
      improvementTips: ["Name the pattern before choosing an intervention.", "Use Bowen language: triangle, process, differentiation, family diagram.", "Avoid answers that make one person the whole problem."]
    },
    {
      id: "scenario-eft-pursue-withdraw",
      title: "Late From Work",
      difficulty: "easy",
      clientType: "Couple",
      presentingProblem: "One partner criticizes and pursues; the other shuts down and withdraws.",
      prompt: "A couple says every evening becomes a fight. Taylor asks repeated questions about why Jordan is late. Jordan gets quiet, looks at the floor, and says, 'Nothing I say works.' Taylor says, 'You do not care about me.'",
      choices: {
        conceptualization: ["A pursue-withdraw negative cycle is blocking attachment safety", "Jordan is the only problem", "The couple needs a genogram before any emotional work", "The conflict proves the relationship should end"],
        therapistRole: ["Track the cycle and validate each partner's protective strategy", "Judge who started it", "Tell them to stop having emotions", "Focus only on legal advice"],
        intervention: ["Reflect primary emotion and reframe the cycle as the enemy", "Prescribe more lateness", "Ask for a detailed budget first", "Debate the facts of each evening"],
        nextStep: ["Help each partner access softer fears and needs", "Move immediately to termination", "Assign blame to the pursuer", "Avoid any in-session interaction"],
        ethicsRisk: ["Assess safety and coercion while building alliance", "Ignore intimidation if no one uses the word abuse", "Guarantee full repair in one session", "Tell friends about the case"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Frames the recurring cycle in attachment terms.",
        therapistRole: "Uses EFT attunement and validation.",
        intervention: "Targets primary emotion and the cycle.",
        nextStep: "Moves toward softer attachment needs.",
        ethicsRisk: "Keeps safety assessment active."
      },
      modelAnswer: "An EFT response would identify the pursue-withdraw cycle and validate that both partners are trying to manage disconnection. The therapist would slow the process, reflect the fear under Taylor's criticism and the helplessness under Jordan's withdrawal, then reframe the cycle as the shared enemy. If safety is adequate, the therapist can help them share softer emotions and attachment needs in session.",
      checklist: [
        { label: "Identifies pursue-withdraw cycle", keywords: ["pursue", "withdraw", "cycle"] },
        { label: "Accesses primary emotion", keywords: ["primary emotion", "softer", "fear", "vulnerable"] },
        { label: "Uses attachment reframe", keywords: ["attachment", "disconnection", "cycle as the enemy"] },
        { label: "Mentions safety assessment", keywords: ["safety", "coercion", "risk"] }
      ],
      improvementTips: ["In EFT, do not make one partner the villain.", "Move from reactive emotion to primary emotion.", "Remember that couple work still requires safety screening."]
    },
    {
      id: "scenario-ethics-minor-safety",
      title: "The Secret",
      difficulty: "medium",
      clientType: "Family",
      presentingProblem: "A minor discloses current harm and asks the therapist not to tell.",
      prompt: "During a family session, a 13-year-old asks to speak privately and reports current physical abuse by a caregiver. The youth says, 'Please do not tell anyone or it will get worse.'",
      choices: {
        conceptualization: ["A mandated safety concern is present", "This is only normal adolescent conflict", "The therapist should keep the secret no matter what", "This is primarily a differentiation exercise"],
        therapistRole: ["Explain limits, assess immediate safety, document, and report as required", "Promise absolute secrecy", "Use a vulnerability enactment with the alleged abuser first", "Wait until the next annual review"],
        intervention: ["Follow mandated reporting law and create a safety plan", "Ignore the disclosure unless a parent confirms it", "Ask the youth to solve it alone", "Discuss grades instead"],
        nextStep: ["Consult/report according to law and agency policy", "Delete the note", "Ask social media followers for advice", "Tell the family there are no confidentiality limits"],
        ethicsRisk: ["Confidentiality limits, documentation, and safety", "Whether the therapist likes conflict", "The family's preference to avoid paperwork", "No ethical issue is present"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Recognizes safety and mandated reporting.",
        therapistRole: "Uses ethical and legal duties before model technique.",
        intervention: "Reports and safety plans.",
        nextStep: "Includes consultation or agency policy when appropriate.",
        ethicsRisk: "Names confidentiality limits and documentation."
      },
      modelAnswer: "The best response is to treat this as a safety and mandated reporting issue. The therapist should explain confidentiality limits in developmentally appropriate language, assess immediate danger, document the disclosure and clinical reasoning, consult according to policy when needed, and make the required report under applicable law. A model-specific intervention does not replace legal and ethical duties.",
      checklist: [
        { label: "Mandated reporting", keywords: ["mandated", "report", "law"] },
        { label: "Safety assessment", keywords: ["safety", "immediate danger", "risk"] },
        { label: "Documentation", keywords: ["document", "records", "note"] },
        { label: "Confidentiality limits", keywords: ["confidentiality", "limits", "not absolute"] }
      ],
      improvementTips: ["When safety and law appear, handle them before theory technique.", "Do not promise secrecy when reporting duties may apply.", "Include documentation and consultation in ethics answers."]
    },
    {
      id: "scenario-bowen-cutoff",
      title: "No Contact Holiday",
      difficulty: "medium",
      clientType: "Individual",
      presentingProblem: "An adult client wants less family reactivity without repeating emotional cutoff.",
      prompt: "Maya has not spoken to her parents for two years. A holiday invitation arrives and she says, 'If I go, I will become a child again. If I do not go, I feel guilty for weeks.' She wants to decide from a steadier place.",
      choices: {
        conceptualization: ["Emotional cutoff and low differentiation are central", "The therapist should tell Maya what to choose", "Only the parents need therapy", "This is unrelated to family history"],
        therapistRole: ["Coach an I-position and thoughtful contact plan", "Join Maya in blaming her parents", "Create an EFT enactment with no preparation", "Give legal custody advice"],
        intervention: ["Explore family diagram, triggers, and process questions", "Use only exposure flooding", "Demand immediate reconciliation", "Avoid discussing family patterns"],
        nextStep: ["Clarify goals for contact and likely triangles", "Call her parents without consent", "Tell her guilt means she must attend", "Cancel therapy until after the holiday"],
        ethicsRisk: ["Respect autonomy and avoid imposing the therapist's values", "Guarantee family repair", "Share Maya's story with relatives", "No consent is needed for collateral contact"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Names cutoff and differentiation.",
        therapistRole: "Supports autonomy through coaching.",
        intervention: "Uses Bowen family-of-origin tools.",
        nextStep: "Plans contact thoughtfully.",
        ethicsRisk: "Avoids value imposition."
      },
      modelAnswer: "A Bowen-informed plan would explore emotional cutoff, differentiation, and the predictable family process around contact. The therapist would coach Maya to define an I-position, anticipate triangles, and choose contact or noncontact from thoughtful principle rather than reactivity. The therapist should respect Maya's autonomy and avoid pushing reconciliation or cutoff as the correct answer.",
      checklist: [
        { label: "Emotional cutoff", keywords: ["cutoff", "distance", "avoidance"] },
        { label: "Differentiation or I-position", keywords: ["differentiation", "i-position", "self-definition"] },
        { label: "Process questions", keywords: ["process", "pattern", "trigger"] },
        { label: "Autonomy", keywords: ["autonomy", "choice", "values"] }
      ],
      improvementTips: ["Bowen does not equal forcing family contact.", "Differentiate thoughtful distance from reactive cutoff.", "Avoid making the therapist the decision-maker."]
    },
    {
      id: "scenario-eft-attachment-injury",
      title: "The Anniversary Fight",
      difficulty: "medium",
      clientType: "Couple",
      presentingProblem: "An old betrayal is triggered during conflict and blocks repair.",
      prompt: "Sam forgot an anniversary dinner a year after an affair was disclosed. Lee says, 'It proves I was never important.' Sam says, 'No matter what I do, I am already convicted.' Both want to repair but keep escalating.",
      choices: {
        conceptualization: ["An attachment injury is shaping the cycle", "Only calendar skills are needed", "A triangle with a child is the only issue", "The therapist should decide if divorce is best"],
        therapistRole: ["Validate injury, track cycle, and pace emotional risk", "Rush forgiveness", "Tell Lee to stop feeling hurt", "Avoid accountability"],
        intervention: ["Access hurt, remorse, longing, and create a careful enactment", "Use only a reward chart", "Start with dream interpretation", "Ask them to argue louder"],
        nextStep: ["Stabilize the cycle before deeper repair work", "Force immediate physical closeness", "Ignore the affair history", "End the session when emotion appears"],
        ethicsRisk: ["Assess safety, coercion, and consent for couple work", "Guarantee reconciliation", "Keep secret side alliances", "Minimize emotional harm"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Recognizes attachment injury and cycle.",
        therapistRole: "Balances validation, pacing, and accountability.",
        intervention: "Uses EFT emotional processing and enactment.",
        nextStep: "De-escalates before deep repair.",
        ethicsRisk: "Keeps safety and consent active."
      },
      modelAnswer: "An EFT response would recognize the anniversary as a trigger for an attachment injury. The therapist would validate Lee's hurt and Sam's trapped position while keeping accountability visible. The work should slow and stabilize the cycle, access primary emotions such as fear, shame, hurt, longing, and remorse, then carefully structure new responsive interactions when both partners can tolerate the risk.",
      checklist: [
        { label: "Attachment injury", keywords: ["attachment injury", "betrayal", "injury"] },
        { label: "Cycle de-escalation", keywords: ["de-escalate", "cycle", "stabilize"] },
        { label: "Primary emotions", keywords: ["hurt", "shame", "fear", "longing", "remorse"] },
        { label: "Paced enactment", keywords: ["enactment", "pace", "responsive"] }
      ],
      improvementTips: ["Do not skip accountability when naming the cycle.", "Repair work needs pacing, not forced forgiveness.", "Use emotion and attachment language in EFT answers."]
    },
    {
      id: "scenario-systemic-culture",
      title: "Whose Family Rules",
      difficulty: "hard",
      clientType: "Couple",
      presentingProblem: "A couple is stuck between cultural expectations, boundaries, and alliance pressure.",
      prompt: "Nia and Alex argue about Alex's parents visiting every weekend. Nia experiences the visits as intrusive. Alex says refusing visits would be disrespectful in his family. Both feel the therapist will judge their culture or their boundaries.",
      choices: {
        conceptualization: ["A relational and cultural context issue needs careful assessment", "One culture is clearly wrong", "Only individual diagnosis matters", "The therapist should impose their own family values"],
        therapistRole: ["Maintain cultural humility and balanced alliance", "Side with the partner who sounds more independent", "Avoid culture to stay neutral", "Give a universal rule for all families"],
        intervention: ["Use circular questions about meaning, loyalty, boundaries, and impact", "Tell them to cut off all relatives", "Demand immediate compliance with one partner", "Ignore extended family patterns"],
        nextStep: ["Co-create goals that respect values, context, and relational needs", "Declare a winner", "Document only one partner's view", "Refer because culture was mentioned"],
        ethicsRisk: ["Bias, informed consent, and value imposition", "No ethics issue can exist", "The therapist's preference is the clinical standard", "Confidentiality no longer applies"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Includes culture, context, and relationship pattern.",
        therapistRole: "Maintains humility and balanced alliance.",
        intervention: "Uses systemic questions rather than imposed values.",
        nextStep: "Builds goals from the couple's values.",
        ethicsRisk: "Recognizes bias and value imposition."
      },
      modelAnswer: "A strong LMFT response would assess the relational pattern and the cultural meanings attached to family visits, loyalty, privacy, and respect. The therapist should maintain balanced alliance, avoid imposing personal values, and ask circular questions that help both partners understand impact and meaning. Treatment goals should be co-created around workable boundaries and connection that fit the couple's values and safety.",
      checklist: [
        { label: "Cultural humility", keywords: ["culture", "cultural humility", "values"] },
        { label: "Balanced alliance", keywords: ["balanced alliance", "both partners", "neutral"] },
        { label: "Circular questions", keywords: ["circular", "meaning", "impact"] },
        { label: "Avoids value imposition", keywords: ["value imposition", "bias", "avoid imposing"] }
      ],
      improvementTips: ["Do not confuse systemic neutrality with ignoring culture.", "Name both meanings and interaction patterns.", "Exam answers often reward humility plus concrete assessment."]
    },
    {
      id: "scenario-hard-crisis-couple",
      title: "The Text Message",
      difficulty: "hard",
      clientType: "Couple",
      presentingProblem: "A routine couple session reveals self-harm risk and substance use.",
      prompt: "During a session about communication, Priya shows texts where Morgan wrote, 'I cannot do this anymore. You will be sorry when I am gone.' Morgan says they were drunk and did not mean it. Priya is afraid to leave Morgan alone.",
      choices: {
        conceptualization: ["A crisis risk assessment is required", "This is only a communication skills issue", "The therapist should ignore it because Morgan denies intent", "This is best handled by a genogram only"],
        therapistRole: ["Assess suicide risk, substance use, protective factors, and level of care", "Continue the planned active listening exercise", "Tell Priya to monitor Morgan without a plan", "Promise secrecy about risk"],
        intervention: ["Develop safety steps and coordinate higher care if indicated", "Use a romantic homework assignment", "Ask them to debate the text", "Wait until next month"],
        nextStep: ["Document risk assessment and clinical decisions", "Erase the texts", "End without resources", "Avoid consultation"],
        ethicsRisk: ["Duty of care, confidentiality limits, documentation, and referral", "No risk if the client says it was a joke", "Only one partner's comfort matters", "The therapist's convenience"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Prioritizes crisis assessment.",
        therapistRole: "Assesses risk and level of care.",
        intervention: "Safety plan and coordination.",
        nextStep: "Documents decisions.",
        ethicsRisk: "Names duties and confidentiality limits."
      },
      modelAnswer: "The therapist should pause routine couple work and complete a direct risk assessment, including intent, plan, means, history, intoxication, protective factors, and current safety. Depending on risk, the therapist should create a safety plan, involve emergency or higher-level care, coordinate supports with consent when possible, and document the assessment and decisions. Communication skills can wait until safety is addressed.",
      checklist: [
        { label: "Direct suicide risk assessment", keywords: ["suicide", "risk assessment", "intent", "plan", "means"] },
        { label: "Substance use and level of care", keywords: ["substance", "intoxication", "level of care"] },
        { label: "Safety plan or higher care", keywords: ["safety plan", "emergency", "higher care"] },
        { label: "Documentation", keywords: ["document", "records", "clinical decision"] }
      ],
      improvementTips: ["Crisis content overrides ordinary session goals.", "Denial after the fact does not remove the need for assessment.", "Include documentation and level of care in hard scenario answers."]
    },
    {
      id: "scenario-consent-secret-policy",
      title: "Before We Begin",
      difficulty: "medium",
      clientType: "Couple",
      focus: ["Ethics", "Couple Intake"],
      presentingProblem: "A couple wants therapy, but one partner asks for secret individual contact before the first session.",
      prompt: "Riley emails the therapist before the first couple session and writes, 'Please do not tell Casey I reached out. I need you to know the real story before we come in.' Casey has already completed the intake paperwork and expects couple therapy.",
      intakeNotes: [
        "Both partners are adult clients for the planned couple therapy.",
        "The therapist has not yet reviewed confidentiality, records, or any secrets policy with the couple.",
        "No immediate safety threat is described in the message."
      ],
      clinicalQuestion: "How should the therapist protect informed consent and the couple therapy frame before collecting private information from one partner?",
      redFlags: ["Secret side alliance risk", "Informed consent has not been completed"],
      priorities: ["Clarify the therapy frame", "Review confidentiality and any secrets policy", "Avoid forming an early alliance with only one partner"],
      reflectionPrompts: ["What consent issue appears before treatment starts?", "How can the therapist respond without shaming Riley?", "What policy should be clarified with both partners?"],
      choices: {
        conceptualization: ["Riley is manipulating the therapist, so reject the couple", "A secret side alliance could compromise informed consent and balanced alliance", "The therapist should collect all secrets first", "There is no clinical issue because email is informal"],
        therapistRole: ["Become Riley's private advocate before seeing the couple", "Clarify limits and invite relevant concerns into the agreed couple frame", "Ignore the email permanently", "Tell Casey every detail immediately without reviewing consent"],
        intervention: ["Reply with a brief frame-setting message and review policies with both partners at intake", "Ask Riley for more secret details by email", "Cancel Casey's paperwork", "Begin treatment by diagnosing Casey"],
        nextStep: ["Document the contact and address confidentiality/secrets policy at intake", "Delete the email to avoid complexity", "Promise Riley the email will never affect treatment", "Tell Casey that Riley caused a trust problem"],
        ethicsRisk: ["Informed consent, documentation, confidentiality, and balanced alliance", "Only the therapist's convenience", "No records issue because it was before session", "A need to choose the more believable partner"]
      },
      idealSelections: { conceptualization: 1, therapistRole: 1, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Recognizes the systemic and ethical risk of a secret side alliance.",
        therapistRole: "Protects the couple therapy frame without blaming either partner.",
        intervention: "Uses informed consent before gathering private content.",
        nextStep: "Documents and clarifies policy early.",
        ethicsRisk: "Names the consent, confidentiality, record, and alliance issues."
      },
      modelAnswer: "A strong response would avoid collecting secret clinical details before the couple has agreed to the therapy frame. The therapist can acknowledge Riley's concern, explain that couple therapy requires clear informed consent and confidentiality policies, and invite urgent safety concerns to be shared directly. The therapist should document the contact and review the policy with both partners at the beginning of treatment.",
      checklist: [
        { label: "Informed consent", keywords: ["informed consent", "consent", "therapy frame"] },
        { label: "Secrets policy or confidentiality", keywords: ["secrets policy", "confidentiality", "private information"] },
        { label: "Balanced alliance", keywords: ["balanced alliance", "side alliance", "both partners"] },
        { label: "Documentation", keywords: ["document", "record", "email"] }
      ],
      improvementTips: ["Couple therapy starts with a clear frame.", "Do not gather secret content before consent policies are clear.", "Neutrality means transparent process, not ignoring one partner's concern."]
    },
    {
      id: "scenario-bowen-hospital-room",
      title: "Everyone Calls Elena",
      difficulty: "hard",
      clientType: "Family",
      focus: ["Bowen", "Differentiation"],
      presentingProblem: "An adult child becomes the automatic mediator whenever a parent's health changes.",
      prompt: "Elena is 34 and says her phone rings all day when her father has medical appointments. Her mother asks Elena to calm her brother, her brother asks Elena to convince their mother to stop panicking, and Elena cancels work to manage everyone. She says, 'If I do not answer, I feel like I am abandoning them.'",
      intakeNotes: [
        "The father has a chronic illness but no current emergency is described.",
        "Elena reports migraines and conflict with her spouse after family calls.",
        "This pattern also happened during her grandparents' illnesses."
      ],
      clinicalQuestion: "How can Elena observe the multigenerational triangle and choose contact from an I-position instead of automatic rescue?",
      redFlags: ["Caregiver stress", "Possible family medical crisis should still be monitored"],
      priorities: ["Map the triangle", "Support differentiation", "Avoid coaching emotional cutoff as the solution"],
      reflectionPrompts: ["Who is being triangulated?", "What would an I-position sound like?", "How could the therapist avoid becoming another rescuer?"],
      choices: {
        conceptualization: ["Elena is selfish for wanting boundaries", "The illness is unrelated to family process", "A multigenerational triangle and fusion pattern are active", "The therapist should diagnose the mother by phone"],
        therapistRole: ["Coach Elena to observe process and define her part", "Tell Elena to block everyone forever", "Call the family and take over coordination", "Argue that her family is wrong"],
        intervention: ["Build a family diagram and practice an I-position for calls", "Use only emotional catharsis", "Start an enactment between people not present", "Tell Elena which medical choices to make"],
        nextStep: ["Differentiate practical help from anxiety-driven rescuing", "Require immediate cutoff", "Have Elena secretly record family calls", "Promise her migraines will stop"],
        ethicsRisk: ["Respect autonomy and avoid giving medical or legal directives", "No consent is needed to call relatives", "The therapist should manage the father's care", "Documentation is optional for family work"]
      },
      idealSelections: { conceptualization: 2, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Identifies fusion, triangles, and multigenerational process.",
        therapistRole: "Uses Bowen coaching rather than rescuing.",
        intervention: "Selects family diagram and I-position practice.",
        nextStep: "Distinguishes thoughtful contact from reactive rescuing.",
        ethicsRisk: "Avoids overstepping into medical direction or collateral contact without consent."
      },
      modelAnswer: "A Bowen-informed answer would see Elena as part of an anxious multigenerational triangle, not as the family's problem or savior. The therapist would coach her to map the pattern, notice how anxiety moves through the family, and define an I-position about what help she can offer. The goal is more thoughtful contact and differentiation, not automatic rescuing or reactive cutoff.",
      checklist: [
        { label: "Triangle", keywords: ["triangle", "triangulated", "three-person"] },
        { label: "Differentiation or I-position", keywords: ["differentiation", "i-position", "self-definition"] },
        { label: "Multigenerational pattern", keywords: ["multigenerational", "generations", "family diagram"] },
        { label: "Avoids rescuing or cutoff", keywords: ["rescuing", "cutoff", "thoughtful contact"] }
      ],
      improvementTips: ["Bowen case answers should name how anxiety moves through the system.", "Boundaries are strongest when framed as differentiation, not punishment.", "Do not let the therapist become the family's new coordinator."]
    },
    {
      id: "scenario-efft-bedroom-door",
      title: "Behind the Bedroom Door",
      difficulty: "medium",
      clientType: "Family",
      focus: ["EFT", "Parent-Teen"],
      presentingProblem: "A parent and teen are caught in criticism, withdrawal, and fears of rejection.",
      prompt: "A parent says, 'Every time I ask about school, Kai slams the bedroom door.' Kai says, 'You only talk to me when I mess up.' The parent tears up and says, 'I am scared I am losing my kid.' Kai looks away but stops arguing.",
      intakeNotes: [
        "No current self-harm or abuse is reported.",
        "The parent works nights and feels guilty about being unavailable.",
        "Kai recently changed friend groups and has become more private."
      ],
      clinicalQuestion: "How can the therapist help the family see the cycle and create a safer parent-teen interaction?",
      redFlags: ["Adolescent risk should be screened even if not currently reported"],
      priorities: ["Track the negative cycle", "Validate both protective strategies", "Access softer emotion before problem solving"],
      reflectionPrompts: ["What is the cycle?", "What softer emotion appears in the parent?", "What would be a safe enactment?"],
      choices: {
        conceptualization: ["A parent-teen attachment cycle is escalating criticism and withdrawal", "Kai is simply disrespectful", "The parent should stop caring", "The school is the only client"],
        therapistRole: ["Track and validate the cycle for both parent and teen", "Lecture Kai on obedience", "Tell the parent their fear is irrational", "Avoid emotion and focus only on grades"],
        intervention: ["Reflect fear and longing, then set up a small, safe enactment", "Force Kai to apologize immediately", "Use a genogram only and avoid the present interaction", "Prescribe door slamming"],
        nextStep: ["Help the parent share fear as care and help Kai respond within tolerance", "Demand instant vulnerability", "Tell the family to ignore school", "Terminate because teens withdraw"],
        ethicsRisk: ["Screen risk and maintain developmentally appropriate consent/confidentiality", "Promise the parent full access to all teen disclosures", "Ignore adolescent autonomy", "No confidentiality discussion is needed"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Frames the pattern as an attachment cycle rather than teen blame.",
        therapistRole: "Balances alliance and validates both positions.",
        intervention: "Uses EFT emotional deepening and enactment.",
        nextStep: "Paces parent-teen vulnerability.",
        ethicsRisk: "Names adolescent risk screening and confidentiality boundaries."
      },
      modelAnswer: "An EFT family response would track the parent criticism and teen withdrawal cycle while validating both sides. The parent's fear of losing Kai is a softer attachment emotion that can be shaped into a safer message of care. The therapist should pace the work, screen adolescent risk, clarify confidentiality, and create a small enactment only when Kai can tolerate the contact.",
      checklist: [
        { label: "Negative cycle", keywords: ["cycle", "criticism", "withdrawal"] },
        { label: "Softer attachment emotion", keywords: ["fear", "care", "longing", "attachment"] },
        { label: "Paced enactment", keywords: ["enactment", "pace", "safe"] },
        { label: "Adolescent confidentiality or risk", keywords: ["confidentiality", "risk", "adolescent", "teen"] }
      ],
      improvementTips: ["For EFFT-style answers, name the family cycle before skills training.", "Look for softening moments and use them carefully.", "Teen cases still need consent, confidentiality, and risk awareness."]
    },
    {
      id: "scenario-systemic-co-parenting",
      title: "Two Homes, One Treatment",
      difficulty: "hard",
      clientType: "Family",
      focus: ["Systemic", "Co-parenting"],
      presentingProblem: "Separated co-parents want the therapist to write a custody recommendation while treating their child.",
      prompt: "A 9-year-old is referred for stomachaches before transitions between homes. Each parent separately tells the therapist, 'You will see the other parent is the problem. We need you to write that in a letter for court.'",
      intakeNotes: [
        "The therapist was contacted for therapy, not a forensic evaluation.",
        "Both parents have legal decision-making rights according to intake paperwork.",
        "The child becomes quiet when either parent criticizes the other."
      ],
      clinicalQuestion: "How should the therapist protect the child's treatment role while managing legal-system pressure?",
      redFlags: ["Role conflict between therapy and forensic opinion", "Child may be triangulated in parent conflict"],
      priorities: ["Clarify role and consent", "Avoid forensic opinions outside competence/role", "Assess the child's symptoms systemically"],
      reflectionPrompts: ["What is the therapist's role?", "What should be clarified in consent?", "How can the child be protected from triangulation?"],
      choices: {
        conceptualization: ["The child may be carrying transition anxiety inside a co-parent conflict", "The therapist should immediately decide custody", "The stomachaches prove one parent is lying", "Court pressure means therapy cannot happen under any conditions"],
        therapistRole: ["Clarify treatment role, limits of records, and court-letter boundaries", "Become an expert witness without changing consent", "Secretly advise one parent", "Promise the child nothing will be documented"],
        intervention: ["Assess transition patterns and support co-parent communication boundaries", "Write a custody recommendation after one session", "Ask the child to choose a preferred parent", "Ignore the legal context"],
        nextStep: ["Review consent, releases, documentation, and referral options if forensic services are needed", "Send a letter blaming one parent", "Delete parent messages", "Tell the child to stop having stomachaches"],
        ethicsRisk: ["Role conflict, informed consent, records, and possible court involvement", "Only scheduling", "No risk if both parents are angry", "The therapist's opinion is automatically forensic evidence"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Uses a systemic formulation of symptoms and transition stress.",
        therapistRole: "Clarifies treatment versus forensic roles.",
        intervention: "Protects the child and works with transition patterns.",
        nextStep: "Reviews consent and documentation before court-related action.",
        ethicsRisk: "Names role conflict, records, and legal-system risk."
      },
      modelAnswer: "The therapist should clarify that the current role is treatment, not custody evaluation. A systemic formulation would explore how transitions, parent conflict, and child anxiety interact. Before providing any records or letters, the therapist should review informed consent, releases, documentation, legal requirements, and role limits. If a forensic opinion is needed, referral to an appropriate evaluator may be necessary.",
      checklist: [
        { label: "Treatment versus forensic role", keywords: ["forensic", "treatment role", "custody"] },
        { label: "Informed consent and releases", keywords: ["consent", "release", "records"] },
        { label: "Triangulation or co-parent conflict", keywords: ["triangulation", "co-parent", "transition"] },
        { label: "Systemic child symptom formulation", keywords: ["systemic", "stomachache", "anxiety", "pattern"] }
      ],
      improvementTips: ["Legal requests change the risk level of a case.", "Do not turn therapy into custody evaluation by accident.", "Protect the child's treatment from parent alliance pressure."]
    },
    {
      id: "scenario-eft-deployment",
      title: "Coming Home Different",
      difficulty: "hard",
      clientType: "Couple",
      focus: ["EFT", "Trauma-Informed"],
      presentingProblem: "A couple wants reconnection after deployment, but trauma symptoms and anger are destabilizing sessions.",
      prompt: "After deployment, Marcus startles easily, sleeps poorly, and leaves the room when Dana asks what happened overseas. Dana follows him and says, 'I waited for you, and now you are not here.' Marcus says, 'If you keep pushing, I will explode.'",
      intakeNotes: [
        "Marcus denies intent to harm Dana but reports punching a wall last month.",
        "Dana says she is not afraid of Marcus but feels lonely and rejected.",
        "Neither partner has had a recent trauma-specific assessment."
      ],
      clinicalQuestion: "How can the therapist combine attachment-cycle work with safety, pacing, and scope-of-competence decisions?",
      redFlags: ["Wall punching and threat language require safety assessment", "Possible trauma symptoms require competence or referral planning"],
      priorities: ["Assess safety and coercion", "Pace emotional work within tolerance", "Consider trauma-informed referral or coordination"],
      reflectionPrompts: ["What must be assessed before deeper enactments?", "What is the pursue-withdraw cycle?", "How does competence affect the plan?"],
      choices: {
        conceptualization: ["A pursue-withdraw cycle may be organized around trauma symptoms and attachment fear", "Dana alone is too needy", "Marcus should be forced to disclose details immediately", "This is unrelated to safety"],
        therapistRole: ["Assess safety, stabilize the cycle, and pace attachment work", "Push for full trauma narration in the couple session", "Ignore the wall punching because no one was hit", "Tell Dana to stop needing connection"],
        intervention: ["Track the cycle, validate protection, assess trauma/risk, and use small enactments only when safe", "Start intense exposure without training", "Ask Dana to follow Marcus harder", "Use only a worksheet about chores"],
        nextStep: ["Screen for violence, trauma symptoms, substance use, and level of care needs", "Proceed directly to deep vulnerability", "Promise EFT will cure trauma", "Avoid consultation"],
        ethicsRisk: ["Safety, competence, referral, and informed consent", "No ethical risk if the couple requested EFT", "The therapist can practice any specialty if confident", "Documentation can wait until treatment ends"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Combines attachment cycle and trauma-informed formulation.",
        therapistRole: "Prioritizes safety, stabilization, and pacing.",
        intervention: "Avoids premature intense trauma or attachment work.",
        nextStep: "Assesses violence, trauma, substance use, and level of care.",
        ethicsRisk: "Names competence, referral, consent, safety, and documentation."
      },
      modelAnswer: "A strong answer would identify a pursue-withdraw cycle shaped by trauma symptoms and attachment fear, while not rushing into deep vulnerability. The therapist should assess safety, coercion, wall punching, substance use, trauma symptoms, and level of care. If within competence and safety allows, EFT work can proceed with careful pacing and small enactments; otherwise consultation, referral, or coordinated trauma treatment may be needed.",
      checklist: [
        { label: "Pursue-withdraw cycle", keywords: ["pursue", "withdraw", "cycle"] },
        { label: "Safety assessment", keywords: ["safety", "violence", "wall", "coercion"] },
        { label: "Trauma-informed pacing", keywords: ["trauma", "pace", "window of tolerance", "stabilize"] },
        { label: "Competence or referral", keywords: ["competence", "consultation", "referral"] }
      ],
      improvementTips: ["EFT can be trauma-informed, but safety and pacing come first.", "Threat language and property violence should not be skipped.", "Hard cases often require combining model fit with scope-of-practice judgment."]
    },
    {
      id: "scenario-termination-drift",
      title: "Still Coming Every Week",
      difficulty: "medium",
      clientType: "Couple",
      focus: ["Process", "Termination"],
      presentingProblem: "A couple has improved, but treatment continues without clear goals.",
      prompt: "A couple has met their original goals: fights are rare, repair is faster, and both report feeling closer. They keep scheduling weekly sessions because it feels reassuring. The therapist notices sessions have become casual check-ins with no updated treatment plan.",
      intakeNotes: [
        "No current crisis or safety concern is reported.",
        "Both partners say they are nervous about losing support.",
        "The treatment plan has not been updated in two months."
      ],
      clinicalQuestion: "How should the therapist evaluate progress and handle termination or step-down ethically?",
      redFlags: ["Possible dependency on therapy", "Treatment goals may no longer justify weekly care"],
      priorities: ["Evaluate progress", "Update goals or plan termination", "Support maintenance and relapse prevention"],
      reflectionPrompts: ["How should progress be evaluated?", "What does ethical termination include?", "How can gains be consolidated?"],
      choices: {
        conceptualization: ["The therapy process may need consolidation, updated goals, or planned termination", "The therapist should continue forever if sessions feel pleasant", "Improvement means therapy failed", "The couple must stop immediately with no plan"],
        therapistRole: ["Review progress, invite feedback, and discuss step-down or termination", "Avoid the topic to keep income stable", "Tell them they are dependent and shame them", "Create a new crisis to justify therapy"],
        intervention: ["Consolidate gains, plan relapse prevention, and update or close the treatment plan", "Return to intake questions forever", "Ignore treatment goals", "Begin a new model without consent"],
        nextStep: ["Collaboratively decide whether to reduce frequency, set new goals, or terminate", "Keep scheduling without documentation", "End by text with no summary", "Promise they will never fight again"],
        ethicsRisk: ["Beneficence, treatment planning, records, fees, and appropriate termination", "No ethics issue if clients pay", "The therapist's preference controls frequency", "Records should omit progress"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Recognizes the need to evaluate the treatment process.",
        therapistRole: "Uses collaborative progress review.",
        intervention: "Consolidates gains and plans maintenance.",
        nextStep: "Chooses step-down, new goals, or termination based on need.",
        ethicsRisk: "Names treatment planning, fees, documentation, and appropriate termination."
      },
      modelAnswer: "The therapist should review the original goals, evaluate progress with the couple, and discuss whether continued weekly therapy is clinically indicated. If goals are met, treatment can shift to consolidation, relapse prevention, reduced frequency, or planned termination. If new goals are identified, informed consent and the treatment plan should be updated. The therapist should document the reasoning and avoid unnecessary treatment.",
      checklist: [
        { label: "Progress evaluation", keywords: ["progress", "evaluate", "feedback"] },
        { label: "Termination or step-down", keywords: ["termination", "step-down", "reduce frequency"] },
        { label: "Relapse prevention or consolidation", keywords: ["relapse", "consolidate", "maintenance"] },
        { label: "Treatment plan and documentation", keywords: ["treatment plan", "document", "records"] }
      ],
      improvementTips: ["Termination is part of treatment, not an afterthought.", "When goals are met, update the plan or close well.", "Ethical practice includes avoiding unnecessary services."]
    },
    {
      id: "scenario-bowen-wedding-table",
      title: "The Wedding Table",
      difficulty: "easy",
      clientType: "Couple",
      focus: ["Bowen", "Triangles"],
      presentingProblem: "Wedding planning has pulled both families into the couple's conflict.",
      prompt: "Amira and Ben are planning their wedding. Ben's mother calls Amira about seating charts, Amira asks Ben to handle it, and Ben tells Amira she is too sensitive. Amira says, 'Your mom gets more say than I do.' Ben says, 'If I upset my mom, the whole week is ruined.'",
      intakeNotes: [
        "The couple is arguing about wedding decisions but the tension expands quickly to parents.",
        "Ben reports feeling responsible for his mother's emotions.",
        "Amira reports feeling like an outsider in her own relationship."
      ],
      clinicalQuestion: "How can the therapist help the couple see the triangle and define their own position?",
      redFlags: ["Family-of-origin pressure may pull the therapist into taking sides", "No immediate safety issue is reported"],
      priorities: ["Identify the triangle", "Support differentiation", "Keep the therapist out of the family alliance"],
      reflectionPrompts: ["Who is the third point in the triangle?", "What would an I-position sound like for Ben?", "How can Amira ask for connection without blaming?"],
      choices: {
        conceptualization: ["A family-of-origin triangle is shaping the couple's conflict", "Amira is the only problem because she is sensitive", "Ben's mother should become the therapist's main client", "The seating chart is the only clinical issue"],
        therapistRole: ["Coach the couple to observe the pattern and define their own positions", "Tell Ben to obey his mother", "Tell Amira to take over planning", "Refuse to discuss family-of-origin patterns"],
        intervention: ["Use process questions about what happens before and after parent contact", "Prescribe a bigger wedding", "Ask the couple to debate the seating chart until one wins", "Diagnose Ben's mother without meeting her"],
        nextStep: ["Practice an I-position and a couple boundary around planning decisions", "Have the therapist call Ben's mother", "Cancel the wedding", "Avoid discussing anxiety"],
        ethicsRisk: ["Avoid side-taking and respect the couple's autonomy", "Promise the wedding will be conflict-free", "Share session content with the parents", "Ignore consent for collateral contact"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Names the triangle rather than blaming one partner.",
        therapistRole: "Uses Bowen coaching and stays detriangled.",
        intervention: "Uses process questions to slow reactivity.",
        nextStep: "Moves toward differentiation and couple decision-making.",
        ethicsRisk: "Protects autonomy and consent."
      },
      modelAnswer: "A Bowen answer would identify how tension between the couple is stabilized through Ben's mother and how Ben's anxiety about upsetting her affects the couple boundary. The therapist should stay out of the triangle, ask process questions, and coach each partner toward an I-position. The goal is thoughtful contact and clearer couple decision-making, not blaming the mother or forcing cutoff.",
      checklist: [
        { label: "Triangle", keywords: ["triangle", "third point", "mother"] },
        { label: "Differentiation or I-position", keywords: ["differentiation", "i-position", "self-definition"] },
        { label: "Process questions", keywords: ["process", "sequence", "pattern"] },
        { label: "Avoids side-taking", keywords: ["avoid side", "detriangled", "neutral"] }
      ],
      improvementTips: ["Wedding cases often test family-of-origin triangles.", "Do not confuse differentiation with cutting off parents.", "The couple needs a process shift more than a perfect seating chart."]
    },
    {
      id: "scenario-eft-empty-nest",
      title: "The Quiet House",
      difficulty: "medium",
      clientType: "Couple",
      focus: ["EFT", "Life Transition"],
      presentingProblem: "After their youngest child moves out, a couple feels like roommates.",
      prompt: "Luis says, 'We are polite, but there is nothing between us.' Morgan says, 'When I try to talk, Luis jokes or changes the subject.' Luis replies, 'If I admit I miss you, it will sound pathetic.'",
      intakeNotes: [
        "No crisis or violence is reported.",
        "Both partners say they want closeness but do not know how to start.",
        "The empty house has exposed years of emotional distance."
      ],
      clinicalQuestion: "How can the therapist help the couple move from protective distance to safer emotional engagement?",
      redFlags: ["Screen for depression, substance use, and affairs if clinically indicated", "Avoid pushing vulnerability faster than the couple can tolerate"],
      priorities: ["Track the distance-protest cycle", "Access primary emotions", "Create a small bonding interaction"],
      reflectionPrompts: ["What is the protective move?", "What primary emotion is Luis hinting at?", "What enactment would be small enough to try?"],
      choices: {
        conceptualization: ["A distance-protest cycle is protecting against attachment vulnerability", "The couple should only plan more hobbies", "Luis is defective for joking", "The relationship is beyond repair because the children left"],
        therapistRole: ["Track the cycle and validate both partners' protection", "Shame Luis for joking", "Give a lecture on parenting adult children", "Avoid emotion and discuss chores only"],
        intervention: ["Reflect softer longing and set up a small enactment", "Force a long confession immediately", "Use only a family diagram", "Tell Morgan to stop trying"],
        nextStep: ["Help Luis share a manageable piece of longing while Morgan responds", "Assign silence for a month", "Tell them to date other people", "Ignore the empty-nest transition"],
        ethicsRisk: ["Assess safety and keep consent/goals clear", "Promise renewed passion quickly", "Make one partner responsible for all change", "No treatment plan is needed"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Uses EFT cycle and attachment language.",
        therapistRole: "Balances validation and emotional focus.",
        intervention: "Chooses emotional deepening and enactment.",
        nextStep: "Creates a paced bonding exchange.",
        ethicsRisk: "Maintains assessment and realistic goals."
      },
      modelAnswer: "An EFT response would frame the couple's roommate pattern as a protective cycle around attachment vulnerability. Luis uses humor and distance to avoid feeling exposed, while Morgan's reaching can intensify the fear of inadequacy. The therapist should validate both positions, access softer longing and fear, and shape a small enactment where one partner risks a clear emotional message and the other responds.",
      checklist: [
        { label: "Negative cycle", keywords: ["cycle", "distance", "protest"] },
        { label: "Primary emotion", keywords: ["longing", "fear", "vulnerable", "soft"] },
        { label: "Enactment", keywords: ["enactment", "turn", "share"] },
        { label: "Pacing", keywords: ["pace", "small", "tolerate"] }
      ],
      improvementTips: ["Life transitions can reveal attachment cycles.", "EFT answers should move from protective moves to softer emotion.", "Small enactments are usually safer than forced disclosure."]
    },
    {
      id: "scenario-systemic-school-refusal",
      title: "Every Morning at 7:30",
      difficulty: "medium",
      clientType: "Family",
      focus: ["Assessment", "Child"],
      presentingProblem: "A child refuses school and the family morning routine has become a daily crisis.",
      prompt: "Every morning, 10-year-old Noah says his stomach hurts and refuses to get dressed. One parent comforts him and lets him stay home. The other parent yells that everyone is being manipulated. The school reports Noah is academically capable but increasingly absent.",
      intakeNotes: [
        "The stomachaches happen mostly on school mornings.",
        "Parents are divided between comfort and pressure.",
        "No medical evaluation information is available yet."
      ],
      clinicalQuestion: "How should an LMFT assess the symptom pattern without blaming Noah or ignoring possible medical needs?",
      redFlags: ["Medical concerns should be ruled out or coordinated", "School avoidance can involve anxiety, bullying, learning issues, or family stress"],
      priorities: ["Assess across systems", "Create a systemic hypothesis", "Coordinate with caregivers and school as appropriate"],
      reflectionPrompts: ["What systems need assessment?", "What is the family interaction pattern?", "What information is missing before treatment planning?"],
      choices: {
        conceptualization: ["School refusal may be maintained by anxiety, family responses, and school context", "Noah is lying and needs punishment only", "The school alone must fix it", "The parent who comforts him is the only problem"],
        therapistRole: ["Assess medical, family, school, and anxiety factors while balancing alliance", "Pick the stricter parent's side", "Ignore the school context", "Diagnose Noah before gathering data"],
        intervention: ["Use a systemic assessment and coordinate releases for school/medical information", "Tell parents to fight until one wins", "Promise Noah never has to attend school", "Use only couple therapy and exclude the child"],
        nextStep: ["Form a tentative hypothesis and plan gradual, coordinated re-entry if appropriate", "Threaten Noah with therapy failure", "End treatment if he misses one day", "Ignore parent disagreement"],
        ethicsRisk: ["Consent, releases, documentation, and competent child/family assessment", "No consent is needed for school calls", "Records do not matter because Noah is a child", "The therapist can guarantee attendance"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Uses a multi-system formulation.",
        therapistRole: "Balances alliance and broad assessment.",
        intervention: "Uses releases and coordinated assessment.",
        nextStep: "Creates a hypothesis before intervention.",
        ethicsRisk: "Names consent, records, and competence."
      },
      modelAnswer: "A strong LMFT answer would assess the pattern across the child, family morning sequence, school environment, medical concerns, and anxiety. The therapist should avoid labeling Noah as manipulative and avoid siding with one parent. With appropriate releases, coordination with school and medical providers may help form a systemic hypothesis and a treatment plan for consistent, supportive re-entry.",
      checklist: [
        { label: "Multi-system assessment", keywords: ["school", "family", "medical", "systemic"] },
        { label: "Tentative hypothesis", keywords: ["hypothesis", "pattern", "maintained"] },
        { label: "Balanced parent alliance", keywords: ["balanced alliance", "both parents", "avoid siding"] },
        { label: "Consent or releases", keywords: ["release", "consent", "coordinate"] }
      ],
      improvementTips: ["Child symptoms often sit inside family and school patterns.", "Do not skip medical or school assessment.", "Parents need a shared plan, not a winner."]
    },
    {
      id: "scenario-ethics-telehealth-state",
      title: "Calling From Campus",
      difficulty: "hard",
      clientType: "Individual",
      focus: ["Ethics", "Telehealth"],
      presentingProblem: "A client leaves the state for college and wants to keep telehealth sessions.",
      prompt: "A client who usually lives locally starts college in another state and asks to continue weekly telehealth. The therapist is unsure whether they are allowed to practice where the client is physically located.",
      intakeNotes: [
        "The client is physically located in another state during sessions.",
        "The therapist has not verified that jurisdiction's practice rules.",
        "The client has been stable but reports rising stress since the move."
      ],
      clinicalQuestion: "What should the therapist verify before continuing telehealth across state lines?",
      redFlags: ["Practicing where not legally permitted can create legal and ethical risk", "Continuity of care still matters during transition"],
      priorities: ["Check jurisdiction rules", "Plan continuity or referral", "Document the decision"],
      reflectionPrompts: ["Where is the client located during service?", "What must be verified legally and ethically?", "How can care be transitioned safely if needed?"],
      choices: {
        conceptualization: ["A jurisdiction and continuity-of-care issue is present", "Telehealth rules never depend on client location", "The client is abandoning therapy", "The therapist should continue secretly"],
        therapistRole: ["Verify law/rules, consult if needed, and discuss options with the client", "Ignore the issue because the relationship is established", "Tell the client to hide their location", "Continue only by text to avoid rules"],
        intervention: ["Check licensing requirements and arrange legal continuation or referral", "Schedule sessions without documentation", "Use a fake local address", "Tell the client stress is not clinical"],
        nextStep: ["Document verification, consultation, informed consent, and transition plan", "Erase location information", "Promise uninterrupted service regardless of law", "Ask the client to decide if it is legal"],
        ethicsRisk: ["Legal practice limits, competence, informed consent, documentation, and abandonment", "No risk if the client requests it", "Only billing matters", "The therapist's home state controls everything"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Recognizes jurisdiction and continuity issues.",
        therapistRole: "Verifies rules and communicates options.",
        intervention: "Uses legal/ethical consultation and referral planning.",
        nextStep: "Documents verification and transition.",
        ethicsRisk: "Names legal practice, consent, documentation, and abandonment concerns."
      },
      modelAnswer: "The therapist should verify the rules where the client is physically located, consult appropriate regulatory or legal guidance when needed, and discuss options with the client. If continued treatment is not permitted, the therapist should plan a clinically appropriate transition or referral while avoiding abandonment. The reasoning, consent discussion, and referral plan should be documented.",
      checklist: [
        { label: "Jurisdiction check", keywords: ["jurisdiction", "state", "location", "legal"] },
        { label: "Consultation or regulation", keywords: ["consult", "board", "rules"] },
        { label: "Continuity or referral", keywords: ["continuity", "referral", "transition"] },
        { label: "Documentation", keywords: ["document", "records", "informed consent"] }
      ],
      improvementTips: ["For telehealth, the client's physical location matters.", "Do not solve legal uncertainty by ignoring it.", "Continuity of care and legal permission both matter."]
    },
    {
      id: "scenario-blended-family-discipline",
      title: "You Are Not My Dad",
      difficulty: "medium",
      clientType: "Family",
      focus: ["Systemic", "Blended Family"],
      presentingProblem: "A stepfamily is fighting about discipline, loyalty, and parent authority.",
      prompt: "A 12-year-old tells his stepfather, 'You are not my dad,' after being grounded. His mother says the stepfather needs to be respected. The stepfather says he feels set up to fail. The biological father criticizes the household rules during phone calls.",
      intakeNotes: [
        "The remarriage happened 14 months ago.",
        "The child moves between two homes on weekends.",
        "Adults disagree about who should enforce discipline."
      ],
      clinicalQuestion: "How should the therapist assess loyalty binds and co-parenting patterns before prescribing discipline changes?",
      redFlags: ["Child may be triangulated between households", "Parent authority and step-parent role need careful pacing"],
      priorities: ["Assess family structure and loyalty binds", "Clarify roles", "Avoid blaming the child"],
      reflectionPrompts: ["What loyalty bind might the child face?", "Who needs to align before discipline changes?", "What would be developmentally respectful?"],
      choices: {
        conceptualization: ["The child may be caught in loyalty binds and unclear household roles", "The child is the only problem", "The stepfather should take full authority immediately", "The biological father should be ignored completely"],
        therapistRole: ["Assess roles, co-parenting, and alliances across households", "Declare one household superior", "Tell the child loyalty is wrong", "Avoid discussing the other home"],
        intervention: ["Clarify parent/step-parent roles and strengthen adult coordination", "Ground the child for therapy resistance", "Let the therapist set household rules", "Demand instant closeness with the stepfather"],
        nextStep: ["Build a paced plan for connection, authority, and consistent expectations", "Force the child to call the stepfather dad", "End contact with the biological father", "Ignore custody or consent boundaries"],
        ethicsRisk: ["Consent, collateral contact, child autonomy, and avoiding value imposition", "No consent is needed for co-parent calls", "The therapist should choose the real parent", "Records should hide household conflict"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Uses a systemic stepfamily formulation.",
        therapistRole: "Assesses roles and alliances without blame.",
        intervention: "Clarifies roles and adult coordination.",
        nextStep: "Paces authority and relationship-building.",
        ethicsRisk: "Names consent, collateral contact, autonomy, and values."
      },
      modelAnswer: "A systemic response would assess the stepfamily transition, loyalty binds, co-parent communication, and the child's developmental needs. The therapist should not frame the child as simply disrespectful. A better plan clarifies the mother's and stepfather's roles, supports adult coordination, respects the child's relationship with both households, and paces step-parent authority alongside relationship-building.",
      checklist: [
        { label: "Loyalty bind", keywords: ["loyalty", "bind", "two homes"] },
        { label: "Role clarity", keywords: ["role", "step-parent", "authority"] },
        { label: "Co-parenting", keywords: ["co-parent", "biological father", "households"] },
        { label: "Consent or collateral", keywords: ["consent", "collateral", "records"] }
      ],
      improvementTips: ["Stepfamily cases often test pacing and role clarity.", "Discipline changes work better after adult alignment.", "Avoid making the child carry adult conflict."]
    },
    {
      id: "scenario-bowen-sibling-estate",
      title: "The House No One Can Sell",
      difficulty: "hard",
      clientType: "Family",
      focus: ["Bowen", "Cutoff"],
      presentingProblem: "Adult siblings are locked in conflict over a family home after a parent's death.",
      prompt: "Three siblings inherited their mother's house. The oldest wants to sell, the youngest refuses to discuss it, and the middle sibling relays messages between them. Each says the others are betraying their mother.",
      intakeNotes: [
        "The siblings have a long history of one person mediating between the other two.",
        "The youngest lived with the mother for several years before her death.",
        "Estate decisions are pending, but the presenting request is therapy for the relationship conflict."
      ],
      clinicalQuestion: "How can the therapist distinguish practical estate decisions from the family emotional process?",
      redFlags: ["Legal advice is outside the therapy role", "The middle sibling may be triangulated"],
      priorities: ["Map sibling triangles", "Support direct contact and differentiation", "Avoid legal decision-making"],
      reflectionPrompts: ["Who is in the triangle?", "What unresolved grief or loyalty may be present?", "What is the therapist's role boundary?"],
      choices: {
        conceptualization: ["Sibling triangles, grief, and cutoff are shaping the estate conflict", "The oldest sibling is legally correct so therapy is simple", "The house itself is the client", "The therapist should decide the sale price"],
        therapistRole: ["Coach direct, less reactive communication and clarify therapy role limits", "Become the estate mediator and legal advisor", "Carry messages between siblings", "Tell the youngest to stop grieving"],
        intervention: ["Use a family diagram and process questions about roles after the mother's death", "Choose who gets the house", "Avoid grief completely", "Encourage more indirect messaging"],
        nextStep: ["Help each sibling define an I-position while recommending legal consultation for estate issues", "Write a binding legal agreement", "Force immediate reconciliation", "Meet secretly with one sibling only"],
        ethicsRisk: ["Role limits, consent, documentation, and avoiding legal advice", "No ethics risk because they are siblings", "The therapist can represent all legal interests", "Confidentiality does not apply in family therapy"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Names Bowen patterns and grief without reducing the case to money.",
        therapistRole: "Coaches process and respects role boundaries.",
        intervention: "Uses family diagram and process questions.",
        nextStep: "Combines I-position work with referral for legal questions.",
        ethicsRisk: "Avoids legal advice and manages confidentiality/consent."
      },
      modelAnswer: "A Bowen-informed answer would separate the practical estate issue from the emotional process around grief, loyalty, triangles, and cutoff. The therapist can map family roles and coach direct, thoughtful contact, especially for the middle sibling who is carrying messages. The therapist should not provide legal advice or decide the estate question; legal consultation belongs outside the therapy role.",
      checklist: [
        { label: "Triangle or mediator role", keywords: ["triangle", "mediator", "messages"] },
        { label: "Grief and loyalty", keywords: ["grief", "loyalty", "mother"] },
        { label: "I-position or differentiation", keywords: ["i-position", "differentiation", "direct"] },
        { label: "Legal role boundary", keywords: ["legal", "role", "consultation"] }
      ],
      improvementTips: ["When money or property appears, keep therapy role boundaries clear.", "Bowen work can address the process without deciding the content.", "The messenger in a sibling conflict is often the triangle clue."]
    },
    {
      id: "scenario-eft-postpartum-disconnection",
      title: "After the Baby",
      difficulty: "hard",
      clientType: "Couple",
      focus: ["EFT", "Risk"],
      presentingProblem: "New parents are disconnected, exhausted, and unsure whether symptoms are normal adjustment or clinical risk.",
      prompt: "Six weeks after birth, Jae says, 'I feel invisible unless the baby needs something.' Alex says, 'I am scared to touch anything because I do it wrong.' Jae cries often and says, 'Sometimes I think they would be better without me,' then says they would never hurt themselves.",
      intakeNotes: [
        "Both partners report severe sleep disruption.",
        "Jae reports intrusive thoughts of being a burden.",
        "No current plan or intent is disclosed, but the statement raises risk concerns."
      ],
      clinicalQuestion: "How should the therapist balance EFT couple work with postpartum risk assessment and referral needs?",
      redFlags: ["Postpartum mood symptoms and self-worth statements require direct risk assessment", "Sleep deprivation may increase vulnerability"],
      priorities: ["Assess safety directly", "Coordinate appropriate medical/perinatal support", "Track the attachment cycle when safe"],
      reflectionPrompts: ["What risk assessment is needed?", "What is the couple cycle?", "What referrals or coordination may be appropriate?"],
      choices: {
        conceptualization: ["Postpartum stress, possible mood symptoms, and attachment disconnection are interacting", "This is only normal conflict and needs no assessment", "Alex is the entire problem", "The therapist should avoid asking about self-harm"],
        therapistRole: ["Assess risk and postpartum support needs before deeper couple enactments", "Reassure without assessment", "Tell Jae to be grateful", "Focus only on chores"],
        intervention: ["Complete direct safety assessment, coordinate support, and gently track the cycle", "Force an intense vulnerability enactment immediately", "Ignore sleep and medical context", "Promise symptoms will vanish"],
        nextStep: ["Develop safety/support steps and refer or coordinate care if indicated", "Tell Alex to fix Jae alone", "End therapy because there is a baby", "Document nothing because it is private"],
        ethicsRisk: ["Safety, competence, referral, documentation, and informed consent", "No ethical risk if intent is denied once", "Only the relationship matters", "Medical coordination never applies to LMFTs"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Integrates postpartum context, risk, and attachment cycle.",
        therapistRole: "Prioritizes safety before deeper EFT work.",
        intervention: "Combines assessment, coordination, and gentle cycle work.",
        nextStep: "Plans support/referral when indicated.",
        ethicsRisk: "Names safety, competence, documentation, consent, and referral."
      },
      modelAnswer: "A strong answer would directly assess self-harm risk, postpartum mood symptoms, protective factors, supports, sleep, and level of care needs. EFT couple work can still be useful, but deeper enactments should wait until safety and support are clear. The therapist may need consultation, referral, or coordination with perinatal/medical providers while also helping the couple see the exhaustion-driven attachment cycle.",
      checklist: [
        { label: "Direct risk assessment", keywords: ["risk", "self-harm", "safety", "intent"] },
        { label: "Postpartum context", keywords: ["postpartum", "baby", "sleep", "perinatal"] },
        { label: "Attachment cycle", keywords: ["cycle", "attachment", "disconnection"] },
        { label: "Referral or coordination", keywords: ["referral", "coordinate", "medical", "consult"] }
      ],
      improvementTips: ["Do not let model loyalty override safety assessment.", "Postpartum cases may require coordination outside couple therapy.", "Name both the couple cycle and the risk response."]
    },
    {
      id: "scenario-systemic-substance-relapse",
      title: "The Empty Bottles",
      difficulty: "hard",
      clientType: "Couple",
      focus: ["Substance Use", "Safety"],
      presentingProblem: "A partner's relapse is being handled through secrecy, monitoring, and escalating conflict.",
      prompt: "Dana finds empty bottles hidden in the garage. Chris says, 'I slipped once and you are making it worse by spying.' Dana says, 'If I do not check, everything falls apart.' Their teenage daughter has started sleeping at a friend's house after arguments.",
      intakeNotes: [
        "Chris has a past alcohol treatment episode.",
        "Arguments have increased but no physical violence is disclosed.",
        "The daughter is affected by the conflict and avoidance."
      ],
      clinicalQuestion: "What should the therapist assess before treating this as only a communication problem?",
      redFlags: ["Relapse and possible withdrawal risk need assessment", "Teen exposure to conflict should be considered", "Safety and level of care may need coordination"],
      priorities: ["Assess substance use and safety", "Consider level of care/referral", "Formulate the monitoring-secrecy cycle"],
      reflectionPrompts: ["What risk/level of care issues are present?", "How is the couple cycle maintaining distress?", "How should the teen's wellbeing be considered?"],
      choices: {
        conceptualization: ["Substance relapse, family anxiety, and a secrecy-monitoring cycle are interacting", "Dana is the only problem because checking is controlling", "Chris should be shamed into sobriety", "The teen's behavior is irrelevant"],
        therapistRole: ["Assess substance use severity, safety, and family impact while maintaining alliance", "Treat relapse as a simple communication mistake", "Hide information from all family members", "Tell Dana to monitor more intensely"],
        intervention: ["Assess level of care and coordinate substance-use support while addressing the family cycle", "Use only date-night homework", "Ignore relapse details", "Make the teen responsible for peace at home"],
        nextStep: ["Develop safety and treatment/referral plan, then clarify boundaries and support roles", "Promise no relapse will happen again", "Ask Dana to pour out bottles during session", "End therapy without resources"],
        ethicsRisk: ["Competence, referral, safety, adolescent impact, and documentation", "No ethics issue if Chris says it was once", "The therapist should become the sobriety monitor", "Documentation is harmful and should be avoided"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Integrates substance use and systemic cycle.",
        therapistRole: "Assesses risk and maintains alliance.",
        intervention: "Considers level of care and family pattern.",
        nextStep: "Plans treatment/referral and boundaries.",
        ethicsRisk: "Names competence, safety, adolescent impact, and documentation."
      },
      modelAnswer: "A strong answer would assess Chris's substance use pattern, withdrawal risk, safety, prior treatment, readiness, and appropriate level of care. The therapist should also assess how Dana's monitoring and Chris's secrecy form a family cycle and how the teen is affected. Depending on risk and competence, referral or coordinated substance-use treatment may be needed alongside couple/family work.",
      checklist: [
        { label: "Substance-use assessment", keywords: ["substance", "alcohol", "relapse", "withdrawal"] },
        { label: "Level of care or referral", keywords: ["level of care", "referral", "treatment"] },
        { label: "Family cycle", keywords: ["cycle", "monitoring", "secrecy"] },
        { label: "Teen impact or safety", keywords: ["teen", "daughter", "safety", "family impact"] }
      ],
      improvementTips: ["Relapse cases are not just communication cases.", "Assess level of care before assigning relationship homework.", "Include affected family members without making them responsible for sobriety."]
    },
    {
      id: "scenario-ethics-social-media",
      title: "The Friend Request",
      difficulty: "easy",
      clientType: "Individual",
      focus: ["Ethics", "Boundaries"],
      presentingProblem: "A client sends the therapist a social media friend request after a vulnerable session.",
      prompt: "After a session about loneliness, a client sends the therapist a friend request and a message: 'I know you cannot be my friend, but it would help to know you see me.'",
      intakeNotes: [
        "The client is not reporting current self-harm.",
        "The therapist has a professional social media policy in the informed consent packet.",
        "The message suggests attachment needs and boundary testing."
      ],
      clinicalQuestion: "How can the therapist maintain boundaries while using the moment clinically?",
      redFlags: ["Boundary crossing risk", "Loneliness and attachment distress should be assessed clinically"],
      priorities: ["Maintain professional boundaries", "Review policy", "Explore the meaning in session"],
      reflectionPrompts: ["What boundary is being tested?", "How can the therapist validate without accepting?", "How can this become clinical material?"],
      choices: {
        conceptualization: ["The request may express attachment needs and a boundary-testing moment", "The client is bad and should be terminated immediately", "The therapist should accept to reduce loneliness", "Social media has no relevance to therapy"],
        therapistRole: ["Maintain the boundary and discuss the meaning in session", "Accept the request privately", "Block the client without discussion unless safety requires it", "Post about the client anonymously"],
        intervention: ["Review the social media policy and explore the need to be seen", "Begin messaging therapy through social media", "Ignore the message forever", "Tell the client they are needy"],
        nextStep: ["Document the contact and bring it into treatment appropriately", "Delete all records of it", "Change the therapist's profile to private and never mention it", "Promise friendship after termination"],
        ethicsRisk: ["Boundaries, confidentiality, records, and multiple relationship risk", "No risk because it is online", "Only the client's intent matters", "Therapists can socialize if it feels helpful"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Sees both clinical meaning and boundary risk.",
        therapistRole: "Maintains the professional role.",
        intervention: "Reviews policy and explores attachment meaning.",
        nextStep: "Documents and uses clinically.",
        ethicsRisk: "Names boundaries, confidentiality, records, and multiple relationships."
      },
      modelAnswer: "The therapist should not accept a personal friend request. A strong clinical response would maintain the professional boundary, review the social media policy, document the contact, and explore the client's wish to be seen during the next clinically appropriate contact. The moment can become useful therapy material without turning into a multiple relationship.",
      checklist: [
        { label: "Boundary", keywords: ["boundary", "professional", "friend request"] },
        { label: "Policy or consent", keywords: ["policy", "informed consent", "social media"] },
        { label: "Clinical meaning", keywords: ["meaning", "loneliness", "attachment", "seen"] },
        { label: "Documentation", keywords: ["document", "record", "contact"] }
      ],
      improvementTips: ["Boundary questions often have a clinical meaning underneath.", "Do not meet attachment needs by changing the professional relationship.", "Policies are most useful when reviewed, not just stored."]
    },
    {
      id: "scenario-efft-grief-child",
      title: "The Empty Chair",
      difficulty: "medium",
      clientType: "Family",
      focus: ["EFFT", "Grief"],
      presentingProblem: "A family avoids talking about a parent's death, and a child is acting out at school.",
      prompt: "Eight months after a parent's death, 11-year-old Zoe gets into fights at school. The surviving parent says, 'We need to move forward.' Zoe says, 'Nobody says her name anymore.' The parent starts crying and says, 'If I start, I will fall apart.'",
      intakeNotes: [
        "No current abuse or self-harm is reported.",
        "The school reports fights happen after family-themed assignments.",
        "The surviving parent avoids grief conversations to stay functional."
      ],
      clinicalQuestion: "How can the therapist support grief and attachment safety without overwhelming the family?",
      redFlags: ["Child aggression needs assessment", "Grief avoidance may block support but should be paced"],
      priorities: ["Validate grief protection", "Track the avoid-protest cycle", "Create a paced family conversation"],
      reflectionPrompts: ["What cycle is happening around grief?", "What is the parent's protective fear?", "What could Zoe safely ask for?"],
      choices: {
        conceptualization: ["Grief avoidance and child protest are part of an attachment cycle", "Zoe is simply defiant", "The parent should never cry in front of Zoe", "The family should stop mentioning the deceased parent"],
        therapistRole: ["Validate both grief protection and Zoe's need for connection", "Tell the parent to get over it", "Punish Zoe in session", "Avoid death-related emotion entirely"],
        intervention: ["Slowly access grief and shape a safe conversation about remembering", "Force a long grief disclosure immediately", "Use only behavior charts", "Tell Zoe school fights are unrelated"],
        nextStep: ["Assess safety/aggression and help the parent offer a manageable message of grief and care", "Ban the deceased parent's name", "Tell Zoe to comfort the parent", "End treatment after one calm session"],
        ethicsRisk: ["Child safety, development, consent, and pacing emotional intensity", "No need to involve the parent", "The therapist should decide family rituals", "Records are not needed in grief work"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Frames grief avoidance and child behavior systemically.",
        therapistRole: "Validates both members and attachment needs.",
        intervention: "Uses paced emotional engagement.",
        nextStep: "Combines safety assessment and supportive conversation.",
        ethicsRisk: "Names child development, consent, safety, and pacing."
      },
      modelAnswer: "An EFFT-informed response would see Zoe's fights as possibly connected to grief protest and disconnection, not simply defiance. The surviving parent's avoidance is protective and should be validated while gently accessing the fear of falling apart. The therapist can assess aggression and safety, then shape a small conversation where the parent can name grief and care in a way Zoe can receive.",
      checklist: [
        { label: "Grief cycle", keywords: ["grief", "avoidance", "protest", "cycle"] },
        { label: "Attachment safety", keywords: ["attachment", "connection", "care"] },
        { label: "Pacing", keywords: ["pace", "slow", "manageable"] },
        { label: "Child safety or development", keywords: ["child", "safety", "development", "school"] }
      ],
      improvementTips: ["Grief cases need both emotion and pacing.", "Child acting out may be a relational signal, not just behavior.", "Do not make the child responsible for the parent's grief."]
    },
    {
      id: "scenario-coercive-control-screen",
      title: "The Quiet Partner",
      difficulty: "hard",
      clientType: "Couple",
      focus: ["Safety", "Assessment"],
      presentingProblem: "One partner dominates the session while the other appears fearful and over-agreeable.",
      prompt: "During intake, Devon answers every question for Sky. Sky smiles and says, 'Whatever Devon says is fine.' When the therapist asks about conflict, Devon says, 'Sky knows not to make me mad.' Sky looks down and changes the subject.",
      intakeNotes: [
        "No direct violence disclosure has been made.",
        "One partner controls the conversation and uses intimidating language.",
        "The therapist has not yet met with each partner separately for safety screening."
      ],
      clinicalQuestion: "What should happen before routine couple therapy or vulnerability-based interventions?",
      redFlags: ["Possible coercive control or intimidation", "Joint couple therapy may increase risk if retaliation is possible"],
      priorities: ["Assess safety privately and carefully", "Avoid escalating risk", "Determine appropriate treatment format"],
      reflectionPrompts: ["What signs raise concern?", "Why might joint enactments be unsafe?", "What information is needed before proceeding?"],
      choices: {
        conceptualization: ["Possible coercive control requires careful safety assessment", "This is just normal leadership by Devon", "Sky should be pushed to confront Devon now", "The therapist should ignore nonverbal cues"],
        therapistRole: ["Pause routine couple work and assess safety, coercion, and retaliation risk", "Begin deep vulnerability enactments immediately", "Tell Sky to be more assertive in front of Devon", "Let Devon set the treatment rules"],
        intervention: ["Use safe screening procedures and consider referrals or separate services if needed", "Assign more honesty at home without safety planning", "Ask Devon to monitor Sky's homework", "Force both partners to apologize"],
        nextStep: ["Clarify confidentiality/safety limits and determine whether couple therapy is appropriate", "Proceed because no one used the word abuse", "Promise Devon all disclosures will be shared", "Ignore documentation"],
        ethicsRisk: ["Safety, coercion, confidentiality, informed consent, and appropriate level of care", "No risk without physical violence disclosure", "The therapist should treat intimidation as motivation", "Only communication skills are relevant"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Recognizes coercion indicators.",
        therapistRole: "Prioritizes safety over couple technique.",
        intervention: "Uses safe screening and appropriate referrals/formats.",
        nextStep: "Clarifies whether couple therapy is suitable.",
        ethicsRisk: "Names safety, coercion, consent, confidentiality, and care level."
      },
      modelAnswer: "The therapist should not proceed as if this is ordinary communication conflict. Devon's control of the session, intimidating language, and Sky's fearful compliance require careful safety and coercion assessment. The therapist should use safe screening procedures, clarify confidentiality and safety limits, consider retaliation risk, and determine whether conjoint therapy is appropriate or whether referrals/separate services are safer.",
      checklist: [
        { label: "Coercion or intimidation", keywords: ["coercion", "intimidation", "control", "fear"] },
        { label: "Safety screening", keywords: ["safety", "screen", "retaliation", "private"] },
        { label: "Conjoint therapy caution", keywords: ["couple therapy", "conjoint", "appropriate"] },
        { label: "Confidentiality and consent", keywords: ["confidentiality", "consent", "limits"] }
      ],
      improvementTips: ["No disclosure does not mean no risk.", "Couple techniques can be unsafe when coercion is active.", "Nonverbal cues and power differences matter in assessment."]
    },
    {
      id: "scenario-lmft-no-show-pattern",
      title: "The Missed Mondays",
      difficulty: "easy",
      clientType: "Family",
      focus: ["Process", "Engagement"],
      presentingProblem: "A family repeatedly misses sessions after emotionally intense meetings.",
      prompt: "A family attends three sessions, each becoming intense when the oldest daughter talks about feeling invisible. After each intense session, the family cancels the next Monday appointment and returns two weeks later saying they were busy.",
      intakeNotes: [
        "No crisis is reported.",
        "The cancellation pattern happens after emotional material.",
        "The daughter says, 'When I finally talk, everyone disappears.'"
      ],
      clinicalQuestion: "How should the therapist use the attendance pattern as clinical information?",
      redFlags: ["Avoidance may maintain the family pattern", "The daughter may experience cancellations as invalidation"],
      priorities: ["Name the process gently", "Invite feedback", "Adjust pacing and engagement"],
      reflectionPrompts: ["What pattern appears around missed sessions?", "How can the therapist raise it without blaming?", "What treatment adjustment may help?"],
      choices: {
        conceptualization: ["Missed sessions may be part of the family's avoidance cycle after emotional intensity", "The family is lazy and should be discharged immediately", "The daughter caused the cancellations by speaking", "Attendance has no clinical meaning"],
        therapistRole: ["Gently name the pattern and ask for feedback about pacing and safety", "Shame the family for canceling", "Ignore cancellations completely", "Punish the daughter for bringing up feelings"],
        intervention: ["Review engagement, pacing, and what happens after intense sessions", "Make sessions more intense without discussion", "Cancel all future sessions", "Tell them no emotions are allowed"],
        nextStep: ["Collaboratively adjust the plan to support consistent attendance and emotional tolerance", "Bill extra without policy review", "Avoid treatment planning", "Tell the daughter to stop talking"],
        ethicsRisk: ["Informed consent, fees/cancellation policy, documentation, and clinically appropriate engagement", "No ethics issue because attendance is administrative only", "The therapist should hide missed sessions from records", "Only one family member's preference matters"]
      },
      idealSelections: { conceptualization: 0, therapistRole: 0, intervention: 0, nextStep: 0, ethicsRisk: 0 },
      rubric: {
        conceptualization: "Uses attendance as part of the family process.",
        therapistRole: "Names process without blame.",
        intervention: "Adjusts pacing and engagement.",
        nextStep: "Supports consistency and emotional tolerance.",
        ethicsRisk: "Names consent, fees, documentation, and engagement."
      },
      modelAnswer: "A strong LMFT response would treat the cancellation pattern as clinical information, not only an administrative problem. The therapist can gently name that missed sessions tend to follow intense conversations, ask how the pace feels, and explore what each person does after those sessions. The plan may need clearer engagement agreements, pacing adjustments, and documentation of attendance and policy issues.",
      checklist: [
        { label: "Attendance pattern", keywords: ["attendance", "cancellation", "missed"] },
        { label: "Avoidance cycle", keywords: ["avoidance", "cycle", "pattern"] },
        { label: "Pacing or feedback", keywords: ["pace", "feedback", "intense"] },
        { label: "Policy or documentation", keywords: ["policy", "document", "fees"] }
      ],
      improvementTips: ["Process is not limited to what happens inside the session.", "Engagement problems can reveal the system's protective moves.", "Name patterns gently and connect them to treatment goals."]
    },
    {
      id: "error-eft-problem-solving-too-soon",
      title: "Too Fast To Fix",
      difficulty: "medium",
      clientType: "Couple",
      errorCase: true,
      focus: ["EFT", "Therapist Error"],
      presentingProblem: "A pursue-withdraw couple reaches a vulnerable moment, and the therapist moves into advice too quickly.",
      prompt: "Maya says, 'When you walk away, I feel like I do not matter.' Jordan looks tearful and says, 'I leave because I am scared I will fail you again.'",
      intakeNotes: [
        "No current violence or coercion is reported.",
        "Both partners have just accessed softer emotion.",
        "The couple usually escalates when they move straight into solutions."
      ],
      clinicalQuestion: "What therapist error would block the learning moment?",
      redFlags: ["Do not rush past primary emotion", "Do not turn a vulnerable moment into advice-giving"],
      flawedResponse: "Great, now each of you should make a chore chart and agree not to bring this up again tonight.",
      errorPrompt: "What is the main clinical error?",
      errorChoices: [
        { text: "The therapist problem-solves before processing and deepening the attachment moment.", correct: true, feedback: "Yes. In EFT, the vulnerable disclosure is the opening for validation, enactment, and processing a new interaction before practical problem-solving." },
        { text: "The therapist should take Maya's side because she spoke first.", correct: false, feedback: "Taking sides would weaken balanced alliance and miss the cycle." },
        { text: "The therapist should ignore emotion because it slows treatment.", correct: false, feedback: "EFT uses emotion as the route to change, paced with safety." },
        { text: "The therapist must switch to a genogram immediately.", correct: false, feedback: "A genogram can be useful in some models, but it is not the best repair for this live EFT moment." }
      ],
      modelAnswer: "A stronger response would slow the room down, validate both protective moves, heighten the softer emotions, and shape a safe enactment where Jordan can tell Maya about the fear of failing and Maya can share the need to matter. Practical solutions can wait until the new emotional exchange is processed.",
      repairChecklist: [
        { label: "Names premature problem-solving", keywords: ["problem", "solution", "too soon", "rush"] },
        { label: "Tracks primary emotion", keywords: ["primary", "soft", "vulnerable", "fear"] },
        { label: "Uses enactment or direct message", keywords: ["enact", "turn", "share", "tell"] },
        { label: "Maintains balanced alliance", keywords: ["both", "cycle", "balanced", "not blame"] }
      ],
      checklist: [
        { label: "Names premature problem-solving", keywords: ["problem", "solution", "too soon", "rush"] },
        { label: "Tracks primary emotion", keywords: ["primary", "soft", "vulnerable", "fear"] },
        { label: "Uses enactment or direct message", keywords: ["enact", "turn", "share", "tell"] },
        { label: "Maintains balanced alliance", keywords: ["both", "cycle", "balanced", "not blame"] }
      ],
      improvementTips: ["In EFT, do not leave a vulnerable moment too quickly.", "Process the new interaction before assigning practical fixes.", "The cycle stays the shared enemy."]
    },
    {
      id: "error-ethics-risk-skipped",
      title: "Technique Before Safety",
      difficulty: "hard",
      clientType: "Family",
      errorCase: true,
      focus: ["Ethics", "Risk"],
      presentingProblem: "A minor reports current harm, and the therapist moves into a model technique instead of safety duties.",
      prompt: "A 14-year-old privately reports current physical abuse by a caregiver and says, 'Please do not tell anyone.' The family is waiting in the lobby.",
      intakeNotes: [
        "The disclosure involves current harm to a minor.",
        "The client asks for secrecy.",
        "The therapist has not yet assessed immediate safety."
      ],
      clinicalQuestion: "Which error would be most serious?",
      redFlags: ["Mandated reporting and immediate safety outrank model technique", "Confidentiality limits must be explained and followed"],
      flawedResponse: "Let's keep this between us for now and bring your caregiver in for an EFT enactment about how scared you feel.",
      errorPrompt: "What is the main clinical and ethical error?",
      errorChoices: [
        { text: "The therapist skips mandated safety duties and promises secrecy where confidentiality has limits.", correct: true, feedback: "Correct. Current harm to a minor requires safety assessment, documentation, consultation/reporting according to law and policy, and clear limits of confidentiality." },
        { text: "The therapist failed to use enough Bowen language.", correct: false, feedback: "Model language is secondary when mandated safety concerns are present." },
        { text: "The therapist should ask the caregiver to decide whether abuse occurred.", correct: false, feedback: "That can increase risk and does not meet mandated reporting or safety responsibilities." },
        { text: "The therapist should wait until the next session to avoid upsetting the family.", correct: false, feedback: "Delay can increase danger and may violate legal or ethical duties." }
      ],
      modelAnswer: "A safer repair is to explain confidentiality limits in developmentally appropriate language, assess immediate safety, follow mandated reporting law and agency policy, consult as needed, document the reasoning, and plan next contact in a way that does not increase danger.",
      repairChecklist: [
        { label: "Names mandated reporting or safety", keywords: ["mandated", "report", "safety", "harm"] },
        { label: "Clarifies confidentiality limits", keywords: ["confidential", "limits", "secret"] },
        { label: "Documents or consults", keywords: ["document", "consult", "supervision"] },
        { label: "Avoids unsafe enactment", keywords: ["unsafe", "enact", "caregiver", "risk"] }
      ],
      checklist: [
        { label: "Names mandated reporting or safety", keywords: ["mandated", "report", "safety", "harm"] },
        { label: "Clarifies confidentiality limits", keywords: ["confidential", "limits", "secret"] },
        { label: "Documents or consults", keywords: ["document", "consult", "supervision"] },
        { label: "Avoids unsafe enactment", keywords: ["unsafe", "enact", "caregiver", "risk"] }
      ],
      improvementTips: ["Safety and law come before model technique.", "Never promise secrecy when confidentiality has limits.", "Document the sequence: assess, consult/report, safety plan."]
    }
  ];

  var flashcards = [
    {
      id: "fc-bowen-differentiation-basic",
      type: "basic",
      model: "Bowen",
      domain: "Systemic therapy models",
      topic: "Differentiation",
      front: "What is differentiation of self?",
      back: "The ability to stay emotionally connected while thinking and acting from a clear self.",
      clue: "Bowen clues often mention staying connected without fusion, cutoff, or automatic reactivity.",
      why: "Differentiation is the core Bowen skill behind I-position work and calmer family contact.",
      clinicalCaution: "In real practice, do not push contact when safety, coercion, or client autonomy says to slow down.",
      reviewNext: "Review Bowen differentiation, I-position, fusion, and emotional cutoff."
    },
    {
      id: "fc-bowen-cutoff-situation",
      type: "situation",
      model: "Bowen",
      domain: "Systemic therapy models",
      topic: "Emotional Cutoff",
      front: "A client stops speaking to their parents to manage unresolved anxiety. What Bowen concept is this?",
      back: "Emotional cutoff.",
      clue: "Look for distance, silence, no-contact, or avoidance used to manage family intensity.",
      why: "Cutoff lowers immediate contact but does not necessarily resolve the emotional process.",
      clinicalCaution: "Differentiate cutoff from thoughtful boundaries, especially when abuse or coercion is present.",
      reviewNext: "Review cutoff versus differentiation and mature boundaries."
    },
    {
      id: "fc-bowen-triangle-situation",
      type: "situation",
      model: "Bowen",
      domain: "Systemic therapy models",
      topic: "Triangles",
      front: "Mom vents to her son about Dad, and the son becomes anxious before the parents argue. What Bowen pattern is showing?",
      back: "A triangle: tension between two people is managed through a third person.",
      clue: "Two-person tension pulls in a third person, child, symptom, or therapist.",
      why: "Bowen answers usually detriangle and coach process observation instead of taking sides.",
      clinicalCaution: "Keep a balanced stance and avoid making the child responsible for adult conflict.",
      reviewNext: "Review triangles, detriangling, and family projection process."
    },
    {
      id: "fc-eft-model-clue",
      type: "modelClue",
      model: "EFT",
      domain: "Systemic therapy models",
      topic: "Negative Cycle",
      front: "The therapist tracks a pursue-withdraw cycle and accesses primary emotion. Which model?",
      back: "EFT.",
      clue: "Pursue-withdraw, primary emotion, attachment fear, responsiveness, and enactment are EFT signals.",
      why: "EFT organizes distress as a negative attachment cycle and creates new bonding events.",
      clinicalCaution: "Do not deepen emotion before assessing violence, coercion, safety, and consent.",
      reviewNext: "Review EFT cycle tracking, primary emotion, and attachment needs."
    },
    {
      id: "fc-eft-primary-secondary",
      type: "situation",
      model: "EFT",
      domain: "Systemic therapy models",
      topic: "Primary vs Secondary Emotion",
      front: "A partner criticizes loudly, but underneath says, 'I am scared I do not matter.' Which is primary emotion?",
      back: "The fear of not mattering is the primary emotion; criticism is a secondary protective response.",
      clue: "Primary emotion is softer and more vulnerable; secondary emotion is reactive protection.",
      why: "EFT change depends on accessing the vulnerable emotion and attachment need under the protective move.",
      clinicalCaution: "Validate protection without endorsing harmful behavior.",
      reviewNext: "Review primary emotion, secondary emotion, and pursuer softening."
    },
    {
      id: "fc-eft-enactment-basic",
      type: "basic",
      model: "EFT",
      domain: "Systemic therapy models",
      topic: "Enactment",
      front: "What is an EFT enactment?",
      back: "A guided in-session exchange where partners share organized emotion or attachment needs directly with each other.",
      clue: "The therapist shapes a safe direct message after emotion is organized.",
      why: "Enactments turn insight into new emotional experience between partners.",
      clinicalCaution: "Pace enactments carefully; safety and regulation come first.",
      reviewNext: "Review the EFT Tango and corrective bonding events."
    },
    {
      id: "fc-ethics-secret-email",
      type: "ethics",
      model: "Ethics",
      domain: "Ethics / legal standards",
      topic: "Secrets Policy",
      front: "One partner emails secret information before couple intake. What is the main concern?",
      back: "Informed consent, confidentiality/secrets policy, balanced alliance, documentation, and treatment frame.",
      clue: "Secrets, collateral contact, and one-sided information are couple-therapy frame issues.",
      why: "The therapist must clarify how private disclosures and records work before forming a side alliance.",
      clinicalCaution: "Follow applicable law, ethics code, supervision, agency policy, and documented consent.",
      reviewNext: "Review couple therapy informed consent and no-secrets policies."
    },
    {
      id: "fc-ethics-risk-first",
      type: "ethics",
      model: "Ethics",
      domain: "Crisis and risk",
      topic: "Safety Before Technique",
      front: "A case includes active child abuse disclosure and then asks for a model intervention. What comes first?",
      back: "Mandated reporting and immediate safety steps before routine model technique.",
      clue: "Risk, abuse, imminent harm, and legal duties outrank Bowen/EFT interventions.",
      why: "Ethics-first sequencing protects clients and keeps the therapist inside legal and professional duties.",
      clinicalCaution: "Specific mandated duties depend on jurisdiction, setting, supervision, and current law.",
      reviewNext: "Review mandated reporting, documentation, consultation, and level of care."
    },
    {
      id: "fc-systemic-balanced-alliance",
      type: "situation",
      model: "Systemic Roles",
      domain: "Assessment and treatment process",
      topic: "Balanced Alliance",
      front: "A partner says, 'Tell my spouse they are the problem.' What should the systemic therapist protect?",
      back: "Balanced alliance and a non-blaming relational frame.",
      clue: "Requests to judge, rescue, diagnose an absent person, or take sides are alliance traps.",
      why: "LMFT work tracks relational process without turning one person into the whole problem.",
      clinicalCaution: "Balanced alliance does not mean ignoring harm, coercion, or safety concerns.",
      reviewNext: "Review joining, balanced alliance, and systemic hypothesizing."
    },
    {
      id: "fc-systemic-assessment-first",
      type: "basic",
      model: "Systemic Roles",
      domain: "Assessment and treatment process",
      topic: "Assessment Before Intervention",
      front: "What is the exam clue that assessment should come before intervention?",
      back: "Missing information about safety, diagnosis, culture, consent, client system, goals, or context.",
      clue: "When the stem is incomplete, the safest answer often gathers more systemic data first.",
      why: "Good LMFT practice matches interventions to risk, context, goals, and client-system needs.",
      clinicalCaution: "Use supervision and consultation when risk, law, or scope is unclear.",
      reviewNext: "Review circular questions, systemic hypotheses, and contextual assessment."
    },
    {
      id: "fc-compare-bowen-eft",
      type: "compare",
      model: "Comparison",
      domain: "Systemic therapy models",
      topic: "Bowen vs EFT",
      front: "How would Bowen and EFT conceptualize the same pursuer-withdrawer couple differently?",
      back: "Bowen: anxiety, reactivity, triangles, differentiation, family-of-origin patterns. EFT: attachment protest, negative cycle, primary emotion, unmet attachment needs.",
      clue: "Bowen asks how anxiety moves; EFT asks what attachment fear is underneath the cycle.",
      why: "The exam often tests lens selection more than memorized definitions.",
      clinicalCaution: "Real treatment may integrate ideas, but exam answers usually reward model-consistent language.",
      reviewNext: "Review Bowen versus EFT next-step differences."
    },
    {
      id: "fc-compare-ethics-first",
      type: "compare",
      model: "Comparison",
      domain: "Ethics / legal standards",
      topic: "Ethics First",
      front: "What tells you ethics comes before Bowen or EFT?",
      back: "Safety, mandated reporting, confidentiality limits, unclear consent, court/legal demands, or competence concerns.",
      clue: "If law, risk, records, consent, or scope appears, sequence ethics before technique.",
      why: "Model-consistent intervention is not the best answer if the treatment frame or safety duty is unresolved.",
      clinicalCaution: "Use current law, ethics code, supervision, and agency policy for real clinical decisions.",
      reviewNext: "Review ethics-first sequencing and model-mix-up traps."
    }
  ];

  var clinicDrills = [
    {
      id: "clinic-spot-eft-cycle",
      type: "spotModel",
      model: "EFT",
      domain: "Systemic therapy models",
      topic: "Negative Cycle",
      difficulty: "easy",
      prompt: "Therapist: 'When your partner criticizes, what happens inside you, and how do you respond?' Which model clue is strongest?",
      choices: ["Bowen", "EFT", "Ethics", "Structural/Systemic"],
      answerIndex: 1,
      clue: "The statement tracks inner emotion and the pursue-withdraw cycle.",
      explanation: "EFT focuses on the negative cycle, primary emotion, and attachment response.",
      wrongExplanations: ["Bowen could ask process questions, but this wording is more emotion-and-cycle focused.", "Correct.", "No ethics-first trigger appears in this prompt.", "It is systemic, but EFT is the more precise model clue."],
      clinicalCaution: "Assess safety and coercion before deepening couple emotion.",
      reviewNext: "Review EFT negative cycle, primary emotion, and enactments."
    },
    {
      id: "clinic-spot-bowen-process",
      type: "spotModel",
      model: "Bowen",
      domain: "Systemic therapy models",
      topic: "Process Questions",
      difficulty: "easy",
      prompt: "Therapist: 'When the argument starts, who gets pulled in next, and what do you each do to lower the tension?' Which model does this most resemble?",
      choices: ["EFT", "Bowen", "Ethics", "Narrative"],
      answerIndex: 1,
      clue: "The therapist is mapping sequence, triangles, and anxiety movement.",
      explanation: "Bowen work often asks process questions and tracks triangles without taking sides.",
      wrongExplanations: ["EFT would more directly organize primary emotion and attachment needs.", "Correct.", "There is no legal or safety duty in the prompt.", "Narrative is not the main clue here."],
      clinicalCaution: "Do not treat process mapping as a substitute for safety assessment when risk is present.",
      reviewNext: "Review Bowen process questions, triangles, and detriangling."
    },
    {
      id: "clinic-spot-ethics-consent",
      type: "spotModel",
      model: "Ethics",
      domain: "Ethics / legal standards",
      topic: "Informed Consent",
      difficulty: "medium",
      prompt: "A therapist receives a secret email from one partner before couple intake and has not explained a secrets policy. What lens should come first?",
      choices: ["EFT", "Bowen", "Ethics", "Solution-Focused"],
      answerIndex: 2,
      clue: "Secret side information before a couple frame is a consent and confidentiality issue.",
      explanation: "Ethics comes first because the treatment frame, confidentiality, records, and balanced alliance need clarification.",
      wrongExplanations: ["EFT may be useful later, but the frame is not clean yet.", "Bowen may help with triangles later, but consent comes first.", "Correct.", "A miracle question would skip the consent problem."],
      clinicalCaution: "Follow current ethics code, law, supervision, and agency policy in real couple treatment.",
      reviewNext: "Review informed consent, confidentiality limits, and no-secrets policies."
    },
    {
      id: "clinic-spot-systemic-assessment",
      type: "spotModel",
      model: "Systemic Roles",
      domain: "Assessment and treatment process",
      topic: "Systemic Assessment",
      difficulty: "medium",
      prompt: "The case gives a symptom, but no safety, culture, client-system, goal, or context details. What LMFT move is most likely?",
      choices: ["Choose an enactment", "Assess systemically first", "Take one person’s side", "Terminate immediately"],
      answerIndex: 1,
      clue: "The stem lacks core assessment data.",
      explanation: "Systemic assessment comes before narrowing into a model-specific technique.",
      wrongExplanations: ["An enactment may be premature without assessment.", "Correct.", "Side-taking damages balanced alliance.", "Termination is unsupported by the stem."],
      clinicalCaution: "Assessment includes safety, culture, context, diagnosis, client system, and goals.",
      reviewNext: "Review systemic hypotheses and assessment-before-intervention clues."
    },
    {
      id: "clinic-showdown-balanced-alliance",
      type: "showdown",
      model: "Systemic Roles",
      domain: "Assessment and treatment process",
      topic: "Balanced Alliance",
      difficulty: "easy",
      prompt: "Case: One partner says, 'I need you to tell my spouse they are the problem.' Pick the best therapist response.",
      choices: ["You're right, they sound like the problem.", "Let's slow down and look at the pattern between you both.", "I will diagnose your spouse after meeting them.", "You should separate immediately."],
      answerIndex: 1,
      clue: "A systemic response avoids side-taking and tracks relational process.",
      explanation: "This keeps a balanced alliance and turns blame into a pattern to assess.",
      wrongExplanations: ["This creates a side alliance.", "Correct.", "Diagnosing an absent spouse from one report is not appropriate.", "Immediate advice skips assessment and safety/context questions."],
      clinicalCaution: "Balanced alliance does not mean ignoring abuse, coercion, or danger.",
      reviewNext: "Review balanced alliance and non-blaming systemic responses."
    },
    {
      id: "clinic-showdown-eft-too-fast",
      type: "showdown",
      model: "EFT",
      domain: "Systemic therapy models",
      topic: "Problem Solving Too Early",
      difficulty: "medium",
      prompt: "Case: A pursuer says, 'You never care,' and the withdrawer shuts down. Pick the most EFT-consistent next response.",
      choices: ["Make a household chore chart.", "Tell the pursuer to stop criticizing.", "Slow the cycle and help each partner name the softer fear underneath.", "Ask for a three-generation family diagram as the immediate next move."],
      answerIndex: 2,
      clue: "EFT prioritizes cycle de-escalation and primary emotion before practical problem solving.",
      explanation: "The response tracks the cycle, validates protection, and accesses softer attachment emotion.",
      wrongExplanations: ["Problem solving is too early for this EFT moment.", "This blames one partner.", "Correct.", "A genogram is more Bowen-consistent and misses the EFT moment."],
      clinicalCaution: "Assess safety and coercion before deepening vulnerable emotion.",
      reviewNext: "Review EFT cycle de-escalation and primary emotion."
    },
    {
      id: "clinic-showdown-bowen-sides",
      type: "showdown",
      model: "Bowen",
      domain: "Systemic therapy models",
      topic: "Detriangling",
      difficulty: "medium",
      prompt: "Case: Two parents argue and ask the therapist to decide who is right. Pick the Bowen-consistent response.",
      choices: ["Choose the calmer parent.", "Coach each parent to observe the process and speak from an I-position.", "Ask them to enact their attachment longings immediately.", "Tell the child to solve the argument."],
      answerIndex: 1,
      clue: "Bowen therapists avoid becoming the third point of the triangle.",
      explanation: "The therapist stays detriangled and coaches observation, I-position, and differentiation.",
      wrongExplanations: ["Choosing sides joins the triangle.", "Correct.", "That is more EFT language and may be too emotionally evocative for Bowen.", "This scapegoats the child."],
      clinicalCaution: "Keep children out of adult responsibility for the couple's conflict.",
      reviewNext: "Review Bowen triangles, detriangling, and I-position."
    },
    {
      id: "clinic-showdown-risk-first",
      type: "showdown",
      model: "Ethics",
      domain: "Crisis and risk",
      topic: "Safety Before Technique",
      difficulty: "hard",
      prompt: "Case: A family discloses current child abuse, then asks for communication skills. Pick the best next response.",
      choices: ["Start an EFT enactment.", "Use a Bowen genogram first.", "Address mandated reporting and immediate safety duties before model technique.", "Ignore the disclosure until everyone agrees."],
      answerIndex: 2,
      clue: "Active abuse triggers safety and legal/ethical duties.",
      explanation: "Risk and mandated duties outrank routine model intervention.",
      wrongExplanations: ["An enactment skips safety and may increase harm.", "A genogram does not replace mandated action.", "Correct.", "Waiting can violate duties and increase danger."],
      clinicalCaution: "Mandated reporting depends on current jurisdiction, setting, supervision, and law.",
      reviewNext: "Review mandated reporting, safety planning, and documentation."
    }
  ];

  var skillDrills = [
    {
      id: "compare-triangle-school-refusal",
      type: "modelCompare",
      title: "School Refusal at the Door",
      difficulty: "medium",
      clientType: "Family",
      tags: ["Bowen", "EFT", "Systemic Roles"],
      prompt: "Ten-year-old Noah refuses school most mornings. One parent comforts him and lets him stay home; the other says the family is being manipulated. Noah says his stomach hurts when the arguing starts.",
      details: ["The parents argue most intensely at the front door.", "Noah's symptoms drop on weekends.", "The school reports no academic problem."],
      fields: [
        {
          id: "bowen",
          label: "Bowen conceptualization",
          modelAnswer: "Bowen would study how parental anxiety moves into a triangle with Noah. The symptom may stabilize tension between the parents. The therapist would map the family process, ask process questions, and coach calmer differentiation rather than rescuing or blaming.",
          checklist: [
            { label: "Triangle", keywords: ["triangle", "triang"] },
            { label: "Parental anxiety", keywords: ["anxiety", "reactivity"] },
            { label: "Differentiation", keywords: ["differentiat", "i-position", "self"] },
            { label: "Process questions", keywords: ["process question", "pattern", "sequence"] }
          ]
        },
        {
          id: "eft",
          label: "EFT conceptualization",
          modelAnswer: "EFT would track the attachment cycle in the family: protest, fear, and protection may be hidden under anger, soothing, and shutdown. The therapist would validate each person's protective move and help them send clearer messages about fear, care, and support.",
          checklist: [
            { label: "Negative cycle", keywords: ["cycle", "pattern"] },
            { label: "Primary emotion", keywords: ["fear", "primary", "vulnerable"] },
            { label: "Attachment need", keywords: ["attachment", "safety", "support"] },
            { label: "Validation", keywords: ["validate", "attune"] }
          ]
        },
        {
          id: "systemic",
          label: "LMFT/systemic focus",
          modelAnswer: "The LMFT would assess risk, school context, medical concerns, family routine, parenting alignment, culture, and treatment goals. A strong plan avoids blaming Noah and uses the morning sequence as relational data.",
          checklist: [
            { label: "Assessment before intervention", keywords: ["assess", "medical", "school", "risk"] },
            { label: "Family sequence", keywords: ["sequence", "routine", "interaction"] },
            { label: "Non-blaming stance", keywords: ["non-blam", "avoid blame", "not blame"] },
            { label: "Goals and plan", keywords: ["goal", "plan"] }
          ]
        }
      ],
      tips: ["Bowen asks how anxiety moves through the family.", "EFT asks what attachment fear is under the behavior.", "LMFT exam logic asks what must be assessed before treatment narrows."]
    },
    {
      id: "compare-anniversary-fight",
      type: "modelCompare",
      title: "The Anniversary Fight",
      difficulty: "easy",
      clientType: "Couple",
      tags: ["Bowen", "EFT", "Comparison"],
      prompt: "A couple fights every year near the anniversary of an affair. One partner criticizes and asks repeated questions. The other shuts down and says, 'Nothing I say helps.'",
      details: ["Both want to stay together.", "No current violence is reported.", "The betrayed partner says, 'I need to know I matter.'"],
      fields: [
        {
          id: "bowen",
          label: "Bowen conceptualization",
          modelAnswer: "Bowen would observe the anxious cycle and each partner's reactivity. The therapist could coach each person to notice their part, speak from an I-position, and reduce emotional fusion around the anniversary trigger.",
          checklist: [
            { label: "Reactivity", keywords: ["reactivity", "reactive", "anxiety"] },
            { label: "I-position", keywords: ["i-position", "i position", "self"] },
            { label: "Observe process", keywords: ["observe", "process", "pattern"] },
            { label: "Differentiation", keywords: ["differentiat"] }
          ]
        },
        {
          id: "eft",
          label: "EFT conceptualization",
          modelAnswer: "EFT would frame this as a pursue-withdraw cycle organized around attachment injury. Criticism protects fear and longing; shutdown protects shame and helplessness. The therapist would slow the cycle and help the partners share softer emotions and needs.",
          checklist: [
            { label: "Pursue-withdraw", keywords: ["pursue", "withdraw"] },
            { label: "Attachment injury", keywords: ["attachment injury", "betrayal", "affair"] },
            { label: "Softer emotion", keywords: ["soft", "primary", "vulnerable"] },
            { label: "Enactment", keywords: ["enact", "share", "turn"] }
          ]
        },
        {
          id: "systemic",
          label: "LMFT/systemic focus",
          modelAnswer: "The therapist would assess safety, trust, consent for couple work, goals, repair attempts, and the meaning of the anniversary trigger. Treatment should support accountability without turning one partner into the whole problem.",
          checklist: [
            { label: "Safety and consent", keywords: ["safety", "consent"] },
            { label: "Goals", keywords: ["goal", "repair"] },
            { label: "Context and meaning", keywords: ["meaning", "anniversary", "trigger"] },
            { label: "Balanced alliance", keywords: ["balanced", "alliance", "both"] }
          ]
        }
      ],
      tips: ["EFT language fits attachment injuries and pursue-withdraw cycles.", "Bowen language fits reactivity, self-positioning, and process observation.", "Balanced alliance matters even when one partner caused injury."]
    },
    {
      id: "compare-adult-daughter-cutoff",
      type: "modelCompare",
      title: "No Contact Holiday",
      difficulty: "hard",
      clientType: "Family",
      tags: ["Bowen", "Ethics", "Systemic Roles"],
      prompt: "An adult daughter wants to cut off her parents before a holiday. Her mother calls the therapist asking for updates. The client says contact makes her feel 'ten years old again.'",
      details: ["The daughter is the only identified client.", "No current danger is reported.", "The parents are not part of treatment."],
      fields: [
        {
          id: "bowen",
          label: "Bowen conceptualization",
          modelAnswer: "Bowen would explore emotional cutoff, fusion, family-of-origin reactivity, and differentiation. The goal is not forced reconciliation; it is a less reactive, more thoughtful position about contact.",
          checklist: [
            { label: "Cutoff", keywords: ["cutoff", "cut off", "distance"] },
            { label: "Fusion", keywords: ["fusion", "fused"] },
            { label: "Family of origin", keywords: ["family-of-origin", "family of origin", "parents"] },
            { label: "Differentiation", keywords: ["differentiat", "i-position"] }
          ]
        },
        {
          id: "eft",
          label: "EFT conceptualization",
          modelAnswer: "EFT-informed thinking would notice the attachment threat under contact: fear, shame, longing, and protection. If family work were appropriate, the therapist would pace emotional access and responsiveness rather than pushing exposure.",
          checklist: [
            { label: "Attachment threat", keywords: ["attachment", "threat", "safety"] },
            { label: "Protective strategy", keywords: ["protect", "avoid", "distance"] },
            { label: "Primary emotion", keywords: ["fear", "shame", "longing"] },
            { label: "Pacing", keywords: ["pace", "slow"] }
          ]
        },
        {
          id: "systemic",
          label: "LMFT/systemic focus",
          modelAnswer: "The LMFT should protect confidentiality, clarify who the client is, assess safety and coercion, explore cultural and relational meanings of contact, and avoid colluding with pressure from outside callers.",
          checklist: [
            { label: "Confidentiality", keywords: ["confidential", "privacy", "release"] },
            { label: "Client system", keywords: ["client", "who is the client"] },
            { label: "Safety or coercion", keywords: ["safety", "coercion", "pressure"] },
            { label: "Culture and meaning", keywords: ["culture", "meaning", "values"] }
          ]
        }
      ],
      tips: ["Bowen does not mean forcing contact.", "Confidentiality comes before pleasing family members.", "A systemic lens includes outside pressure without automatically inviting it into therapy."]
    },
    {
      id: "response-criticism-listen",
      type: "responsePractice",
      title: "You Never Listen",
      difficulty: "easy",
      clientType: "Couple",
      tags: ["EFT", "Validation", "Non-blaming"],
      prompt: "One partner turns to the other and says, 'You never listen to me. I am done trying.'",
      choices: [
        { text: "So part of you is exhausted and protesting because it feels like your voice does not reach your partner.", score: 4, feedback: "Strong. It validates, lowers blame, and tracks the attachment protest." },
        { text: "You need to stop using words like never because that is unfair.", score: 1, feedback: "This may be true, but it corrects before joining and can escalate shame." },
        { text: "Maybe your partner really does not listen.", score: 0, feedback: "This takes sides and strengthens the blame frame." },
        { text: "Let's ignore that and talk about chores.", score: 1, feedback: "This avoids the live emotional process." }
      ],
      checklist: [
        { label: "Validation", keywords: ["validate", "makes sense", "exhausted", "hurt"] },
        { label: "Non-blaming reframe", keywords: ["cycle", "pattern", "not blame", "protest"] },
        { label: "Primary emotion", keywords: ["hurt", "fear", "alone", "sad"] },
        { label: "Attachment need", keywords: ["need", "matter", "heard", "reach"] }
      ],
      modelAnswer: "I hear how tired and alone you feel in this moment. The words come out sharp, but underneath I hear a protest: you need to know you matter and that your partner can really hear you.",
      tips: ["Do not scold the wording before joining the pain.", "A good response validates without agreeing that one partner is the whole problem.", "Name the softer need under the protest."]
    },
    {
      id: "response-parent-blame",
      type: "responsePractice",
      title: "He Is the Problem",
      difficulty: "medium",
      clientType: "Family",
      tags: ["Systemic Roles", "Balanced Alliance"],
      prompt: "A parent points at their teen and says, 'He is the whole problem. Fix him.'",
      choices: [
        { text: "I hear how desperate you are for change. I also want us to look at the pattern everyone gets pulled into, not make one person carry the whole problem.", score: 4, feedback: "Strong systemic joining with a non-blaming frame." },
        { text: "Yes, he clearly needs to change first.", score: 0, feedback: "This scapegoats the teen and loses the systemic frame." },
        { text: "You are the real problem, not him.", score: 0, feedback: "This flips the blame instead of changing the frame." },
        { text: "Let's not talk about responsibility.", score: 1, feedback: "This avoids the central relational pattern." }
      ],
      checklist: [
        { label: "Join the parent", keywords: ["hear", "desperate", "stress", "concern"] },
        { label: "Protect teen alliance", keywords: ["everyone", "not one", "not blame", "whole problem"] },
        { label: "Systemic pattern", keywords: ["pattern", "cycle", "interaction"] },
        { label: "Shared goals", keywords: ["goal", "change", "together"] }
      ],
      modelAnswer: "I can see how much pressure you feel and how badly you want things to change. I also want to be careful that we do not make one person the container for the whole family's pain. Let's slow down and map what happens between everyone when things go off track.",
      tips: ["Join without joining the blame.", "Balanced alliance is an active therapist skill.", "Scapegoating is often a test of the therapist's systemic stance."]
    },
    {
      id: "response-bowen-triangle",
      type: "responsePractice",
      title: "Tell Her She Is Wrong",
      difficulty: "hard",
      clientType: "Family",
      tags: ["Bowen", "Triangle"],
      prompt: "In a family session, a father says to the therapist, 'You tell my wife she is overreacting. She will listen to you.'",
      choices: [
        { text: "I want to stay out of deciding who is right and help each of you watch what happens between you when anxiety rises.", score: 4, feedback: "Strong Bowen stance: neutral, detriangling, process-focused." },
        { text: "She is overreacting, but we can say it gently.", score: 0, feedback: "This joins the triangle and takes sides." },
        { text: "I refuse to talk when people disagree.", score: 1, feedback: "This avoids the process instead of coaching it." },
        { text: "Let's vote on who is right.", score: 0, feedback: "This intensifies the triangle." }
      ],
      checklist: [
        { label: "Detriangling", keywords: ["detriangle", "stay out", "not take sides", "triangle"] },
        { label: "Neutral stance", keywords: ["neutral", "not deciding", "not judge"] },
        { label: "Process focus", keywords: ["process", "what happens", "pattern"] },
        { label: "Anxiety/reactivity", keywords: ["anxiety", "reactivity", "reactive"] }
      ],
      modelAnswer: "I do not want to become the judge between you. I am more interested in helping each of you observe what happens when anxiety rises and how each of you can speak from your own position without pulling in a third person.",
      tips: ["Bowen therapists do not rescue one side.", "The move is to observe process and reduce reactivity.", "A calm refusal to join the triangle is itself the intervention."]
    },
    {
      id: "bowen-three-generation-anxiety",
      type: "bowenTrainer",
      title: "Three Generations of Panic",
      difficulty: "medium",
      clientType: "Family",
      tags: ["Bowen", "Genogram"],
      prompt: "A client reports panic attacks before family gatherings. Her mother had panic symptoms after divorce, and her grandmother stopped speaking to relatives after a conflict. The client says, 'I keep everyone calm or they fall apart.'",
      choices: {
        triangle: ["Client is pulled into managing tension between relatives", "No triangle is present because only one person is in session", "The therapist should become the family's messenger", "Triangles only happen with children"],
        fusion: ["The client overfunctions for others and feels responsible for their emotions", "Fusion means healthy closeness with no anxiety", "Fusion is only a legal term", "Fusion is fixed by cutting off"],
        cutoff: ["Grandmother's silence may reflect emotional cutoff", "Cutoff means calm differentiation", "Cutoff is always clinically recommended", "Cutoff only means geographic distance"],
        differentiation: ["Help the client develop an I-position while staying connected", "Tell the client to stop caring about family", "Make the client convince everyone to change", "Have the therapist solve the family conflict"],
        multigenerational: ["Map patterns of anxiety, divorce, silence, and caretaking across generations", "Ignore history and focus only on symptoms", "Ask only about childhood grades", "Use a genogram only for names and ages"],
        coachMove: ["Ask process questions and coach less reactive contact", "Give advice about who is right", "Create an emotional confrontation", "Join the family pressure"]
      },
      idealSelections: { triangle: 0, fusion: 0, cutoff: 0, differentiation: 0, multigenerational: 0, coachMove: 0 },
      rubric: {
        triangle: "Recognizes how the client is pulled into stabilizing tension.",
        fusion: "Names overresponsibility and emotional reactivity.",
        cutoff: "Sees silence as possible cutoff rather than maturity.",
        differentiation: "Chooses connected self-definition.",
        multigenerational: "Uses the three-generation pattern.",
        coachMove: "Keeps Bowen's calm coaching stance."
      },
      modelAnswer: "A Bowen view would map anxiety and cutoff over three generations. The client appears overfunctioning and fused with the family's emotional state. The therapist would use a family diagram, process questions, and coaching toward an I-position and less reactive contact.",
      tips: ["Bowen clues often include repeated patterns across generations.", "Overfunctioning is not the same as mature responsibility.", "The therapist coaches thinking instead of joining the emotional pressure."]
    },
    {
      id: "bowen-sibling-triangle",
      type: "bowenTrainer",
      title: "The Responsible Oldest",
      difficulty: "easy",
      clientType: "Family",
      tags: ["Bowen", "Sibling Position"],
      prompt: "An oldest sibling organizes all family care for an ill parent. The younger sibling avoids calls. The oldest asks the therapist to make the younger sibling help.",
      choices: {
        triangle: ["Oldest, younger sibling, and ill parent form a care triangle", "There is no triangle because caregiving is practical", "The therapist should become the fourth family manager", "The parent is irrelevant"],
        fusion: ["Oldest may be fused with the family caretaker role", "Fusion means refusing all help", "Fusion only appears in couples", "Fusion is the same as empathy"],
        cutoff: ["Younger sibling's avoidance may be cutoff or distance from anxiety", "Cutoff is impossible among adults", "Cutoff is always the healthiest option", "Cutoff means no family history matters"],
        differentiation: ["Coach the oldest to define a clear request without overfunctioning", "Coach the oldest to shame the sibling", "Tell the oldest to abandon the parent", "Make the therapist assign tasks"],
        multigenerational: ["Explore sibling roles and repeated caretaker patterns", "Ignore sibling position", "Assume birth order explains everything", "Study only the medical diagnosis"],
        coachMove: ["Use process questions about who contacts whom and what happens next", "Take over care coordination", "Decide who is selfish", "Use an EFT enactment as the first move"]
      },
      idealSelections: { triangle: 0, fusion: 0, cutoff: 0, differentiation: 0, multigenerational: 0, coachMove: 0 },
      rubric: {
        triangle: "Identifies the care triangle.",
        fusion: "Recognizes role fusion and overfunctioning.",
        cutoff: "Considers avoidance as a possible anxiety-management move.",
        differentiation: "Builds a clear self-position.",
        multigenerational: "Uses sibling position without making it deterministic.",
        coachMove: "Uses Bowen process questions."
      },
      modelAnswer: "The therapist would not become the family manager. A Bowen response studies how sibling position, overfunctioning, avoidance, and parent illness organize the system. The oldest can practice a clear request and limits without taking over everyone else's functioning.",
      tips: ["Sibling position is a clue, not a destiny.", "Bowen work often asks who contacts whom and what happens next.", "Do not confuse helping with overfunctioning."]
    },
    {
      id: "bowen-parent-child-projection",
      type: "bowenTrainer",
      title: "Watching the Child",
      difficulty: "hard",
      clientType: "Family",
      tags: ["Bowen", "Family Projection"],
      prompt: "Parents track every grade and mood shift of their daughter after a move. The daughter becomes more anxious and stops sleeping alone. The parents say, 'We cannot relax until she is okay.'",
      choices: {
        triangle: ["The child is pulled into stabilizing parental anxiety", "The daughter is unrelated to the parent system", "The therapist should side with the stricter parent", "Triangles require three adults"],
        fusion: ["Parents' functioning is fused with the child's symptoms", "Fusion means the child is loved", "Fusion is fixed by more monitoring", "Fusion means the parents should detach completely"],
        cutoff: ["Cutoff is not the central pattern; projection and fusion are stronger", "Cutoff is always the main Bowen concept", "Cutoff means good boundaries", "Cutoff means family therapy cannot help"],
        differentiation: ["Coach parents to calm their own anxiety and respond thoughtfully", "Tell parents to stop all contact with the child", "Make the child reassure parents daily", "Make the therapist monitor grades"],
        multigenerational: ["Ask how anxiety and child focus have appeared in previous generations", "Ignore family history", "Ask only about sleep hygiene", "Treat school grades as the only issue"],
        coachMove: ["Use family diagram and process questions about monitoring sequences", "Create a blame confrontation", "Give reassurance that nothing is wrong", "Tell the child to be mature"]
      },
      idealSelections: { triangle: 0, fusion: 0, cutoff: 0, differentiation: 0, multigenerational: 0, coachMove: 0 },
      rubric: {
        triangle: "Sees the child absorbing parental anxiety.",
        fusion: "Recognizes fused functioning.",
        cutoff: "Differentiates projection from cutoff.",
        differentiation: "Targets parental self-regulation.",
        multigenerational: "Looks for repeated family projection.",
        coachMove: "Uses Bowen assessment tools."
      },
      modelAnswer: "This is classic family projection language. The parents' anxiety focuses on the child and the child's functioning worsens under monitoring. The therapist would map the pattern, ask process questions, and coach the parents to manage their own anxiety while staying connected.",
      tips: ["Family projection is a major Bowen concept.", "The symptom can be intensified by anxious focus.", "The intervention is parent differentiation, not child blame."]
    },
    {
      id: "bowen-cutoff-return",
      type: "bowenTrainer",
      title: "Back After Five Years",
      difficulty: "medium",
      clientType: "Individual",
      tags: ["Bowen", "Cutoff"],
      prompt: "A client has not spoken to his brother in five years. After their father's illness, the brother texts. The client wants to reply but feels flooded and says, 'If I answer, I lose myself.'",
      choices: {
        triangle: ["Father's illness may pull brothers back into an unresolved triangle", "No family process matters because the client is individual", "The therapist should text the brother", "Triangles only happen in couple therapy"],
        fusion: ["Feeling like contact means losing self suggests fusion pressure", "Fusion means having no emotion", "Fusion is solved by immediate closeness", "Fusion is only about parenting"],
        cutoff: ["The five-year silence is emotional cutoff", "Cutoff is the same as differentiation", "Cutoff is always wrong and must end", "Cutoff means no anxiety remains"],
        differentiation: ["Plan a thoughtful contact that preserves self and connection", "Force a reunion immediately", "Avoid all contact forever without reflection", "Ask the father to decide"],
        multigenerational: ["Map illness, conflict, distance, and sibling patterns in the family diagram", "Ignore the father's illness", "Study only the text message wording", "Use a genogram only after symptoms disappear"],
        coachMove: ["Coach an I-position and process the anxiety before contact", "Tell the client what to say word for word", "Take sides against the brother", "Use persuasion to make the client reply"]
      },
      idealSelections: { triangle: 0, fusion: 0, cutoff: 0, differentiation: 0, multigenerational: 0, coachMove: 0 },
      rubric: {
        triangle: "Links illness and sibling contact to the emotional system.",
        fusion: "Names the threat to self.",
        cutoff: "Recognizes distance as anxiety management.",
        differentiation: "Chooses thoughtful connected autonomy.",
        multigenerational: "Maps repeated family process.",
        coachMove: "Uses I-position coaching."
      },
      modelAnswer: "Bowen work would not push immediate reconciliation or celebrate cutoff as the goal. The therapist helps the client study the anxiety around contact, form an I-position, and decide on a manageable response that increases differentiation.",
      tips: ["Cutoff can look calm from the outside but remain emotionally intense.", "Differentiation can include contact or distance, depending on the self-position.", "The therapist does not become the messenger."]
    },
    {
      id: "bowen-couple-triangled-child",
      type: "bowenTrainer",
      title: "The Homework Referee",
      difficulty: "hard",
      clientType: "Family",
      tags: ["Bowen", "Triangle"],
      prompt: "Parents argue nightly about their son's homework. When conflict rises, the son starts crying and both parents shift attention to calming him. The argument stops until the next night.",
      choices: {
        triangle: ["The son's distress stabilizes the parental conflict triangle", "The son is the only problem", "The therapist should join one parent against the other", "Triangles are always intentional"],
        fusion: ["Parents and child react as one anxious unit around schoolwork", "Fusion means healthy teamwork", "Fusion is solved by blaming the child", "Fusion cannot happen in families"],
        cutoff: ["Cutoff is less central than triangulation and projection here", "Cutoff is always present in conflict", "Cutoff means crying", "Cutoff means therapy must end"],
        differentiation: ["Coach parents to manage anxiety and speak directly without pulling the child in", "Have the child mediate", "Tell one parent to take over fully", "Let the therapist decide homework rules"],
        multigenerational: ["Ask how school pressure and conflict were handled in each parent's family", "Do not ask about family history", "Study only the son's grades", "Assume this started yesterday"],
        coachMove: ["Map the sequence and ask what each person does when tension rises", "Start with an intense emotional enactment", "Declare the stricter parent correct", "Tell the son to stop crying"]
      },
      idealSelections: { triangle: 0, fusion: 0, cutoff: 0, differentiation: 0, multigenerational: 0, coachMove: 0 },
      rubric: {
        triangle: "Identifies the stabilizing triangle.",
        fusion: "Sees the family as an anxious emotional unit.",
        cutoff: "Prioritizes the stronger Bowen concept.",
        differentiation: "Moves parents out of child-focused reactivity.",
        multigenerational: "Connects school pressure across generations.",
        coachMove: "Maps sequence and process."
      },
      modelAnswer: "The son's distress is not the whole problem; it may be where parental tension lands. A Bowen therapist would map the nightly sequence, help parents observe the triangle, and coach direct, less reactive functioning around schoolwork.",
      tips: ["Symptoms can stabilize conflict.", "Bowen is not about blaming the identified patient.", "Look for the repeating sequence."]
    },
    {
      id: "eft-cycle-dishes",
      type: "eftMapper",
      title: "The Dishes Fight",
      difficulty: "easy",
      clientType: "Couple",
      tags: ["EFT", "Cycle"],
      prompt: "Maya says, 'You leave everything to me.' Jordan gets quiet, cleans silently, and avoids eye contact. Maya follows him room to room asking why he does not care.",
      choices: {
        cycle: ["Pursue-withdraw cycle", "Healthy conflict resolution", "Bowen cutoff as the whole frame", "A single-person motivation problem"],
        pursuerMove: ["Criticizes and follows to get a response", "Leaves the room to self-soothe", "Uses calm I-positions", "Makes no move"],
        withdrawerMove: ["Shuts down and cleans silently", "Moves closer with reassurance", "Asks for vulnerable contact", "Tracks the cycle out loud"],
        secondaryEmotion: ["Maya's anger and Jordan's defensiveness", "Only joy", "Only intellectual curiosity", "No emotion is present"],
        primaryEmotion: ["Fear of being alone and fear of failing", "A desire to win", "A need to punish", "No softer emotion"],
        attachmentFear: ["I do not matter / I will disappoint you", "The house is too quiet", "Dishes are morally wrong", "Therapy will be too short"],
        unmetNeed: ["Reassurance, teamwork, and responsiveness", "A perfect chore chart before any emotion", "One partner winning", "Less closeness"],
        nextMove: ["Validate both protections and slow the cycle", "Tell Maya she is right", "Tell Jordan to stop talking forever", "Start problem-solving before accessing emotion"]
      },
      idealSelections: { cycle: 0, pursuerMove: 0, withdrawerMove: 0, secondaryEmotion: 0, primaryEmotion: 0, attachmentFear: 0, unmetNeed: 0, nextMove: 0 },
      rubric: {
        cycle: "Names the central EFT cycle.",
        pursuerMove: "Tracks the protest move.",
        withdrawerMove: "Tracks the protection move.",
        secondaryEmotion: "Recognizes reactive emotion.",
        primaryEmotion: "Finds softer emotion.",
        attachmentFear: "Names attachment meaning.",
        unmetNeed: "Identifies attachment need.",
        nextMove: "Chooses de-escalation before problem-solving."
      },
      modelAnswer: "EFT would map a pursue-withdraw cycle: Maya protests disconnection through criticism and Jordan protects against failure by shutting down. The next move is to validate both, slow the pattern, and access softer fears and needs before solving chores.",
      tips: ["In EFT, the chore is often the stage, not the core.", "Track action tendencies and softer emotion.", "Do not problem-solve too early."]
    },
    {
      id: "eft-cycle-intimacy",
      type: "eftMapper",
      title: "Not Tonight Again",
      difficulty: "medium",
      clientType: "Couple",
      tags: ["EFT", "Attachment"],
      prompt: "Sam reaches for closeness and says Riley is cold. Riley says pressure makes them want to disappear. Sam becomes sharper; Riley sleeps on the couch.",
      choices: {
        cycle: ["Pursue-withdraw around closeness", "Purely a scheduling issue", "No relational pattern", "Only individual pathology"],
        pursuerMove: ["Reaches, criticizes, and escalates protest", "Disappears first", "Uses no protest", "Becomes the therapist"],
        withdrawerMove: ["Pulls away and sleeps elsewhere", "Pursues harder", "Expresses primary emotion first", "Maps the cycle"],
        secondaryEmotion: ["Sam's anger and Riley's guardedness", "Only relief", "Only boredom", "No secondary emotion"],
        primaryEmotion: ["Sam fears rejection; Riley fears inadequacy or pressure", "Both only want control", "Only laziness", "No vulnerability"],
        attachmentFear: ["I am unwanted / I am not enough", "The calendar is wrong", "There is too much furniture", "The therapist is judging chores"],
        unmetNeed: ["Safety, desire, acceptance, and room to approach", "Winning the argument", "Avoiding all contact", "A scripted apology only"],
        nextMove: ["Slow the cycle and access each partner's softer fear", "Assign more pressure at home", "Tell Sam to stop needing", "Tell Riley to comply"]
      },
      idealSelections: { cycle: 0, pursuerMove: 0, withdrawerMove: 0, secondaryEmotion: 0, primaryEmotion: 0, attachmentFear: 0, unmetNeed: 0, nextMove: 0 },
      rubric: {
        cycle: "Frames closeness as a cycle.",
        pursuerMove: "Names protest for contact.",
        withdrawerMove: "Names retreat from pressure.",
        secondaryEmotion: "Separates reactive emotion.",
        primaryEmotion: "Finds vulnerability.",
        attachmentFear: "Names attachment threat.",
        unmetNeed: "Identifies safety and acceptance.",
        nextMove: "Uses EFT pacing."
      },
      modelAnswer: "A strong EFT map sees protest and withdrawal protecting two vulnerable positions: fear of rejection and fear of inadequacy. The therapist would slow the cycle, validate pressure and longing, and help each partner risk a softer message.",
      tips: ["Sexual conflict can carry attachment meanings.", "EFT avoids blaming desire or avoidance.", "Pressure usually needs slowing before enactment."]
    },
    {
      id: "eft-cycle-teen-parent",
      type: "eftMapper",
      title: "Door Slam",
      difficulty: "medium",
      clientType: "Family",
      tags: ["EFFT", "Parent-Teen"],
      prompt: "A teen says, 'You only care about grades,' and slams the door. The parent yells, 'I am the only one trying!' The teen refuses dinner and the parent checks the school portal every hour.",
      choices: {
        cycle: ["Pursue-withdraw/protest cycle between parent and teen", "The teen is simply disrespectful", "The parent is simply controlling", "No cycle"],
        pursuerMove: ["Parent pushes, checks, and yells to regain connection/control", "Teen calmly asks for support", "Parent withdraws completely first", "Therapist grades homework"],
        withdrawerMove: ["Teen withdraws, slams door, refuses dinner", "Teen moves closer directly", "Parent makes no move", "School portal creates therapy"],
        secondaryEmotion: ["Parent anger and teen defiance", "Only happiness", "No emotion", "Only gratitude"],
        primaryEmotion: ["Parent fear and teen hurt/disconnection", "Only manipulation", "Only laziness", "No softer emotion"],
        attachmentFear: ["I am failing you / I only matter when I perform", "There is no family meaning", "Grades are unrelated", "The therapist must pick sides"],
        unmetNeed: ["Support, trust, and felt care beyond performance", "Punishment only", "No parental involvement", "A perfect grade average"],
        nextMove: ["Validate both and shape a safer parent message", "Make the teen apologize immediately", "Ban all emotion", "Tell the parent to monitor more"]
      },
      idealSelections: { cycle: 0, pursuerMove: 0, withdrawerMove: 0, secondaryEmotion: 0, primaryEmotion: 0, attachmentFear: 0, unmetNeed: 0, nextMove: 0 },
      rubric: {
        cycle: "Uses an attachment/systemic family frame.",
        pursuerMove: "Tracks parental protest.",
        withdrawerMove: "Tracks teen protection.",
        secondaryEmotion: "Names reactive emotions.",
        primaryEmotion: "Finds softer fears.",
        attachmentFear: "Links grades to felt security.",
        unmetNeed: "Identifies connection and trust.",
        nextMove: "Shapes safe responsiveness."
      },
      modelAnswer: "In EFFT terms, the grade conflict may organize an attachment cycle: parental fear becomes pressure, teen hurt becomes withdrawal, and both feel unseen. The therapist can validate both and choreograph a manageable parent message of care that is not only about performance.",
      tips: ["Family EFT can work with parent-child attachment signals.", "Behavior and performance can hide attachment fears.", "Do not make the teen the only client."]
    },
    {
      id: "eft-cycle-injury-repair",
      type: "eftMapper",
      title: "The Forgotten Appointment",
      difficulty: "hard",
      clientType: "Couple",
      tags: ["EFT", "Attachment Injury"],
      prompt: "One partner missed a medical appointment where the other received frightening test results. Since then, one checks phones constantly and the other says, 'I already apologized. Nothing works.'",
      choices: {
        cycle: ["Attachment injury with pursue-withdraw repair cycle", "Only a memory problem", "Bowen sibling position", "No clinical pattern"],
        pursuerMove: ["Checks, protests, and demands proof of mattering", "Withdraws from all contact", "Uses detached observation", "Asks no questions"],
        withdrawerMove: ["Defends, apologizes quickly, and shuts down", "Pursues with comfort", "Maps the injury calmly", "Invites enactment immediately"],
        secondaryEmotion: ["Anger, suspicion, defensiveness", "Only peace", "Only humor", "No emotion"],
        primaryEmotion: ["Fear of abandonment and shame/helplessness", "A wish to win", "A preference for conflict", "No primary emotion"],
        attachmentFear: ["You will not be there when I need you / I can never repair this", "The appointment location was confusing", "Phones are the main problem", "Therapy caused the injury"],
        unmetNeed: ["Accountable comfort, responsiveness, and repair", "More surveillance", "Less accountability", "Silence"],
        nextMove: ["Validate the injury and prepare a paced repair enactment", "Demand instant forgiveness", "Tell the injured partner to move on", "Ignore the missed appointment"]
      },
      idealSelections: { cycle: 0, pursuerMove: 0, withdrawerMove: 0, secondaryEmotion: 0, primaryEmotion: 0, attachmentFear: 0, unmetNeed: 0, nextMove: 0 },
      rubric: {
        cycle: "Recognizes attachment injury.",
        pursuerMove: "Tracks protest for reassurance.",
        withdrawerMove: "Tracks shame-based defense.",
        secondaryEmotion: "Names reactive surface.",
        primaryEmotion: "Finds hurt and shame.",
        attachmentFear: "Names injury meaning.",
        unmetNeed: "Identifies accountable repair.",
        nextMove: "Uses paced EFT repair."
      },
      modelAnswer: "EFT would treat the missed appointment as an attachment injury if it carries the meaning 'you were not there when I needed you.' The therapist would slow the blame-defend cycle, access hurt and shame, and prepare an accountable repair enactment.",
      tips: ["Repair is not the same as quick apology.", "Injuries need validation and accountability.", "The withdrawer often needs help with shame before responsiveness."]
    },
    {
      id: "intervention-safety-first",
      type: "nextIntervention",
      title: "Before the Enactment",
      difficulty: "hard",
      clientType: "Couple",
      tags: ["Ethics", "Safety", "EFT"],
      prompt: "A couple asks for EFT enactments, but one partner says quietly that arguments sometimes get 'scary' at home and looks at the other before answering.",
      choices: [
        { text: "Pause routine couple work and assess safety/coercion privately and carefully.", score: 4, feedback: "Best. Safety and appropriateness of conjoint work come first." },
        { text: "Begin a vulnerable enactment so they can practice honesty.", score: 0, feedback: "Unsafe when coercion or retaliation may be present." },
        { text: "Teach active listening and ignore the hesitation.", score: 1, feedback: "Skills work can miss danger and power." },
        { text: "Ask the dominant partner to explain what scary means.", score: 0, feedback: "This may increase risk and silence disclosure." }
      ],
      checklist: [
        { label: "Safety assessment", keywords: ["safety", "risk", "screen"] },
        { label: "Private screening", keywords: ["private", "separate", "individ"] },
        { label: "Coercion/retaliation", keywords: ["coercion", "retaliation", "control"] },
        { label: "Conjoint appropriateness", keywords: ["conjoint", "couple therapy", "appropriate"] }
      ],
      modelAnswer: "The next move is safety assessment, not an enactment. The therapist should clarify confidentiality and safety limits, screen carefully for coercion and retaliation risk, and decide whether conjoint therapy is clinically appropriate.",
      tips: ["Model fidelity never outranks safety.", "Hesitation and looking to a partner can be clinical data.", "Some couple interventions are contraindicated in coercive control."]
    },
    {
      id: "intervention-bowen-process",
      type: "nextIntervention",
      title: "Caught in the Middle",
      difficulty: "medium",
      clientType: "Family",
      tags: ["Bowen", "Next Step"],
      prompt: "A mother asks the therapist to convince her adult son to stop talking to his father. The son says he wants relationships with both parents but feels guilty.",
      choices: [
        { text: "Ask process questions and coach the son to define his own position without taking sides.", score: 4, feedback: "Best Bowen-consistent next step." },
        { text: "Tell the son which parent deserves loyalty.", score: 0, feedback: "This joins the triangle." },
        { text: "Use a deep EFT enactment before mapping the triangle.", score: 1, feedback: "Possibly useful later, but the Bowen next step is detriangling/process." },
        { text: "Tell the mother she is wrong and end the session.", score: 0, feedback: "This blames and escalates." }
      ],
      checklist: [
        { label: "Triangle", keywords: ["triangle", "middle"] },
        { label: "Process questions", keywords: ["process question", "sequence", "pattern"] },
        { label: "I-position", keywords: ["i-position", "own position", "self"] },
        { label: "No taking sides", keywords: ["not take sides", "neutral", "detriangle"] }
      ],
      modelAnswer: "A Bowen response would detriangle. The therapist could ask what happens when the son maintains contact with both parents, then coach him to speak from an I-position without rescuing either parent or becoming the judge.",
      tips: ["Bowen next steps often sound calmer and less dramatic.", "Do not become the decision-maker in the family triangle.", "Detriangling protects the therapist role too."]
    },
    {
      id: "intervention-treatment-drift",
      type: "nextIntervention",
      title: "Still Coming Every Week",
      difficulty: "easy",
      clientType: "Couple",
      tags: ["Systemic Roles", "Termination"],
      prompt: "A couple has met their goals and reports rare conflict, but they keep scheduling weekly sessions because it feels reassuring. The treatment plan has not been updated.",
      choices: [
        { text: "Review progress, update goals, and discuss step-down or termination.", score: 4, feedback: "Best. This addresses progress, ethics, and treatment drift." },
        { text: "Keep weekly sessions indefinitely because reassurance is pleasant.", score: 0, feedback: "Ongoing care needs a clinical purpose." },
        { text: "End abruptly without planning.", score: 1, feedback: "Termination should be clinically planned." },
        { text: "Create a new problem to justify care.", score: 0, feedback: "That is unethical." }
      ],
      checklist: [
        { label: "Progress review", keywords: ["progress", "review"] },
        { label: "Treatment plan", keywords: ["treatment plan", "goal"] },
        { label: "Step-down/termination", keywords: ["step-down", "terminate", "termination"] },
        { label: "Ethics", keywords: ["ethical", "clinically necessary", "drift"] }
      ],
      modelAnswer: "The therapist should review gains, revisit the treatment plan, and discuss whether new goals, reduced frequency, booster sessions, or termination best fit the couple's needs.",
      tips: ["Reassurance can become dependency.", "Termination is a clinical intervention.", "Treatment plans should not drift."]
    },
    {
      id: "ethics-secret-affair",
      type: "ethicsScanner",
      title: "The Private Secret",
      difficulty: "medium",
      clientType: "Couple",
      tags: ["Ethics", "Confidentiality"],
      prompt: "During an individual check-in within couple therapy, one partner discloses an ongoing affair and says, 'Do not tell my spouse or I will quit.' The informed consent did not clearly explain a secrets policy.",
      flags: ["Confidentiality policy unclear", "Informed consent issue", "Immediate mandated report required", "Therapist role conflict", "Need to avoid deceptive conjoint treatment", "Guaranteed secrecy is required"],
      idealFlags: [0, 1, 3, 4],
      checklist: [
        { label: "Clarify secrets policy", keywords: ["secrets policy", "policy", "confidentiality"] },
        { label: "Informed consent", keywords: ["informed consent", "consent"] },
        { label: "Role and couple treatment", keywords: ["role", "couple", "conjoint"] },
        { label: "Consult/document", keywords: ["consult", "document", "record"] }
      ],
      modelAnswer: "The therapist should not promise secrecy that undermines couple therapy. Because the policy was unclear, the therapist should consult, document, clarify the treatment frame and confidentiality limits, and address whether conjoint therapy can continue ethically.",
      tips: ["Secrets policies should be part of informed consent.", "Not every secret is mandated reporting.", "The therapist must avoid becoming part of deception."]
    },
    {
      id: "ethics-child-abuse",
      type: "ethicsScanner",
      title: "The Bruise Story",
      difficulty: "easy",
      clientType: "Family",
      tags: ["Ethics", "Mandated Duties"],
      prompt: "A child says a caregiver hit them with a belt and told them not to tell. The caregiver says the child lies for attention.",
      flags: ["Possible mandated reporting", "Immediate safety assessment", "Need to document facts and actions", "Use only family sculpting first", "Consult law/supervision as needed", "Promise the child secrecy"],
      idealFlags: [0, 1, 2, 4],
      checklist: [
        { label: "Mandated report", keywords: ["mandated", "report", "abuse"] },
        { label: "Safety", keywords: ["safety", "immediate", "protect"] },
        { label: "Documentation", keywords: ["document", "record"] },
        { label: "Consult law/supervision", keywords: ["consult", "law", "supervision"] }
      ],
      modelAnswer: "The therapist should follow mandated reporting law, assess immediate safety, avoid promising secrecy, document the disclosure and actions taken, and consult as needed. Model-specific family work comes after legal and safety duties.",
      tips: ["Risk and law outrank routine technique.", "Do not wait for the caregiver to agree.", "Document what was disclosed and what you did."]
    },
    {
      id: "ethics-dual-role",
      type: "ethicsScanner",
      title: "Coach and Therapist",
      difficulty: "hard",
      clientType: "Individual",
      tags: ["Ethics", "Boundaries"],
      prompt: "A client asks the therapist to also coach their child's sports team because 'you understand our family.' The therapist's child is on the same team.",
      flags: ["Multiple relationship risk", "Objectivity and exploitation concerns", "Confidentiality concerns", "No issue if the client requested it", "Possible referral/boundary discussion", "Documentation of decision"],
      idealFlags: [0, 1, 2, 4, 5],
      checklist: [
        { label: "Multiple relationship", keywords: ["multiple relationship", "dual", "boundary"] },
        { label: "Objectivity/harm", keywords: ["objectivity", "harm", "exploit"] },
        { label: "Confidentiality", keywords: ["confidential"] },
        { label: "Referral or boundary", keywords: ["refer", "boundary", "decline"] }
      ],
      modelAnswer: "The therapist should evaluate the multiple relationship risk, confidentiality, objectivity, potential harm, and referral options. The request can be discussed clinically, but accepting the coaching role would likely compromise boundaries.",
      tips: ["Client preference does not erase ethics risk.", "Community overlap can be real, but it must be managed.", "Document the reasoning."]
    }
  ];

  function expandQuestionBank(baseQuestions) {
    var targets = {
      "Bowen": { easy: 40, medium: 40, hard: 40 },
      "EFT": { easy: 24, medium: 24, hard: 24 },
      "Systemic Roles": { easy: 24, medium: 24, hard: 24 },
      "Ethics": { easy: 24, medium: 24, hard: 24 },
      "Comparison": { easy: 24, medium: 24, hard: 24 }
    };
    var bank = buildSupplementBank();
    var expanded = baseQuestions.slice();
    var existingIds = {};
    expanded.forEach(function (question) {
      existingIds[question.id] = true;
    });

    Object.keys(targets).forEach(function (model) {
      ["easy", "medium", "hard"].forEach(function (difficulty) {
        var current = countQuestions(expanded, model, difficulty);
        var target = targets[model][difficulty];
        var concepts = bank[model];
        var index = 0;
        while (current < target) {
          var concept = concepts[index % concepts.length];
          var itemNumber = Math.floor(index / concepts.length) + 1;
          var question = makeSupplementQuestion(model, difficulty, concept, itemNumber);
          if (!existingIds[question.id]) {
            expanded.push(question);
            existingIds[question.id] = true;
            current += 1;
          }
          index += 1;
        }
      });
    });

    return expanded;
  }

  function countQuestions(items, model, difficulty) {
    return items.filter(function (item) {
      return item.model === model && item.difficulty === difficulty;
    }).length;
  }

  function makeSupplementQuestion(model, difficulty, concept, itemNumber) {
    var level = difficulty === "easy" ? 0 : difficulty === "medium" ? 1 : 2;
    var setup = concept.setups[level % concept.setups.length];
    var prompt = setup.replace("{concept}", concept.term).replace("{clue}", concept.clue);
    var id = [
      "supplement",
      slugify(model),
      difficulty,
      slugify(concept.topic),
      itemNumber
    ].join("-");

    return {
      id: id,
      model: model,
      topic: concept.topic,
      difficulty: difficulty,
      prompt: prompt,
      choices: [
        concept.correct[level],
        concept.distractors[0],
        concept.distractors[1],
        concept.distractors[2]
      ],
      answerIndex: 0,
      hint: concept.hints[level],
      explanation: concept.explanations[level],
      wrongExplanations: [
        "",
        concept.wrong[0],
        concept.wrong[1],
        concept.wrong[2]
      ]
    };
  }

  function slugify(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function buildSupplementBank() {
    return {
      "Bowen": [
        concept("Differentiation", "self-definition under family pressure", [
          "Which Bowen response best fits a client trying to stay connected without automatically rescuing everyone?",
          "A client says, 'I want to answer my family differently without cutting them off.' What is the best Bowen-consistent goal?",
          "A family-of-origin case centers on {clue}. Which Bowen move best matches the theory of change?"
        ], [
          "Support an I-position while maintaining thoughtful contact",
          "Increase differentiation rather than reactive distance",
          "Coach observation of reactivity and practice self-defined contact"
        ], "Think connection plus self-definition, not isolation.", [
          "Differentiation means staying emotionally connected while thinking and acting from a clearer self.",
          "Bowen does not equate maturity with cutoff; the goal is less reactivity and more self-definition.",
          "Hard Bowen items often ask for a process intervention that supports differentiation without rescuing or blaming."
        ], [
          "Push the client to cut off the family permanently",
          "Tell the client which relative is wrong",
          "Use an intense attachment enactment as the first move"
        ], [
          "Cutoff can be another form of reactivity rather than differentiation.",
          "Bowen avoids blame and focuses on each person's part in the process.",
          "Enactment is more EFT-consistent than Bowen-consistent."
        ]),
        concept("Triangles", "a third person stabilizing tension between two others", [
          "Which Bowen concept best describes {clue}?",
          "Two family members reduce their tension by pulling in a child, parent, or therapist. What should the Bowen therapist notice first?",
          "A couple asks the therapist to decide who is right while a relative is already taking sides. What is the best Bowen frame?"
        ], [
          "A triangle",
          "A triangle that manages anxiety in the system",
          "The therapist should stay detriangled and help the clients observe the three-person process"
        ], "Look for two-person tension managed through a third person.", [
          "A triangle is a three-person pattern used to manage anxiety or stabilize a tense dyad.",
          "Bowen work often begins by seeing how anxiety moves into a third relationship.",
          "The therapist avoids becoming the new third point and coaches observation of the process."
        ], [
          "A completed pursuer softening event",
          "A purely individual diagnosis",
          "A paradoxical directive"
        ], [
          "Pursuer softening is EFT language, not the Bowen concept for a three-person pattern.",
          "The stem is relational and systemic, not only individual.",
          "A paradox is a strategic intervention, not the Bowen concept."
        ]),
        concept("Emotional Cutoff", "distance used to manage unresolved attachment anxiety", [
          "A client handles family anxiety by disappearing, blocking calls, and refusing all contact. Which Bowen concept is most likely?",
          "In Bowen terms, what is the risk when a client says, 'I am calm only if I never speak to them again'?",
          "A hard exam item contrasts mature boundaries with {clue}. What should you choose?"
        ], [
          "Emotional cutoff",
          "The client may be using cutoff rather than differentiation",
          "Explore the unresolved process and coach thoughtful contact or distance"
        ], "Distance can lower anxiety without resolving the relationship process.", [
          "Emotional cutoff is managing unresolved attachment through distance or avoidance.",
          "Cutoff can look calm but still be organized by reactivity.",
          "Bowen distinguishes thoughtful boundaries from reactive cutoff."
        ], [
          "Pursuer softening",
          "A miracle question",
          "A structural hierarchy intervention"
        ], [
          "Pursuer softening is EFT language.",
          "The miracle question is solution-focused, not Bowen cutoff.",
          "Hierarchy language is more structural than Bowen."
        ]),
        concept("Family Projection Process", "parental anxiety focusing on a child", [
          "Parents repeatedly monitor one child and interpret normal mistakes as danger. Which Bowen concept fits best?",
          "A child becomes the focus of parents' unresolved anxiety. What is the most Bowen-consistent formulation?",
          "A hard Bowen item describes {clue}. Which answer best fits?"
        ], [
          "Family projection process",
          "Parental anxiety is being transmitted through the family projection process",
          "Assess how anxiety is focused on the child and coach parents toward less reactive functioning"
        ], "Look for parental anxiety landing on one child.", [
          "Family projection process describes parental anxiety shaping a child's functioning.",
          "Bowen focuses on how anxiety moves through relationships rather than blaming the child.",
          "The intervention should reduce anxious focus and increase parental self-observation."
        ], [
          "Only child oppositionality",
          "A therapist-created paradox",
          "A completed attachment repair"
        ], [
          "The stem emphasizes parental anxiety, not only child behavior.",
          "Paradox is strategic, not Bowen projection.",
          "Attachment repair is not the Bowen concept here."
        ]),
        concept("Multigenerational Transmission", "patterns repeating across generations", [
          "A family diagram shows repeated cutoffs, overfunctioning, and symptoms across three generations. Which concept is being tested?",
          "Why would a Bowen therapist ask about grandparents, sibling roles, illnesses, and cutoffs?",
          "A hard item asks what to do after seeing {clue}. Which response best fits Bowen?"
        ], [
          "Multigenerational transmission process",
          "To identify repeated emotional process across generations",
          "Use the family diagram to coach self-observation and differentiation"
        ], "Bowen asks what repeats over generations.", [
          "Multigenerational transmission describes patterns of functioning and differentiation across generations.",
          "The family diagram helps reveal repeated emotional process.",
          "The therapist uses the pattern to support differentiation, not to assign blame."
        ], [
          "Only present-focused communication training",
          "A behavioral reward plan",
          "A therapist decision about who caused the problem"
        ], [
          "Communication training alone misses the generational Bowen focus.",
          "A reward plan is behavioral, not multigenerational.",
          "Bowen avoids assigning blame."
        ]),
        concept("Nuclear Family Emotional Process", "marital conflict, distance, symptoms, or child impairment under anxiety", [
          "A couple's anxiety shows up as conflict, distance, and focus on one child's symptoms. Which Bowen idea fits?",
          "Bowen would most likely understand marital conflict and child symptoms as part of what process?",
          "A hard exam stem links {clue}. What is the best conceptualization?"
        ], [
          "Nuclear family emotional process",
          "Nuclear family emotional process under chronic anxiety",
          "Assess the anxiety pattern among conflict, distance, spouse functioning, and child focus"
        ], "This concept names common patterns in the nuclear family under anxiety.", [
          "The nuclear family emotional process describes how anxiety appears in marital conflict, distance, dysfunction, or child focus.",
          "Bowen looks at the relationship system rather than one symptom in isolation.",
          "Hard items often combine child symptoms and couple anxiety under this concept."
        ], [
          "An isolated individual problem only",
          "A completed EFT enactment",
          "A court-related forensic opinion"
        ], [
          "Bowen frames this systemically.",
          "EFT enactment is an intervention, not this Bowen concept.",
          "The stem is clinical, not forensic."
        ]),
        concept("Sibling Position", "birth-order role expectations across family systems", [
          "A genogram shows oldest children repeatedly overfunctioning and youngest children being protected. What Bowen lens is useful?",
          "Sibling position is best used in Bowen theory as:",
          "A hard question includes {clue}. What is the best use of that information?"
        ], [
          "Sibling position",
          "A clue about roles and functioning, not a fixed diagnosis",
          "Use sibling position as one hypothesis while still assessing triangles and differentiation"
        ], "Sibling position is a clue, not destiny.", [
          "Sibling position can illuminate expected roles in a family system.",
          "Bowen uses sibling position cautiously as one part of the larger assessment.",
          "Do not overuse birth order as a complete explanation."
        ], [
          "A fixed diagnosis",
          "Proof of who caused the family problem",
          "A reason to skip the family diagram"
        ], [
          "Sibling position is not diagnostic by itself.",
          "Bowen does not use it to assign blame.",
          "It complements, not replaces, broader assessment."
        ]),
        concept("Societal Emotional Process", "broader social anxiety influencing families", [
          "A family becomes more reactive during community stress and economic strain. Which Bowen concept can apply?",
          "Bowen theory can connect family reactivity to larger social anxiety through:",
          "A hard item links family regression with {clue}. Which concept fits?"
        ], [
          "Societal emotional process",
          "Societal emotional process",
          "Consider how broader anxiety intensifies family functioning while still assessing the family pattern"
        ], "Bowen extends emotional process beyond the household.", [
          "Societal emotional process describes how broader anxiety can affect families.",
          "The family is still assessed systemically, but social context is included.",
          "Hard items may ask how social stress influences family reactivity."
        ], [
          "A no-secrets policy",
          "Pursuer softening",
          "A paradoxical ordeal"
        ], [
          "No-secrets policy is an ethics/couple frame issue.",
          "Pursuer softening is EFT.",
          "A paradoxical ordeal is strategic."
        ])
      ],
      "EFT": [
        concept("Negative Cycle", "pursue-withdraw or blame-defend patterns", [
          "In EFT, what is the first target when partners are caught in {clue}?",
          "A couple keeps repeating the same argument even after learning communication skills. What should EFT track?",
          "A hard EFT item asks what to do before problem-solving when the cycle escalates. Choose the best answer."
        ], [
          "Identify and de-escalate the negative cycle",
          "Track the cycle and the attachment meanings underneath it",
          "Slow the cycle, validate protection, and access primary emotion"
        ], "EFT treats the cycle as the enemy.", [
          "EFT begins by naming and de-escalating the negative interaction cycle.",
          "Communication rules often fail if the attachment cycle remains active.",
          "Hard EFT items usually reward process tracking before problem-solving."
        ], [
          "Decide which partner is right",
          "Use only a three-generation genogram",
          "Ignore emotion and assign chores"
        ], [
          "EFT avoids blame and frames the cycle as the problem.",
          "A genogram is more Bowen-consistent.",
          "EFT directly engages emotion and attachment meaning."
        ]),
        concept("Primary Emotion", "vulnerable fear, shame, hurt, or longing beneath reactivity", [
          "A partner's anger softens into fear of not mattering. What is EFT accessing?",
          "EFT distinguishes secondary reactive emotion from:",
          "A hard EFT question describes {clue}. What should the therapist do?"
        ], [
          "Primary emotion",
          "Primary emotion and attachment meaning",
          "Heighten and organize the primary emotion within tolerance"
        ], "Look beneath anger, criticism, or shutdown.", [
          "Primary emotion is the vulnerable feeling beneath reactive strategies.",
          "EFT organizes emotion so attachment needs can be expressed.",
          "The therapist deepens emotion carefully, not recklessly."
        ], [
          "Differentiation of self",
          "A strategic paradox",
          "Only a behavioral contract"
        ], [
          "Differentiation is Bowen language.",
          "Paradox is strategic, not EFT emotion work.",
          "Behavioral contracts miss the emotional process."
        ]),
        concept("Enactment", "a direct in-session emotional message between partners", [
          "After a partner accesses softer longing, the EFT therapist asks them to turn and share it. What is this?",
          "Which EFT intervention creates a new bonding interaction in the room?",
          "A hard EFT item asks what follows organized primary emotion. Which answer fits?"
        ], [
          "An enactment",
          "A carefully shaped enactment",
          "Shape a safe enactment and process the partner's response"
        ], "EFT turns emotion into new interaction.", [
          "An enactment is a guided direct exchange in session.",
          "EFT uses enactments to create new attachment experiences.",
          "The therapist shapes and processes the encounter rather than simply assigning homework."
        ], [
          "A Bowen family diagram",
          "A symptom prescription",
          "A custody recommendation"
        ], [
          "Family diagrams are more Bowen-consistent.",
          "Symptom prescription is strategic.",
          "Custody recommendations are forensic/ethical role issues."
        ]),
        concept("Attachment Reframe", "reactive moves understood as attachment protection or protest", [
          "In EFT, criticism is reframed as:",
          "A withdrawing partner says they shut down to avoid failing again. What EFT reframe fits?",
          "A hard EFT item includes control or protest behavior. What must the therapist do?"
        ], [
          "An attachment protest inside the cycle",
          "A protective strategy organized around attachment fear",
          "Name the attachment meaning while still assessing safety and accountability"
        ], "Validate the attachment fear without excusing harm.", [
          "EFT reframes reactive behavior in attachment terms to reduce blame.",
          "Withdrawal can be understood as protection from failure, shame, or rejection.",
          "Hard items require both attachment understanding and safety/accountability."
        ], [
          "Proof that one partner is the villain",
          "A reason to ignore coercion",
          "A Bowen sibling-position pattern"
        ], [
          "EFT avoids villainizing one partner.",
          "Safety concerns still need assessment.",
          "Sibling position is Bowen language."
        ]),
        concept("Pacing", "working within emotional tolerance", [
          "A partner becomes flooded and says, 'I cannot do this.' What should the EFT therapist do?",
          "EFT emotional work should happen:",
          "A hard item shows shutdown during vulnerability work. What is best?"
        ], [
          "Slow down, validate overwhelm, and regulate before continuing",
          "At the edge of tolerance, not beyond it",
          "Pause, regulate, and re-engage only when safety and tolerance return"
        ], "EFT is evocative, but not reckless.", [
          "The therapist paces emotional work to keep clients engaged and safe.",
          "EFT works within tolerance so new experience can be integrated.",
          "Flooding or shutdown calls for regulation before deeper work."
        ], [
          "Push harder because emotion means success",
          "Shame the withdrawing partner",
          "Ignore safety and move to enactment"
        ], [
          "Pushing past tolerance can increase shutdown.",
          "Shame blocks safety and engagement.",
          "Enactments require enough safety and regulation."
        ]),
        concept("Attachment Injury", "a betrayal or abandonment event that blocks trust", [
          "An affair disclosure keeps returning during conflict and blocks repair. EFT may conceptualize this as:",
          "What does EFT need to do with an attachment injury?",
          "A hard EFT item about betrayal requires which sequence?"
        ], [
          "An attachment injury",
          "Process the injury with accountability, hurt, remorse, and responsiveness",
          "Stabilize the cycle, access injury emotions, and carefully shape repair interactions"
        ], "Look for a defining wound to trust or safety.", [
          "Attachment injuries are events that threaten trust and safety.",
          "EFT repair requires emotional engagement and accountability, not forced forgiveness.",
          "Hard items reward pacing, cycle stabilization, and careful repair."
        ], [
          "Only a scheduling problem",
          "A reason to rush forgiveness",
          "A sibling-position clue"
        ], [
          "The stem is about trust and attachment, not logistics only.",
          "Forced forgiveness bypasses injury repair.",
          "Sibling position is Bowen language."
        ])
      ],
      "Systemic Roles": [
        concept("Systemic Assessment", "symptoms understood in relational and contextual patterns", [
          "An LMFT assesses symptoms alongside family routines, culture, school, and relationship patterns. This shows:",
          "Before choosing an intervention, the LMFT should first:",
          "A hard item includes symptoms, context, culture, and risk. What is the best next step?"
        ], [
          "A systemic lens",
          "Gather systemic assessment data and form a tentative hypothesis",
          "Assess across systems, risk, culture, and client goals before intervening"
        ], "LMFT work looks at patterns and context.", [
          "A systemic lens connects symptoms with relationships and context.",
          "Systemic hypotheses guide treatment but stay tentative.",
          "Hard items often require broad assessment before technique."
        ], [
          "Individual blame",
          "Ignoring diagnosis",
          "Choosing a model technique without assessment"
        ], [
          "Systemic work avoids reducing the problem to one person.",
          "Diagnosis can be part of systemic assessment.",
          "Premature technique can miss safety and context."
        ]),
        concept("Balanced Alliance", "joining with the client system without taking sides", [
          "Family members pressure the therapist to agree that one person is the problem. What should the LMFT do?",
          "Balanced alliance means:",
          "A hard intake item shows coalition pressure. What is the best stance?"
        ], [
          "Maintain balanced alliance and assess the interactional pattern",
          "Join each member while avoiding coalition and scapegoating",
          "Validate positions while tracking the pattern between them"
        ], "Alliance with the system is not the same as taking sides.", [
          "Balanced alliance helps prevent scapegoating and coalition.",
          "The therapist joins without becoming part of the family's stuck pattern.",
          "High-conflict families often test whether the therapist will take sides."
        ], [
          "Join the majority",
          "Diagnose the quiet member immediately",
          "Refuse to hear more than one perspective"
        ], [
          "Joining the majority can reinforce scapegoating.",
          "Immediate labeling can miss the system.",
          "Systemic assessment needs multiple perspectives."
        ]),
        concept("Circular Questions", "questions about sequences, differences, and meanings between people", [
          "Which question is most systemic?",
          "An LMFT asks who notices first, who responds next, and what each person does after. This is:",
          "A hard systemic item asks how to map a repeating family sequence. Choose:"
        ], [
          "A circular question about how each person's response affects the others",
          "A circular question exploring the interactional sequence",
          "Use circular questions to map differences, meanings, and feedback loops"
        ], "Circular questions map relationships, not just facts.", [
          "Circular questions explore patterns between people.",
          "They help the therapist see sequences and feedback loops.",
          "Hard items reward mapping the process before assigning blame."
        ], [
          "A one-way blame question",
          "A paradoxical prescription",
          "A guaranteed diagnosis"
        ], [
          "Linear blame misses circular process.",
          "A prescription is an intervention, not this assessment question.",
          "Circular questions are exploratory, not guaranteed diagnosis."
        ]),
        concept("Treatment Planning", "goals, interventions, progress review, and termination", [
          "A family has met the original goals but keeps scheduling casual check-ins. What should the therapist do?",
          "Treatment planning requires:",
          "A hard item shows treatment drift. What is the best next step?"
        ], [
          "Review progress and discuss step-down, new goals, or termination",
          "Collaborative goals, interventions, evaluation, and revision",
          "Evaluate progress, update the plan, and terminate or revise ethically"
        ], "Treatment should not drift without goals.", [
          "When goals are met, the therapist reviews progress and plans next steps.",
          "Treatment planning is ongoing and collaborative.",
          "Hard items may test ethical termination and avoiding unnecessary services."
        ], [
          "Continue forever without goals",
          "Create a crisis to justify care",
          "End abruptly without planning"
        ], [
          "Ongoing care needs clinical purpose.",
          "Creating crisis is unethical.",
          "Termination should be planned."
        ]),
        concept("Cultural Humility", "client-defined meaning, context, and avoidance of value imposition", [
          "A couple disagrees about extended family boundaries rooted in cultural expectations. What should the LMFT do?",
          "Cultural humility in systemic therapy means:",
          "A hard item includes culture, power, and safety. What is the best response?"
        ], [
          "Ask about meanings, values, impact, and goals without imposing values",
          "Use curiosity, accountability, and client-defined meaning",
          "Assess culture, power, safety, and relational needs before setting goals"
        ], "Ask rather than assume.", [
          "Cultural humility explores meaning and avoids pathologizing difference.",
          "The therapist does not replace client values with personal values.",
          "Hard items require both humility and concrete safety/context assessment."
        ], [
          "Declare one culture healthier",
          "Avoid culture completely",
          "Use the therapist's family rules as the standard"
        ], [
          "That is value imposition.",
          "Avoidance misses important context.",
          "The therapist's values are not the clinical standard."
        ]),
        concept("Level of Care", "matching risk and need to service intensity", [
          "A couple requests communication skills, but assessment reveals self-harm threats and substance use. What comes first?",
          "Level of care decisions involve:",
          "A hard systemic item includes active risk. What is the best next step?"
        ], [
          "Risk assessment, safety planning, and appropriate level-of-care decisions",
          "Matching risk, impairment, supports, and treatment intensity",
          "Pause routine therapy and assess safety, coordination, and higher care needs"
        ], "Safety and fit of care come before routine skills work.", [
          "Risk concerns should be assessed before lower-risk treatment goals.",
          "Level of care matches current risk and functioning.",
          "Hard items test whether you prioritize safety over routine therapy."
        ], [
          "Teach active listening first no matter what",
          "Ignore substance use until later",
          "Terminate without resources"
        ], [
          "Skills are secondary when active risk is present.",
          "Substance use can affect risk and level of care.",
          "Termination requires planning and referrals."
        ])
      ],
      "Ethics": [
        concept("Informed Consent", "clear agreement about services, risks, fees, records, and limits", [
          "Which action best reflects informed consent?",
          "Before treatment changes format or scope, the therapist should:",
          "A hard item includes secrets, court requests, or telehealth changes. What ethics principle is central?"
        ], [
          "Explain services, risks, limits, fees, records, and client rights",
          "Review and update informed consent before the change",
          "Clarify consent, role, confidentiality, and records before proceeding"
        ], "Clients need to understand the service and its limits.", [
          "Informed consent makes expectations and limits clear.",
          "Changes in treatment should be discussed and documented.",
          "Hard items often combine consent with role, confidentiality, or legal issues."
        ], [
          "Avoid explaining limits to reduce anxiety",
          "Change policies without notice",
          "Promise outcomes"
        ], [
          "Clients need accurate information about limits.",
          "Policy changes require clear communication.",
          "Guaranteed outcomes are not ethically appropriate."
        ]),
        concept("Confidentiality", "privacy with legal and ethical limits", [
          "An adult client's parent asks for updates because they pay for therapy. What should the therapist do?",
          "Confidentiality in family therapy should be:",
          "A hard confidentiality item includes danger or mandated reporting. What is best?"
        ], [
          "Do not disclose without valid authorization or legal basis",
          "Explained clearly, including limits and record policies",
          "Assess the exception and follow law, safety duties, and documentation standards"
        ], "Payment or family membership does not automatically authorize disclosure.", [
          "Confidentiality belongs to the client and has specific exceptions.",
          "Family therapy requires clear discussion of privacy and records.",
          "Safety or legal exceptions must be handled carefully and documented."
        ], [
          "Share freely because relatives ask",
          "Promise absolute secrecy",
          "Ignore all legal exceptions"
        ], [
          "Disclosure requires authorization or legal basis.",
          "Absolute secrecy may be impossible.",
          "Confidentiality has limits in safety and mandated situations."
        ]),
        concept("Competence", "training, supervision, consultation, or referral adequate for the service", [
          "A therapist is asked to treat a specialty outside their training. What is most ethical?",
          "Competence is maintained through:",
          "A hard case exceeds the therapist's scope. What should happen?"
        ], [
          "Seek training, supervision, consultation, or referral",
          "Accurate training, consultation, supervision, and practice within scope",
          "Assess need, consult, and refer or coordinate appropriate care"
        ], "Do not practice beyond competence without support.", [
          "Competence requires appropriate preparation and support.",
          "Therapists should represent training accurately.",
          "Hard cases may require referral, adjunctive care, or higher level of care."
        ], [
          "Proceed because all therapy skills transfer",
          "Hide limits from the client",
          "Advertise a specialty after one workshop"
        ], [
          "Skills do not automatically transfer to all specialties.",
          "Clients need accurate information.",
          "Advertising must be truthful."
        ]),
        concept("Documentation", "accurate records of assessment, reasoning, plans, and actions", [
          "What should be documented after a risk assessment?",
          "A client asks the therapist to remove clinically relevant risk information. What should happen?",
          "A hard item asks about not hospitalizing a high-risk client. What documentation matters?"
        ], [
          "Risk factors, protective factors, reasoning, plan, and follow-up",
          "Maintain accurate records and discuss privacy/access concerns",
          "Document assessment, rationale, consultation, safety plan, and follow-up"
        ], "Risk decisions need clear records.", [
          "Documentation should support continuity and clinical reasoning.",
          "Records should be accurate and clinically appropriate.",
          "High-risk decisions require careful documentation even when hospitalization is not used."
        ], [
          "Write only 'client seemed fine'",
          "Delete risk information on request",
          "Avoid documenting to protect privacy"
        ], [
          "That is too vague for clinical reasoning.",
          "Deleting relevant information can be unethical.",
          "Privacy does not eliminate record duties."
        ]),
        concept("Mandated Duties", "required action when law or safety overrides ordinary confidentiality", [
          "A child discloses current abuse. What should the LMFT do?",
          "Mandated reporting is best described as:",
          "A hard item includes credible danger to a specific person. What should be prioritized?"
        ], [
          "Follow mandated reporting law and address immediate safety",
          "A legal duty that can limit ordinary confidentiality",
          "Risk assessment and applicable duty-to-protect or reporting steps"
        ], "Safety and law come before routine technique.", [
          "Current abuse concerns require mandated reporting according to law.",
          "Mandated reporting is a legal confidentiality limit.",
          "Credible threats can activate protection duties."
        ], [
          "Use only a model-specific intervention",
          "Wait for every family member to confirm it",
          "Promise secrecy first"
        ], [
          "Technique does not replace legal duties.",
          "Waiting can leave people at risk.",
          "Promises of secrecy may conflict with mandated duties."
        ]),
        concept("Multiple Relationships", "roles that may impair judgment or increase harm", [
          "A client asks the therapist to become a business mediator. What should the therapist consider?",
          "A dual relationship concern is strongest when:",
          "A hard item includes a therapist's friend or former client. What should be assessed?"
        ], [
          "Role conflict, confidentiality, competence, and potential harm",
          "Another role could impair judgment or exploit the client",
          "Objectivity, confidentiality, role conflict, harm, and referral options"
        ], "More than one role can complicate judgment and trust.", [
          "Multiple roles require careful ethical analysis.",
          "The question is whether the role increases risk or impairs care.",
          "Hard items ask you to spot role conflict before accepting."
        ], [
          "Accept automatically because familiarity helps",
          "Use therapy secrets in the new role",
          "Avoid documenting the decision"
        ], [
          "Familiarity can increase risk.",
          "Confidential therapy information is protected.",
          "Reasoning should be documented."
        ])
      ],
      "Comparison": [
        concept("Bowen vs EFT", "differentiation/genograms versus attachment/enactments", [
          "Which pairing is correct?",
          "A question asks for the intervention most consistent with Bowen rather than EFT. Choose:",
          "A hard comparison item asks you to match theory of change. What is best?"
        ], [
          "Bowen: differentiation and genograms; EFT: attachment cycles and enactments",
          "Use process questions and a family diagram",
          "Choose the intervention that matches the named model's change process"
        ], "Look for the model language in the stem.", [
          "Bowen and EFT are both systemic but use different change processes.",
          "Process questions and family diagrams are Bowen-consistent.",
          "Hard items often include several helpful answers, but only one fits the model."
        ], [
          "Bowen: enactment; EFT: sibling position",
          "Use a custody recommendation",
          "Ignore the named model"
        ], [
          "That reverses the models.",
          "Custody recommendations are forensic/ethical role issues.",
          "The named model is usually a key clue."
        ]),
        concept("Risk Before Model", "safety, law, and ethics outrank routine model technique", [
          "If a question includes active abuse or imminent danger, what comes first?",
          "Which answer pattern is usually best when risk appears in the stem?",
          "A hard item names Bowen or EFT but also includes danger. What should you do?"
        ], [
          "Safety assessment and legally required action",
          "Assess risk, follow mandated duties, document, and consult as needed",
          "Handle safety and legal duties before model-specific technique"
        ], "Risk changes the priority order.", [
          "Safety and legal duties come before routine clinical technique.",
          "Risk answers often include assessment, reporting, safety planning, and documentation.",
          "Model loyalty never overrides safety."
        ], [
          "Use the model technique first no matter what",
          "Wait until the family agrees",
          "Avoid documentation"
        ], [
          "Technique does not outrank safety.",
          "Waiting can increase risk.",
          "Risk decisions require documentation."
        ]),
        concept("Assessment Before Intervention", "missing information means assess first", [
          "When a stem lacks enough information for treatment planning, the best next step is often:",
          "A case includes unclear risk, culture, diagnosis, and goals. What should the LMFT do?",
          "A hard exam item gives multiple attractive interventions but little assessment. Choose:"
        ], [
          "Assess further and form a tentative systemic hypothesis",
          "Gather systemic, cultural, diagnostic, and risk information",
          "Choose assessment and hypothesis-building before intervention"
        ], "Do not jump to technique without enough data.", [
          "Assessment guides safe and effective intervention.",
          "LMFTs assess relationally, culturally, diagnostically, and ethically.",
          "Hard items often test patience before action."
        ], [
          "Use the most dramatic intervention immediately",
          "Guarantee outcomes",
          "Ignore client context"
        ], [
          "Premature technique can miss important risk.",
          "Guarantees are unethical.",
          "Context is central to systemic work."
        ]),
        concept("Therapist Role", "coach, attuned process guide, systemic assessor, or ethics manager", [
          "Which therapist role best matches Bowen?",
          "Which therapist role best matches EFT?",
          "A hard comparison item contrasts calm coaching with emotional enactment. What should guide your answer?"
        ], [
          "A calm coach supporting differentiation and detriangling",
          "An attuned process guide shaping primary emotion and enactments",
          "Match the therapist role to the model named in the question"
        ], "The therapist's stance is a model clue.", [
          "Bowen therapists coach process and differentiation.",
          "EFT therapists actively track emotion and attachment interactions.",
          "The therapist role can reveal the tested model."
        ], [
          "Bowen therapist as judge of who is right",
          "EFT therapist avoiding emotion",
          "Therapist ignoring risk"
        ], [
          "Bowen therapists avoid taking sides.",
          "EFT directly works with emotion.",
          "Risk is always relevant."
        ])
      ]
    };
  }

  function concept(topic, clue, setups, correct, hint, explanations, distractors, wrong) {
    return {
      topic: topic,
      term: topic,
      clue: clue,
      setups: setups,
      correct: correct,
      hints: [hint, hint, hint],
      explanations: explanations,
      distractors: distractors,
      wrong: wrong
    };
  }

  function expandSkillDrills(baseDrills) {
    var existing = {};
    baseDrills.forEach(function (drill) {
      existing[drill.id] = true;
    });

    function add(drill) {
      if (!existing[drill.id]) {
        baseDrills.push(drill);
        existing[drill.id] = true;
      }
    }

    [
      ["response-easy-silent-teen", "Nothing To Say", "easy", "Family", ["Systemic Roles", "Joining"], "A teen shrugs and says, 'Whatever. They already decided I am the bad one.'", "It makes sense you would go quiet if it feels like the role has already been assigned to you. I want to understand your view without making you carry the whole family problem."],
      ["response-easy-anxious-parent", "I Am Failing", "easy", "Family", ["EFFT", "Validation"], "A parent says, 'If my kid is anxious, it means I failed as a parent.'", "That sounds painfully heavy, like your child's anxiety turns into a verdict on you. Can we slow that down and look at the pattern with more kindness?"],
      ["response-easy-bowen-iposition", "Do Not Make Me Choose", "easy", "Individual", ["Bowen", "I-position"], "A client says, 'If I tell my mom no, she will fall apart.'", "You are predicting a lot of responsibility for her reaction. Let's think through what an I-position could sound like while still staying connected."],
      ["response-easy-couple-checkout", "He Checks Out", "easy", "Couple", ["EFT", "Cycle"], "One partner says, 'The second I get upset, he disappears.'", "So when you reach for him in distress, his disappearing lands as abandonment, and then the cycle gets louder between you."],
      ["response-medium-family-secret", "Do Not Tell Dad", "medium", "Family", ["Ethics", "Confidentiality"], "In a family session break, a teenager says, 'Do not tell Dad I am skipping school.'", "Before I promise anything, let's slow down and talk about the privacy limits we agreed to, what safety issues may be involved, and how we can handle this clinically."],
      ["response-medium-cultural-values", "My Family Does Not Do Boundaries", "medium", "Couple", ["Systemic Roles", "Culture"], "A client says, 'In my family, boundaries are disrespectful. My partner just does not get it.'", "I want to understand what respect and closeness mean in your family before we decide what kind of boundary would fit your values and your couple relationship."],
      ["response-medium-anger-softening", "I Hate When You Cry", "medium", "Couple", ["EFT", "Primary Emotion"], "A partner says, 'I hate when you cry because then I am the villain.'", "When tears show up, you do not just see sadness; you feel accused and alone, like there is no safe place for your own hurt."],
      ["response-medium-bowen-triangle", "Tell My Sister", "medium", "Individual", ["Bowen", "Detriangling"], "A client says, 'Can you call my sister and explain that she is wrong?'", "I can help you think through your own position with your sister, but I do not want to become the messenger or judge in the family triangle."],
      ["response-hard-coercion", "He Lets Me Talk", "hard", "Couple", ["Ethics", "Safety"], "A partner says, while looking at the other partner, 'He lets me talk when I deserve it.'", "I want to pause and make sure I understand safety and choice in the relationship. Before we do deeper couple work, I need to assess whether both of you can speak freely without risk."],
      ["response-hard-suicidal-hint", "Everyone Would Be Better", "hard", "Individual", ["Ethics", "Risk"], "A client says, 'Everyone would be better if I stopped being a burden.'", "I am really glad you said that out loud. I need to ask directly about suicide and safety so we can understand how serious this is and make a plan for right now."],
      ["response-hard-betrayal-enactment", "Make Him Apologize", "hard", "Couple", ["EFT", "Attachment Injury"], "A betrayed partner says, 'Make him apologize right now or this is pointless.'", "You need accountability so badly that waiting feels unbearable. I want to help the apology become real repair, not just words pushed out under pressure."],
      ["response-hard-parentification", "She Is My Best Friend", "hard", "Family", ["Bowen", "Systemic Roles"], "A parent says about a 12-year-old, 'She is my best friend. I tell her everything because she understands me.'", "I hear how close you feel to her, and I also want to look carefully at whether she is being asked to carry adult emotional weight in the family."]
    ].forEach(function (seed) {
      add(responseDrill(seed));
    });

    [
      ["compare-hostile-teen", "The Teen Who Will Not Talk", "easy", "Family", "A teen sits silently while the parents argue about disrespect. One parent says the teen is lazy; the other says everyone needs to stop pushing.", "teen withdrawal and parent anxiety"],
      ["compare-in-law-boundaries", "Sunday Dinner Rules", "easy", "Couple", "A couple fights every Sunday about visiting extended family. One partner feels controlled; the other fears being disloyal to family traditions.", "extended family loyalty and couple boundaries"],
      ["compare-job-loss-shutdown", "After the Layoff", "medium", "Couple", "After a job loss, one partner asks repeated budget questions. The other shuts down and stays up late gaming.", "job loss, shame, and money anxiety"],
      ["compare-grandparent-coalition", "Grandma Takes Over", "medium", "Family", "A grandparent undermines the parents' rules and says, 'I raised you, so I know better.' The child runs to the grandparent after every limit.", "three-generation hierarchy and coalition"],
      ["compare-affair-disclosure", "The Partial Truth", "hard", "Couple", "One partner disclosed an affair but keeps changing details. The other checks the phone nightly and says, 'I cannot feel safe.'", "attachment injury, trust, and consent"],
      ["compare-substance-relapse-family", "The Relapse Argument", "hard", "Family", "After a relapse, a spouse monitors every move, an adult child refuses visits, and the client says everyone is attacking them.", "relapse, level of care, and family anxiety"]
    ].forEach(function (seed) {
      add(compareDrill(seed));
    });

    [
      ["bowen-easy-family-chat", "The Family Group Chat", "easy", "A client panics when siblings argue in the group chat and sends long messages to calm everyone down.", "sibling conflict", "peacemaker"],
      ["bowen-easy-holiday-host", "The Holiday Host", "easy", "A client hosts every holiday because the family fights if anyone else plans it.", "holiday planning", "family stabilizer"],
      ["bowen-easy-father-daughter", "Ask Your Daughter", "easy", "A father asks his teenage daughter to tell the therapist why her mother is impossible.", "parental conflict", "messenger"],
      ["bowen-medium-panic-wedding", "Wedding Table Panic", "medium", "A bride has panic attacks about where divorced parents will sit at the wedding.", "divorced parents", "event manager"],
      ["bowen-medium-caregiver-burnout", "Everybody Calls Me", "medium", "After a parent's illness, every relative calls one adult child for updates and decisions.", "parent illness", "caretaker"],
      ["bowen-medium-divorce-child-symptom", "Stomachaches After Court", "medium", "A child has stomachaches after custody exchanges. Each parent says the other causes it.", "co-parent conflict", "identified patient"],
      ["bowen-hard-immigration-cutoff", "Across the Ocean", "hard", "A client moved countries and has not told family about a same-sex relationship because contact feels unsafe and loaded.", "identity and family loyalty", "protected outsider"],
      ["bowen-hard-business-family", "The Family Business", "hard", "Two siblings run a family business. One says the other is lazy; the other says the first acts like their father.", "business conflict", "old sibling role"],
      ["bowen-hard-parent-projection", "Watching the Child", "hard", "Parents track every grade and mood shift of their daughter after a move. The daughter becomes more anxious and stops sleeping alone.", "child anxiety", "anxiety focus"]
    ].forEach(function (seed) {
      add(bowenDrill(seed));
    });

    [
      ["eft-easy-phone-scroll", "Scrolling Away", "easy", "One partner reaches for conversation at night. The other scrolls silently. The first criticizes, and the second says, 'Here we go again.'", "nighttime connection"],
      ["eft-easy-after-work", "The Doorway Sigh", "easy", "A partner sighs after work and says nothing. The other says, 'You are mad at me again,' and starts explaining.", "uncertainty after work"],
      ["eft-easy-weekend-plans", "Plans Change Again", "easy", "One partner changes weekend plans without asking. The other protests loudly, and the first says, 'I can never do anything right.'", "plans and mattering"],
      ["eft-medium-new-baby", "Three A.M.", "medium", "New parents fight at night. One says, 'I do everything.' The other says, 'Nothing I do is right,' and leaves the room.", "exhaustion and teamwork"],
      ["eft-medium-family-grief", "Do Not Say Her Name", "medium", "A parent avoids talking about a deceased spouse. The child acts out when family memories come up.", "grief and attachment safety"],
      ["eft-medium-intimacy-pressure", "Not Tonight Again", "medium", "One partner reaches for intimacy and says the other is cold. The other says pressure makes them disappear.", "closeness and rejection"],
      ["eft-hard-medical-trauma", "Hospital Hallway", "hard", "After a medical crisis, one partner keeps asking if the other will stay. The other says, 'I cannot talk about that night,' and shuts down.", "medical trauma"],
      ["eft-hard-blended-family", "Your Kids, My Kids", "hard", "In a blended family, one partner says, 'You always choose your kids over me.' The other says, 'You make me choose,' and withdraws.", "belonging and loyalty"],
      ["eft-hard-attachment-injury", "The Missed Appointment", "hard", "One partner missed a frightening medical appointment. Since then, one checks phones constantly and the other says, 'I already apologized.'", "attachment injury repair"]
    ].forEach(function (seed) {
      add(eftDrill(seed));
    });

    [
      ["intervention-easy-intake-goals", "First Session Fog", "easy", "Systemic Roles", "A family begins intake with many complaints, no clear goals, and no risk screening yet.", "Assess risk, gather systemic information, and form tentative goals before choosing techniques."],
      ["intervention-easy-bowen-question", "Everyone Wants Advice", "easy", "Bowen", "A family asks the therapist to decide who is right about an argument.", "Ask process questions and stay neutral rather than judge the content."],
      ["intervention-easy-eft-soft-emotion", "A Softer Moment", "easy", "EFT", "A withdrawn partner says quietly, 'I do not think I can ever get it right.'", "Validate and deepen the softer emotion, then shape a safe enactment if appropriate."],
      ["intervention-medium-progress-stall", "No Change After Eight Sessions", "medium", "Systemic Roles", "A couple attends regularly but reports no progress and unclear goals.", "Review outcomes, revise the treatment plan, consult if needed, and consider referral or a different approach."],
      ["intervention-medium-bowen-cutoff", "The Text From Mom", "medium", "Bowen", "A client receives a text from an estranged parent and wants to either explode or disappear.", "Coach observation of anxiety and an I-position before responding."],
      ["intervention-medium-eft-cycle", "The Fight Is Happening Now", "medium", "EFT", "Partners begin the exact pursue-withdraw cycle in session.", "Slow the live process, reflect the cycle, validate both protective moves, and access primary emotion."],
      ["intervention-hard-mandated-duty", "The Threat", "hard", "Ethics", "A client makes a credible threat toward a named person.", "Assess immediacy and follow applicable duty-to-protect law, consultation, documentation, and safety steps."],
      ["intervention-hard-telehealth-state", "Across State Lines", "hard", "Ethics", "A client travels to another state and asks to continue telehealth from there.", "Check jurisdiction, license rules, emergency resources, consent, and documentation before providing services."],
      ["intervention-hard-eating-disorder", "Family Meal Fight", "hard", "Systemic Roles", "A teen in family therapy reports severe food restriction and dizziness.", "Assess medical risk and level of care, coordinate appropriate care, and involve guardians within consent and law."]
    ].forEach(function (seed) {
      add(interventionDrill(seed));
    });

    [
      ["ethics-easy-record-request", "Can I See My File?", "easy", "An adult client asks for access to their records after a difficult session.", ["Client record access", "Documentation accuracy", "Review applicable law/policy", "Therapist embarrassment", "Deny automatically", "Clarify process and limits"], [0, 1, 2, 5], "The therapist should follow law and policy for record access, discuss process and limits, and maintain accurate documentation."],
      ["ethics-easy-fee-change", "New Fee Tomorrow", "easy", "A therapist wants to raise fees starting at the next session without prior notice.", ["Informed consent", "Financial policy", "Adequate notice", "No issue if therapist needs money", "Documentation", "Client autonomy"], [0, 1, 2, 4, 5], "Fee changes require clear communication, consent/policy review, documentation, and respect for client choice."],
      ["ethics-easy-school-call", "Teacher Wants Details", "easy", "A teacher calls asking what a child disclosed in family therapy.", ["Confidentiality", "Release of information", "Minor/guardian consent rules", "Share freely because school helps", "Minimum necessary information", "Documentation"], [0, 1, 2, 4, 5], "The therapist needs proper authorization or legal basis, should share only appropriate information, and document the contact."],
      ["ethics-medium-gift", "The Expensive Gift", "medium", "A client brings an expensive watch and says refusing it would be insulting in their culture.", ["Boundary issue", "Cultural humility", "Exploitation/objectivity concern", "Accept automatically", "Document clinical reasoning", "Discuss meaning"], [0, 1, 2, 4, 5], "The therapist should explore cultural meaning, boundaries, potential harm, objectivity, and document the decision."],
      ["ethics-medium-court-letter", "Write The Court", "medium", "A parent in therapy asks the therapist to write a custody letter saying they are the better parent.", ["Role conflict", "Forensic vs treating role", "Informed consent/records", "Write opinion immediately", "Consultation", "Scope of competence"], [0, 1, 2, 4, 5], "A treating therapist should be careful about forensic opinions, role conflict, consent, records, competence, and consultation."],
      ["ethics-medium-social-post", "Anonymous Post", "medium", "A therapist wants to post a de-identified story from session because it is educational.", ["Confidentiality", "Client authorization", "Possible identifiability", "Marketing benefit overrides privacy", "Professional boundaries", "Documentation/consultation"], [0, 1, 2, 4, 5], "Even de-identified stories can be recognizable. The therapist should protect confidentiality and avoid using client material without valid authorization."],
      ["ethics-hard-supervision-gap", "No Supervisor Available", "hard", "A prelicensed therapist faces a high-risk case and cannot reach their supervisor.", ["Client safety", "Emergency procedures", "Scope/competence", "Wait several days doing nothing", "Consult backup resources", "Documentation"], [0, 1, 2, 4, 5], "Safety requires emergency procedures, available consultation or backup, practice within competence, and documentation."],
      ["ethics-hard-technology-failure", "Dropped During Crisis", "hard", "A telehealth session disconnects after a client reports active suicidal intent.", ["Emergency plan", "Location/contact information", "Imminent risk response", "Wait until next week", "Documentation", "Consult/emergency services as needed"], [0, 1, 2, 4, 5], "Telehealth crisis planning should include location, emergency contacts, reconnection steps, documentation, and emergency response when needed."],
      ["ethics-hard-client-review", "Five Star Request", "hard", "A therapist asks a current client to leave an online review to help the practice.", ["Power imbalance", "Confidentiality risk", "Solicitation concern", "No issue if review is positive", "Boundary/professionalism", "Informed consent limits"], [0, 1, 2, 4, 5], "Soliciting testimonials from current clients can create pressure and confidentiality risk. The therapist should avoid it and maintain boundaries."]
    ].forEach(function (seed) {
      add(ethicsDrill(seed));
    });

    return baseDrills;
  }

  function responseDrill(seed) {
    return {
      id: seed[0],
      type: "responsePractice",
      title: seed[1],
      difficulty: seed[2],
      clientType: seed[3],
      tags: seed[4],
      prompt: seed[5],
      choices: [
        { text: seed[6], score: 4, feedback: "Strong. It joins emotion, keeps the frame non-blaming, and protects the therapist role." },
        { text: "That is not a helpful thing to say. Try saying it differently.", score: 1, feedback: "This corrects too quickly and may miss the emotion under the statement." },
        { text: "You are right; the other person is the problem.", score: 0, feedback: "This takes sides and weakens systemic thinking." },
        { text: "Let's ignore that and move to a different topic.", score: 1, feedback: "This avoids live clinical process." }
      ],
      checklist: basicChecklist(),
      modelAnswer: seed[6],
      tips: ["Validate before redirecting.", "Protect a non-blaming systemic frame.", "Use model language that fits the case."]
    };
  }

  function compareDrill(seed) {
    return {
      id: seed[0],
      type: "modelCompare",
      title: seed[1],
      difficulty: seed[2],
      clientType: seed[3],
      tags: ["Bowen", "EFT", "Systemic Roles"],
      prompt: seed[4],
      details: ["Main theme: " + seed[5] + ".", "Use the same case through three different lenses.", "Check safety, consent, culture, and goals before narrowing to technique."],
      fields: [
        { id: "bowen", label: "Bowen conceptualization", modelAnswer: "Bowen would study " + seed[5] + " through anxiety, triangles, differentiation, family-of-origin process, and the therapist's calm coaching stance.", checklist: checklist("Triangle/anxiety", ["triangle", "anxiety", "reactivity"], "Differentiation", ["differentiat", "i-position", "self"], "Family process", ["process", "pattern", "family"], "Coaching stance", ["coach", "question", "observe"]) },
        { id: "eft", label: "EFT conceptualization", modelAnswer: "EFT would track the negative cycle, validate protective moves, access primary emotion, and identify attachment fears and needs underneath " + seed[5] + ".", checklist: checklist("Cycle", ["cycle", "pattern"], "Primary emotion", ["primary", "fear", "hurt", "shame"], "Attachment need", ["attachment", "need", "safety", "reassurance"], "Validation", ["valid", "attune", "soft"]) },
        { id: "systemic", label: "LMFT/systemic focus", modelAnswer: "The LMFT would assess risk, context, culture, client system, goals, and the interactional sequence before choosing interventions for " + seed[5] + ".", checklist: checklist("Assessment", ["assess", "risk", "context"], "Balanced alliance", ["both", "alliance", "balanced"], "Culture/context", ["culture", "context", "values"], "Goals/plan", ["goal", "plan", "treatment"]) }
      ],
      tips: ["Bowen asks how anxiety moves.", "EFT asks what attachment fear is underneath.", "LMFT thinking checks context, safety, and goals."]
    };
  }

  function bowenDrill(seed) {
    return {
      id: seed[0],
      type: "bowenTrainer",
      title: seed[1],
      difficulty: seed[2],
      clientType: "Family",
      tags: ["Bowen", "Triangle", "Genogram"],
      prompt: seed[3],
      choices: {
        triangle: ["The client is pulled into a triangle around " + seed[4] + ".", "There is no relevant family process.", "The therapist should take over the relationship.", "The identified person is the whole problem."],
        fusion: ["The client may be fused with the role of " + seed[5] + ".", "Fusion means healthy closeness with no anxiety.", "Fusion is solved by blaming one person.", "Fusion is irrelevant to Bowen."],
        cutoff: ["Cutoff may be present, but it should be assessed as an anxiety-management pattern.", "Cutoff always means mature boundaries.", "Cutoff means no anxiety remains.", "Cutoff is the only Bowen concept."],
        differentiation: ["Coach a clearer I-position while staying appropriately connected.", "Push immediate emotional confrontation.", "Tell the client exactly what to do.", "Make another family member change first."],
        multigenerational: ["Map repeated roles, symptoms, conflict, and distance across generations.", "Ignore family history.", "Study only one symptom in isolation.", "Assume history determines everything."],
        coachMove: ["Ask process questions and coach observation of reactivity.", "Take sides and give advice.", "Become the family messenger.", "Escalate emotion before mapping process."]
      },
      idealSelections: { triangle: 0, fusion: 0, cutoff: 0, differentiation: 0, multigenerational: 0, coachMove: 0 },
      rubric: bowenRubric(),
      modelAnswer: "A Bowen response maps the family emotional process, watches triangles and fusion, studies multigenerational patterns, and coaches differentiation through process questions and I-position practice.",
      tips: ["Bowen is about process, not blame.", "The therapist stays calm and curious.", "The family diagram turns repeated roles into visible data."]
    };
  }

  function eftDrill(seed) {
    return {
      id: seed[0],
      type: "eftMapper",
      title: seed[1],
      difficulty: seed[2],
      clientType: seed[2] === "medium" && seed[1] === "Do Not Say Her Name" ? "Family" : "Couple",
      tags: ["EFT", "Cycle"],
      prompt: seed[3],
      choices: {
        cycle: ["A negative cycle around " + seed[4] + ".", "No relational cycle is present.", "Only one person is the problem.", "A legal issue is the whole frame."],
        pursuerMove: ["One person protests, criticizes, explains, or reaches for response.", "Withdraws before any protest.", "Uses no attachment strategy.", "Becomes the therapist."],
        withdrawerMove: ["The other protects through distance, shutdown, defense, or avoidance.", "Pursues harder with vulnerability.", "Maps the cycle calmly.", "Makes no protective move."],
        secondaryEmotion: ["Reactive anger, criticism, defensiveness, or numbness.", "Only joy.", "No emotion is present.", "Only intellectual curiosity."],
        primaryEmotion: ["Softer fear, shame, hurt, loneliness, or longing.", "Only a wish to win.", "No vulnerability exists.", "Only laziness."],
        attachmentFear: ["The fear is about mattering, safety, rejection, failure, or abandonment.", "There is no attachment meaning.", "The room setup is the main issue.", "The therapist must pick sides."],
        unmetNeed: ["Reassurance, responsiveness, comfort, acceptance, or felt support.", "One partner winning.", "Less closeness forever.", "A perfect script before emotion."],
        nextMove: ["Validate both protections, slow the cycle, and access primary emotion.", "Problem-solve before emotion.", "Tell one partner they are wrong.", "Ignore the live cycle."]
      },
      idealSelections: { cycle: 0, pursuerMove: 0, withdrawerMove: 0, secondaryEmotion: 0, primaryEmotion: 0, attachmentFear: 0, unmetNeed: 0, nextMove: 0 },
      rubric: eftRubric(),
      modelAnswer: "An EFT response tracks the negative cycle, validates protective moves, accesses primary emotion and attachment fear, then shapes a safer responsive interaction.",
      tips: ["EFT asks what the fight is protecting.", "Problem-solving usually waits until the cycle softens.", "Primary emotion is often under anger or shutdown."]
    };
  }

  function interventionDrill(seed) {
    return {
      id: seed[0],
      type: "nextIntervention",
      title: seed[1],
      difficulty: seed[2],
      clientType: "Clinical",
      tags: [seed[3], "Next Step"],
      prompt: seed[4],
      choices: [
        { text: seed[5], score: 4, feedback: "Best. It matches the clinical priority and timing." },
        { text: "Use the most intense technique immediately.", score: 1, feedback: "This jumps past assessment and pacing." },
        { text: "Take sides so one person feels supported.", score: 0, feedback: "This damages balanced alliance and systemic thinking." },
        { text: "Ignore the risk/context and keep the original plan.", score: 0, feedback: "The next step must respond to the case details." }
      ],
      checklist: checklist("Assessment", ["assess", "review", "risk"], "Model fit", ["bowen", "eft", "systemic", "model"], "Plan", ["plan", "goal", "next"], "Ethics/safety", ["safety", "ethic", "document", "consult"]),
      modelAnswer: seed[5],
      tips: ["Ask what must happen before technique.", "Risk and consent can change the next move.", "Good interventions fit the model and the moment."]
    };
  }

  function ethicsDrill(seed) {
    return {
      id: seed[0],
      type: "ethicsScanner",
      title: seed[1],
      difficulty: seed[2],
      clientType: "Ethics",
      tags: ["Ethics", "Risk"],
      prompt: seed[3],
      flags: seed[4],
      idealFlags: seed[5],
      checklist: checklist("Risk or harm", ["risk", "safety", "harm"], "Consent/confidentiality", ["consent", "confidential", "release", "privacy"], "Consult/document", ["consult", "document", "record"], "Law/policy", ["law", "policy", "mandated", "license"]),
      modelAnswer: seed[6],
      tips: ["Ethics items reward sequence: assess, consult, document, follow law.", "Do not let a model technique override legal duties.", "Confidentiality has rules, not vibes."]
    };
  }

  function basicChecklist() {
    return checklist("Validation", ["validate", "hear", "sounds", "makes sense"], "Non-blaming frame", ["cycle", "pattern", "not blame", "both"], "Primary emotion", ["hurt", "fear", "shame", "alone"], "Clinical next step", ["ask", "slow", "plan", "assess"]);
  }

  function checklist(labelA, keywordsA, labelB, keywordsB, labelC, keywordsC, labelD, keywordsD) {
    return [
      { label: labelA, keywords: keywordsA },
      { label: labelB, keywords: keywordsB },
      { label: labelC, keywords: keywordsC },
      { label: labelD, keywords: keywordsD }
    ];
  }

  function bowenRubric() {
    return {
      triangle: "Tracks where anxiety moves through the system.",
      fusion: "Recognizes emotional overinvolvement or role lock.",
      cutoff: "Differentiates cutoff from mature distance.",
      differentiation: "Chooses connected self-definition.",
      multigenerational: "Uses family history as process data.",
      coachMove: "Keeps Bowen's calm coaching stance."
    };
  }

  function eftRubric() {
    return {
      cycle: "Names the EFT cycle.",
      pursuerMove: "Tracks protest or reaching.",
      withdrawerMove: "Tracks protection or retreat.",
      secondaryEmotion: "Names reactive emotion.",
      primaryEmotion: "Finds softer emotion.",
      attachmentFear: "Links emotion to attachment meaning.",
      unmetNeed: "Identifies the needed response.",
      nextMove: "Uses EFT pacing and de-escalation."
    };
  }

  questions = expandQuestionBank(questions);
  skillDrills = expandSkillDrills(skillDrills);

  window.STUDY_DATA = {
    resources: resources,
    studySections: studySections,
    questions: questions,
    scenarios: scenarios,
    flashcards: flashcards,
    clinicDrills: clinicDrills,
    skillDrills: skillDrills
  };
})();
