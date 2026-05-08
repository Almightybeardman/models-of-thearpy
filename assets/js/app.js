(function () {
  "use strict";

  var DATA = window.STUDY_DATA || { resources: [], studySections: [], questions: [], scenarios: [], flashcards: [], clinicDrills: [], skillDrills: [] };
  var MATCH_ROUNDS = [
    {
      id: "match-bowen-triangle",
      title: "Mother, Father, Adult Child",
      model: "Bowen",
      context: "A family enters after repeated arguments about an adult child moving back home.",
      dialogue: [
        { speaker: "Client", text: "When my husband gets quiet, I call our daughter and tell her how impossible he is being." },
        { speaker: "Therapist", text: "So when tension rises between the two of you, your daughter gets pulled into the anxiety." },
        { speaker: "Client", text: "She usually takes my side, then he gets even colder." },
        { speaker: "Therapist", text: "Let's slow that triangle down and map what each person does when the anxiety increases." }
      ],
      answer: "Bowen",
      clue: "The therapist names triangling, maps multigenerational/systemic anxiety, and slows reactivity instead of chasing emotional processing."
    },
    {
      id: "match-eft-cycle",
      title: "Pursue and Withdraw",
      model: "EFT",
      context: "A couple describes the same fight repeating every weekend.",
      dialogue: [
        { speaker: "Partner A", text: "I raise my voice because it feels like I do not matter." },
        { speaker: "Partner B", text: "And when I hear yelling, I shut down before I say something worse." },
        { speaker: "Therapist", text: "The more you protest for connection, the more you protect by withdrawing. That cycle is the enemy here." },
        { speaker: "Therapist", text: "Can we reach the softer fear under the anger for a moment?" }
      ],
      answer: "EFT",
      clue: "The therapist tracks a negative cycle, validates protection, and moves toward primary emotion and attachment needs."
    },
    {
      id: "match-ethics-report",
      title: "Safety Before Insight",
      model: "Ethics",
      context: "An individual client discloses a possible mandated reporting issue near the end of session.",
      dialogue: [
        { speaker: "Client", text: "I grabbed my son hard enough to leave marks. I am scared I might do it again." },
        { speaker: "Therapist", text: "I am glad you told me. We need to address safety right now." },
        { speaker: "Client", text: "Are you going to tell someone?" },
        { speaker: "Therapist", text: "I will explain my legal duty, make a safety plan with you, consult as needed, and document the steps clearly." }
      ],
      answer: "Ethics",
      clue: "Risk, mandated duties, informed consent limits, consultation, and documentation come before model-specific technique."
    },
    {
      id: "match-systemic-circular",
      title: "Whole Family Pattern",
      model: "Systemic Roles",
      context: "Parents bring a teen for defiance, but the session reveals a wider interaction pattern.",
      dialogue: [
        { speaker: "Parent", text: "He is the problem. If he stopped arguing, our house would be calm." },
        { speaker: "Therapist", text: "I want to understand the whole sequence. Who notices the tension first, and what happens next?" },
        { speaker: "Teen", text: "Mom gets worried, Dad gets strict, then I leave." },
        { speaker: "Therapist", text: "Let's track how each response shapes the next one, so the system has more options." }
      ],
      answer: "Systemic Roles",
      clue: "The therapist avoids the identified-patient trap and uses circular/process questions to assess the interactional pattern."
    },
    {
      id: "match-bowen-iposition",
      title: "Borrowed Self",
      model: "Bowen",
      context: "A client says family contact instantly changes their decisions.",
      dialogue: [
        { speaker: "Client", text: "I know what I want until my mother calls. Then I agree with whatever keeps her calm." },
        { speaker: "Therapist", text: "Let's notice the pull toward fusion and practice an I-position you can hold without attacking or disappearing." },
        { speaker: "Client", text: "So I do not have to convince her?" },
        { speaker: "Therapist", text: "Right. The task is to stay connected while thinking and acting from a clearer self." }
      ],
      answer: "Bowen",
      clue: "Differentiation, fusion, I-position, and staying connected while maintaining self are Bowen clues."
    },
    {
      id: "match-eft-enactment",
      title: "Say It Here",
      model: "EFT",
      context: "A couple starts to identify softer emotions under criticism and distance.",
      dialogue: [
        { speaker: "Partner A", text: "When you walk away, I tell myself I am not worth staying for." },
        { speaker: "Therapist", text: "Can you turn and tell him that directly, in this room, from that softer place?" },
        { speaker: "Partner B", text: "I did not know that was what happened inside." },
        { speaker: "Therapist", text: "Stay with that. This is the new emotional signal your cycle usually hides." }
      ],
      answer: "EFT",
      clue: "The therapist uses enactment, present emotional experience, and attachment vulnerability."
    }
  ];
  MATCH_ROUNDS = MATCH_ROUNDS.concat([
    {
      id: "match-bowen-cutoff-boundary",
      title: "Boundary or Cutoff",
      model: "Bowen",
      context: "An individual client is unsure whether distance from family is healthy or reactive.",
      dialogue: [
        { speaker: "Client", text: "I feel calm only when I do not answer anyone in my family." },
        { speaker: "Therapist", text: "Let's not rush to call that peace. It may be distance that lowers anxiety without changing the relationship process." },
        { speaker: "Client", text: "So cutting them off does not automatically mean I am differentiated?" },
        { speaker: "Therapist", text: "Right. We can work on a clearer self-position that does not require disappearing." }
      ],
      answer: "Bowen",
      clue: "The therapist distinguishes emotional cutoff from differentiation and focuses on self-definition under family anxiety."
    },
    {
      id: "match-bowen-family-projection",
      title: "The Watched Child",
      model: "Bowen",
      context: "Parents monitor one child's normal mistakes after a family transition.",
      dialogue: [
        { speaker: "Parent", text: "Since the move, every small grade drop makes us worry she is falling apart." },
        { speaker: "Therapist", text: "Let's map how parental anxiety is getting focused on her and how that may shape her functioning." },
        { speaker: "Parent", text: "She has started asking us before making any tiny decision." },
        { speaker: "Therapist", text: "That pattern can become part of the family projection process, so we will work on lowering reactivity around her." }
      ],
      answer: "Bowen",
      clue: "Family projection process, parental anxiety focused on a child, and lowering reactivity are Bowen clues."
    },
    {
      id: "match-eft-attachment-injury",
      title: "The Missed Hospital Call",
      model: "EFT",
      context: "A couple is stuck around a past moment of perceived abandonment.",
      dialogue: [
        { speaker: "Partner A", text: "When I was in the ER and you did not answer, something broke in me." },
        { speaker: "Therapist", text: "That moment became an attachment injury. Before repair, we need to slow the hurt and the impact." },
        { speaker: "Partner B", text: "I thought apologizing once should have ended it." },
        { speaker: "Therapist", text: "The apology needs to reach the place that still asks, 'Will you be there when I am scared?'" }
      ],
      answer: "EFT",
      clue: "Attachment injury repair, vulnerable hurt, and responsiveness needs are EFT markers."
    },
    {
      id: "match-eft-withdrawer-reengagement",
      title: "The Quiet Partner Speaks",
      model: "EFT",
      context: "A withdrawn partner begins to share the fear underneath shutting down.",
      dialogue: [
        { speaker: "Partner B", text: "When she gets angry, I go blank because I am sure I will fail her again." },
        { speaker: "Therapist", text: "Can we stay with that fear of failing her, not as avoidance, but as the softer place underneath the shutdown?" },
        { speaker: "Partner A", text: "I never knew it was fear. I thought you did not care." },
        { speaker: "Therapist", text: "This is the cycle changing: the protection is becoming a clearer attachment signal." }
      ],
      answer: "EFT",
      clue: "The therapist accesses primary emotion under withdrawal and reframes the cycle in attachment terms."
    },
    {
      id: "match-ethics-telehealth-location",
      title: "Telehealth Across State Lines",
      model: "Ethics",
      context: "A client logs into telehealth while traveling.",
      dialogue: [
        { speaker: "Client", text: "I am in another state for a few weeks, but we can just keep meeting like normal." },
        { speaker: "Therapist", text: "Before we continue, I need to verify your physical location, emergency resources, and whether I am permitted to provide services there." },
        { speaker: "Client", text: "Does that really matter if you are still in your office?" },
        { speaker: "Therapist", text: "Yes. Location, consent, licensing rules, and emergency planning are part of ethical telehealth practice." }
      ],
      answer: "Ethics",
      clue: "Jurisdiction, telehealth consent, emergency planning, and scope of practice signal an ethics-first answer."
    },
    {
      id: "match-ethics-court-letter",
      title: "The Custody Letter",
      model: "Ethics",
      context: "A parent asks the treating therapist for a custody opinion.",
      dialogue: [
        { speaker: "Client", text: "Can you write the court that I am obviously the better parent?" },
        { speaker: "Therapist", text: "I need to be careful about my treating role, confidentiality, records, and the limits of any opinion I can ethically provide." },
        { speaker: "Client", text: "But you know me better than anyone." },
        { speaker: "Therapist", text: "That is exactly why role clarity matters. A forensic opinion is different from treatment." }
      ],
      answer: "Ethics",
      clue: "Court involvement, role conflict, confidentiality, records, and forensic limits make ethics the priority."
    },
    {
      id: "match-systemic-culture-context",
      title: "Respect Means Staying Close",
      model: "Systemic Roles",
      context: "A couple disagrees about boundaries with extended family.",
      dialogue: [
        { speaker: "Partner A", text: "In my family, not answering every call is disrespect." },
        { speaker: "Partner B", text: "In mine, constant calls mean no couple boundary." },
        { speaker: "Therapist", text: "Before choosing a technique, I want to understand what closeness, respect, and boundaries mean in each family context." },
        { speaker: "Therapist", text: "Then we can build a plan that fits your values and your couple system." }
      ],
      answer: "Systemic Roles",
      clue: "The therapist broadens assessment to culture, context, values, and the client system before selecting an intervention."
    },
    {
      id: "match-systemic-feedback-loop",
      title: "The Symptom Loop",
      model: "Systemic Roles",
      context: "A child's stomachaches appear around parent conflict.",
      dialogue: [
        { speaker: "Parent", text: "The stomachaches are random. They just happen on school mornings." },
        { speaker: "Therapist", text: "Let's look at the sequence: conflict, stomachache, staying home, and how each response affects the next one." },
        { speaker: "Child", text: "When I stay home, they stop arguing for a while." },
        { speaker: "Therapist", text: "That does not mean anyone is causing it on purpose. It means the system has a feedback loop we can change." }
      ],
      answer: "Systemic Roles",
      clue: "Circular causality, interactional sequence, feedback loops, and non-blaming systemic assessment point to Systemic Roles."
    },
    {
      id: "match-ethics-coercive-control",
      title: "Too Afraid To Speak",
      model: "Ethics",
      context: "A couple requests communication work, but safety cues emerge.",
      dialogue: [
        { speaker: "Partner A", text: "I can talk as long as I do not say anything that makes him angry later." },
        { speaker: "Therapist", text: "I want to pause the communication exercise and assess safety and choice in the relationship." },
        { speaker: "Partner B", text: "We came here for tools, not accusations." },
        { speaker: "Therapist", text: "Tools can be helpful, but coercion or retaliation risk has to be assessed before vulnerable couple work." }
      ],
      answer: "Ethics",
      clue: "Safety assessment and possible coercive control override routine couple interventions."
    },
    {
      id: "match-eft-attachment-reframe",
      title: "Anger as Protest",
      model: "EFT",
      context: "One partner criticizes while the other hears only attack.",
      dialogue: [
        { speaker: "Partner A", text: "I get loud because I feel like I am alone in this marriage." },
        { speaker: "Therapist", text: "So the criticism is not just attack. It is a protest when the bond feels threatened." },
        { speaker: "Partner B", text: "I only hear that I am failing." },
        { speaker: "Therapist", text: "Let's help both of you hear the attachment message hidden inside the cycle." }
      ],
      answer: "EFT",
      clue: "Attachment reframing, protest, bond threat, and negative cycle language are EFT clues."
    }
  ]);
  var MATCH_OPTIONS = ["Bowen", "EFT", "Ethics", "Systemic Roles"];
  var WHAT_TO_SAY_NEXT_CASES = [
    {
      id: "saynext-eft-pursue-withdraw",
      title: "Couple Stuck in Pursue-Withdraw",
      difficulty: "medium",
      clientType: "Couple",
      focus: ["EFT", "Negative cycle", "Therapist response"],
      presentingProblem: "A couple reports that one partner pushes for reassurance while the other shuts down.",
      prompt: "Choose the therapist response that keeps the session emotionally focused, balanced, and clinically paced.",
      turns: [
        {
          client: "I keep asking if we are okay, and he just stares at the floor. It makes me feel pathetic.",
          choices: [
            { text: "Tell him he needs to reassure you more often.", score: 35, feedback: "Too directive and alliance-risky. It sides with one partner before tracking the cycle.", followup: "He says, 'So I am the problem again,' and looks away." },
            { text: "Slow the moment down and name the pursue-withdraw pattern without blaming either partner.", score: 100, feedback: "Strong. It tracks the cycle and protects both partners from blame.", followup: "Both partners nod. He says, 'That is pretty much what happens every time.'" },
            { text: "Ask each partner to list three household changes they want.", score: 45, feedback: "Concrete, but it moves away from the live emotional process too early.", followup: "They start debating chores and the emotional moment fades." },
            { text: "Change topics to family history immediately.", score: 55, feedback: "Family history may matter, but the live cycle is available right now.", followup: "She says, 'I guess, but this is happening right here too.'" }
          ],
          topic: "Track the cycle"
        },
        {
          client: "When she gets intense, I freeze. If I say anything wrong, the night is ruined.",
          choices: [
            { text: "So you are afraid your response will make things worse, and shutting down is your protection.", score: 100, feedback: "Strong reflection. It validates protection and accesses the softer fear.", followup: "He exhales and says, 'Yes. I am not trying to punish her.'" },
            { text: "You need to stop shutting down because it hurts her.", score: 30, feedback: "This is likely to shame him and intensify withdrawal.", followup: "He crosses his arms and says, 'I knew this would become my fault.'" },
            { text: "Let's ignore the freezing for now and focus on communication rules.", score: 45, feedback: "Rules may help later, but this misses primary emotion.", followup: "The couple agrees politely, but the emotional energy drops." },
            { text: "Ask whether he has a diagnosis that explains freezing.", score: 40, feedback: "Assessment can matter, but the immediate relational cue is clearer.", followup: "He says, 'I do not know. I just get overwhelmed.'" }
          ],
          topic: "Access protection"
        },
        {
          client: "I do not want to be too much. I just want to know I still matter.",
          choices: [
            { text: "That sounds like the softer attachment fear underneath the protest.", score: 100, feedback: "Strong EFT move: name primary emotion and attachment longing.", followup: "She tears up and says, 'Yes, that is it.'" },
            { text: "You should say that to him every day until he believes it.", score: 50, feedback: "It encourages directness but jumps into advice before deepening.", followup: "She says, 'I try, but then I get angry.'" },
            { text: "This sounds irrational, because he is sitting here.", score: 10, feedback: "Invalidating. It misses the emotional reality of the cycle.", followup: "She pulls back and says, 'Never mind.'" },
            { text: "Ask him to promise he will never withdraw again.", score: 25, feedback: "Unrealistic and pressure-heavy. It can increase failure and shame.", followup: "He says, 'I cannot promise that.'" }
          ],
          topic: "Primary emotion"
        },
        {
          client: "I did not know she felt that scared. I thought she was just mad at me.",
          choices: [
            { text: "Invite him to tell her what lands differently as he hears the fear underneath the anger.", score: 100, feedback: "Good enactment. It creates a new in-session emotional exchange.", followup: "He turns toward her and says, 'I did not know you felt alone.'" },
            { text: "Move on because he understands now.", score: 45, feedback: "Understanding is useful, but EFT consolidates through contact between partners.", followup: "They both look unsure about what to do next." },
            { text: "Ask her to apologize for being angry.", score: 35, feedback: "This risks blame and bypasses the attachment fear.", followup: "She says, 'I knew this would become about me being wrong.'" },
            { text: "Tell him to write that insight down for homework.", score: 55, feedback: "Homework may help later, but the live moment is stronger.", followup: "He nods, but the connection in the room softens less." }
          ],
          topic: "Enactment"
        },
        {
          client: "When you say you did not know, I feel sad. I have been yelling because I was scared.",
          choices: [
            { text: "Stay with that sadness and help her speak from it slowly.", score: 100, feedback: "Strong. It deepens primary emotion and slows reactivity.", followup: "She speaks more quietly: 'I miss feeling close to you.'" },
            { text: "Tell her anger is never useful.", score: 20, feedback: "Too absolute. It shames protective emotion instead of translating it.", followup: "She stiffens and says, 'Then I do not know what to say.'" },
            { text: "Ask them to negotiate date night.", score: 50, feedback: "Premature problem-solving. The attachment moment is still unfolding.", followup: "They discuss schedules but stop looking at each other." },
            { text: "Ask him why he made her feel scared.", score: 25, feedback: "This turns the cycle into blame.", followup: "He says, 'I did not make her do anything.'" }
          ],
          topic: "Deepen emotion"
        },
        {
          client: "I miss you too. I hide because I am afraid I will disappoint you again.",
          choices: [
            { text: "Reflect his fear of disappointing her and invite her to take it in before responding.", score: 100, feedback: "Strong. This protects the vulnerable disclosure and keeps the exchange paced.", followup: "She says, 'I did not know you felt like a failure.'" },
            { text: "Ask him to explain all the ways he has disappointed her.", score: 20, feedback: "This increases shame and pulls away from secure contact.", followup: "He looks down and stops talking." },
            { text: "Tell her she should forgive him now.", score: 30, feedback: "Too directive and premature.", followup: "She says, 'I am not there yet.'" },
            { text: "Switch to teaching active listening steps.", score: 55, feedback: "Skills can support, but the live attachment exchange is richer.", followup: "They repeat phrases, but the vulnerability thins out." }
          ],
          topic: "Protect vulnerability"
        },
        {
          client: "Part of me wants to reach for him, and part of me is still angry.",
          choices: [
            { text: "Normalize both parts and help her choose a small reachable message from the softer place.", score: 100, feedback: "Good pacing. It honors complexity while guiding a tolerable enactment.", followup: "She says, 'I can tell him I want to try, but I am scared.'" },
            { text: "Tell her to ignore the anger and hug him.", score: 25, feedback: "Too fast. It can override her protective response.", followup: "She says, 'That feels forced.'" },
            { text: "Focus only on the anger because it is louder.", score: 45, feedback: "Anger matters, but the softer longing is available too.", followup: "The conversation moves back toward protest." },
            { text: "End the session immediately because they had a breakthrough.", score: 35, feedback: "Premature. The moment needs consolidation and safety.", followup: "They look relieved but unsure what the breakthrough means." }
          ],
          topic: "Pace enactment"
        },
        {
          client: "I want to try, but I am scared we will go home and do the same thing again.",
          choices: [
            { text: "Summarize the cycle, the new softer messages, and one small signal they can practice when the cycle starts.", score: 100, feedback: "Strong close. It consolidates insight and creates a realistic next step.", followup: "They agree to name the cycle and pause before pursuing or withdrawing." },
            { text: "Guarantee the cycle is fixed now.", score: 10, feedback: "Unethical and unrealistic. Change takes practice.", followup: "Both partners look doubtful." },
            { text: "Assign a long list of communication homework.", score: 50, feedback: "Too much. A small, emotionally linked task is more usable.", followup: "They agree, but seem overwhelmed." },
            { text: "Tell them to avoid hard conversations until next session.", score: 35, feedback: "Avoidance does not build new interactional capacity.", followup: "They say that may be impossible with their week." }
          ],
          topic: "Consolidation"
        }
      ],
      summaryChecklist: [
        { label: "Named the negative cycle", keywords: ["cycle", "pursue", "withdraw", "pattern"] },
        { label: "Tracked primary emotion or attachment fear", keywords: ["primary", "fear", "scared", "attachment", "longing", "vulnerable"] },
        { label: "Protected balanced alliance", keywords: ["both", "balanced", "alliance", "no blame", "without blaming"] },
        { label: "Used enactment or in-session contact", keywords: ["enact", "turn", "tell him", "tell her", "in session", "speak"] },
        { label: "Consolidated a realistic next step", keywords: ["practice", "next step", "pause", "signal", "home", "consolidate"] }
      ],
      modelAnswer: "I tracked the pursue-withdraw cycle, slowed blame, reflected each partner's protection, and helped them speak from primary attachment fear. I chose enactments only after enough safety was present, then ended by consolidating the new cycle language and one small practice step."
    }
  ];
  WHAT_TO_SAY_NEXT_CASES = WHAT_TO_SAY_NEXT_CASES.concat([
    {
      id: "saynext-bowen-adult-child-triangle",
      title: "Adult Child Pulled Into the Middle",
      difficulty: "medium",
      clientType: "Family",
      focus: ["Bowen", "Triangle", "I-position"],
      presentingProblem: "An adult child is being asked to manage conflict between a parent and sibling.",
      prompt: "Choose responses that keep the therapist detriangled, calm, and focused on process rather than blame.",
      turns: [
        {
          client: "My mom calls me every night about my brother. If I do not calm her down, everything blows up.",
          choices: [
            { text: "So part of your role has become lowering anxiety between your mom and brother.", score: 100, feedback: "Strong Bowen frame. It tracks the triangle without blaming anyone.", followup: "The client says, 'Yes. I am like the family pressure valve.'" },
            { text: "You should tell your mother she is being manipulative.", score: 30, feedback: "This escalates blame and pulls the client into another reactive position.", followup: "The client says, 'That would start a war.'" },
            { text: "Let's focus only on how your brother needs to change.", score: 35, feedback: "This keeps the identified problem on one person and misses the triangle.", followup: "The client says, 'Everyone already does that.'" },
            { text: "Can you block your mother's number for the rest of the month?", score: 45, feedback: "Distance may reduce anxiety, but Bowen first distinguishes thoughtful boundaries from cutoff.", followup: "The client says, 'That sounds peaceful but also extreme.'" }
          ],
          topic: "Triangle"
        },
        {
          client: "If I stop answering, I feel like a bad daughter.",
          choices: [
            { text: "Let's slow the guilt down and look at what you believe your responsibility is in the family system.", score: 100, feedback: "Strong. It helps the client observe fusion and responsibility without taking over.", followup: "The client says, 'I guess I believe I am responsible for everyone's mood.'" },
            { text: "That guilt is irrational, so do not listen to it.", score: 25, feedback: "Dismissive. It misses the emotional process organizing the role.", followup: "The client says, 'It still feels real though.'" },
            { text: "Call your mother now and confront her during session.", score: 45, feedback: "Too fast. Direct contact can be useful, but not before lowering reactivity and forming an I-position.", followup: "The client tenses and says, 'I am not ready.'" },
            { text: "Your brother should be in treatment instead of you.", score: 35, feedback: "This relocates the problem and misses the client's part in the pattern.", followup: "The client says, 'Maybe, but I am the one who keeps answering.'" }
          ],
          topic: "Fusion"
        },
        {
          client: "I usually tell my brother what Mom said, then he gets mad at me too.",
          choices: [
            { text: "That sounds like the triangle tightens when you become the messenger.", score: 100, feedback: "Strong process observation. It names the sequence clearly.", followup: "The client nods: 'I never thought of myself as the messenger, but I am.'" },
            { text: "Maybe your brother deserves to know everything she says.", score: 45, feedback: "Tempting, but it does not examine the role the client is playing.", followup: "The client says, 'That is what I tell myself.'" },
            { text: "You need to convince them to talk directly tonight.", score: 55, feedback: "Direct communication may help eventually, but the client first needs a less reactive position.", followup: "The client says, 'I would still be arranging it.'" },
            { text: "Let's diagnose which family member is more anxious.", score: 30, feedback: "Bowen looks at process, not ranking blame.", followup: "The client says, 'They would both say it is the other one.'" }
          ],
          topic: "Detriangling"
        },
        {
          client: "If I say, 'Talk to him directly,' Mom says I am abandoning her.",
          choices: [
            { text: "Let's build an I-position that stays connected without accepting the messenger role.", score: 100, feedback: "Strong. It supports differentiation and connection.", followup: "The client says, 'Maybe I can be warm without fixing it.'" },
            { text: "Tell her she is wrong and hang up quickly.", score: 35, feedback: "That may be reactive cutoff rather than differentiation.", followup: "The client says, 'I would feel awful after.'" },
            { text: "Reassure her for as long as she needs so she feels safe.", score: 40, feedback: "This keeps the old role intact.", followup: "The client sighs: 'That is what I already do.'" },
            { text: "Ask her to promise she will never involve you again.", score: 45, feedback: "An all-or-nothing demand may increase reactivity.", followup: "The client says, 'She would never promise that.'" }
          ],
          topic: "I-position"
        },
        {
          client: "What would an I-position even sound like?",
          choices: [
            { text: "Something like: I care about you, and I am not going to carry messages between you and him.", score: 100, feedback: "Strong. It is clear, connected, and self-defined.", followup: "The client says, 'That sounds firm but not cruel.'" },
            { text: "Something like: You are ruining my life by calling me.", score: 25, feedback: "This is emotionally reactive and likely to intensify the pattern.", followup: "The client winces: 'That is what I want to scream.'" },
            { text: "Something like: I will help only if you admit you are the problem.", score: 30, feedback: "This makes change conditional on blame.", followup: "The client says, 'She would attack me for that.'" },
            { text: "Something like: I will never discuss family again.", score: 45, feedback: "That is more cutoff-like than differentiated contact.", followup: "The client says, 'That feels too big.'" }
          ],
          topic: "I-position wording"
        },
        {
          client: "I am scared she will cry and I will give in.",
          choices: [
            { text: "Let's plan for your own reactivity when she gets upset, not just the words you will say.", score: 100, feedback: "Strong. Bowen work prepares the client to manage self under pressure.", followup: "The client says, 'I need that. Her tears undo me.'" },
            { text: "Then wait until you feel no anxiety at all.", score: 40, feedback: "The goal is thoughtful functioning in anxiety, not zero anxiety.", followup: "The client says, 'That day may never come.'" },
            { text: "Ask your sibling to handle the call for you.", score: 35, feedback: "That may simply move the triangle around.", followup: "The client says, 'Then he would be mad at me too.'" },
            { text: "Use a softer voice so she cannot get upset.", score: 45, feedback: "Tone helps, but it cannot control the parent's response.", followup: "The client says, 'I keep trying to manage her reaction.'" }
          ],
          topic: "Self-regulation"
        },
        {
          client: "So the goal is not to disappear. It is to stop being the messenger.",
          choices: [
            { text: "Exactly. We can track the triangle, practice your I-position, and review what happens after you try it.", score: 100, feedback: "Strong consolidation. It names the process and next practice.", followup: "The client says, 'That feels like something I can actually practice.'" },
            { text: "Right, and your mother needs to change before anything gets better.", score: 35, feedback: "This puts the change outside the client's functioning.", followup: "The client says, 'That makes me feel stuck again.'" },
            { text: "Right, so end all family contact for now.", score: 35, feedback: "Too broad and cutoff-leaning for this case.", followup: "The client says, 'That is not what I want.'" },
            { text: "Right, now we can stop discussing family process.", score: 30, feedback: "The insight needs practice and follow-up.", followup: "The client says, 'I still need help doing it.'" }
          ],
          topic: "Consolidation"
        }
      ],
      summaryChecklist: [
        { label: "Named the triangle", keywords: ["triangle", "messenger", "middle", "third"] },
        { label: "Tracked anxiety or fusion", keywords: ["anxiety", "fusion", "reactivity", "responsibility"] },
        { label: "Used I-position language", keywords: ["i-position", "i position", "clear", "connected", "self"] },
        { label: "Avoided blame or cutoff", keywords: ["without blame", "no blame", "cutoff", "connected", "not disappear"] },
        { label: "Planned practice", keywords: ["practice", "plan", "review", "try", "next"] }
      ],
      modelAnswer: "I tracked how the client was pulled into a triangle as the messenger, helped them observe guilt and reactivity, and practiced a connected I-position. I avoided blaming the mother or brother and focused on differentiated contact plus a realistic practice step."
    },
    {
      id: "saynext-systemic-teen-scapegoat",
      title: "Teen Cast as the Problem",
      difficulty: "easy",
      clientType: "Family",
      focus: ["Systemic Roles", "Balanced alliance", "Assessment"],
      presentingProblem: "Parents bring a teen to therapy and insist the teen's disrespect is the family's only problem.",
      prompt: "Choose responses that build alliance with the whole system and broaden the focus beyond one identified client.",
      turns: [
        {
          client: "He is the reason we are here. If he would stop being disrespectful, we would be fine.",
          choices: [
            { text: "I want to understand his behavior and also the pattern that happens around it in the family.", score: 100, feedback: "Strong systemic opening. It includes the concern without scapegoating.", followup: "One parent says, 'The pattern is that he pushes buttons.'" },
            { text: "You are right, he sounds like the whole problem.", score: 10, feedback: "This joins the scapegoating frame.", followup: "The teen sinks lower in the chair." },
            { text: "Parents are usually the real problem, so let's focus on you two.", score: 20, feedback: "This flips blame rather than broadening the system.", followup: "The parents become defensive." },
            { text: "Let's ignore behavior and only talk about feelings.", score: 45, feedback: "Feelings matter, but the behavior and interactional sequence also matter.", followup: "The parent says, 'The behavior is why we came.'" }
          ],
          topic: "Balanced alliance"
        },
        {
          client: "I only yell because they start lecturing me the second I walk in.",
          choices: [
            { text: "So one sequence may be lecture, pressure, yelling, then more pressure. Did I get that close?", score: 100, feedback: "Strong. It maps the interaction without declaring a villain.", followup: "The teen says, 'Yeah, every day.'" },
            { text: "Yelling is unacceptable, so you need consequences first.", score: 45, feedback: "Accountability may matter, but this skips sequence assessment.", followup: "The teen says, 'See, no one listens.'" },
            { text: "Your parents probably lecture because you deserve it.", score: 10, feedback: "This sides with the parents.", followup: "The teen stops talking." },
            { text: "Let's decide who starts it most often.", score: 35, feedback: "That turns assessment into a blame contest.", followup: "The family immediately argues." }
          ],
          topic: "Interactional sequence"
        },
        {
          client: "Nobody asked what happens at school. I am already exhausted before I get home.",
          choices: [
            { text: "That context matters. Let's include school stress in the family pattern we are assessing.", score: 100, feedback: "Strong. It broadens context and helps the teen feel included.", followup: "The teen says, 'Thank you. It is not just attitude.'" },
            { text: "School stress is separate, so keep it out of family therapy.", score: 25, feedback: "Systemic work includes context around the symptom.", followup: "The teen shrugs and goes quiet." },
            { text: "Then your parents should stop all expectations.", score: 35, feedback: "This overcorrects and sides with one member.", followup: "A parent says, 'That is not realistic.'" },
            { text: "Let's diagnose you before discussing school.", score: 35, feedback: "Diagnosis may be relevant, but immediate context and sequence are available.", followup: "The teen says, 'I knew this would happen.'" }
          ],
          topic: "Context"
        },
        {
          client: "We just need a plan. We cannot keep doing this every night.",
          choices: [
            { text: "Let's create one small evening experiment and agree how each person will notice their part in the sequence.", score: 100, feedback: "Strong. It turns assessment into a shared, testable plan.", followup: "The family agrees to try a 20-minute decompression window before chores." },
            { text: "The teen should sign a behavior contract right now.", score: 50, feedback: "A contract may help later, but shared sequence change is better first.", followup: "The teen says, 'So it is still all me.'" },
            { text: "The parents should stop enforcing chores for now.", score: 40, feedback: "This may reduce conflict but avoids the family learning a new pattern.", followup: "One parent says, 'That will explode later.'" },
            { text: "No plan until everyone admits fault.", score: 20, feedback: "This sets up blame and stalls collaboration.", followup: "The room gets tense." }
          ],
          topic: "Collaborative plan"
        },
        {
          client: "What if he does not follow it?",
          choices: [
            { text: "Then we treat it as information about the pattern and revise the plan, while keeping expectations clear.", score: 100, feedback: "Strong. It keeps accountability and systemic curiosity together.", followup: "The parent says, 'So not just success or failure.'" },
            { text: "Then therapy is not working.", score: 30, feedback: "Too all-or-nothing.", followup: "The family looks discouraged." },
            { text: "Then he proves he is the problem.", score: 10, feedback: "This returns to scapegoating.", followup: "The teen says, 'There it is.'" },
            { text: "Then ignore the plan and move to another topic.", score: 25, feedback: "Missed follow-up. The response to breakdown is clinically important.", followup: "The parent says, 'That is what we always do.'" }
          ],
          topic: "Feedback loop"
        },
        {
          client: "I can try if they do not start with a lecture.",
          choices: [
            { text: "Good. Let's name each person's first small move: decompression, clear request, and a direct response.", score: 100, feedback: "Strong close. It assigns shared, observable parts without blame.", followup: "The family leaves with a concrete experiment." },
            { text: "Good, so your parents have to change first.", score: 35, feedback: "This shifts the whole burden to the parents.", followup: "The parents push back." },
            { text: "Good, so you have to promise perfect follow-through.", score: 35, feedback: "Perfection is unrealistic and pressure-heavy.", followup: "The teen says, 'I cannot promise perfect.'" },
            { text: "Good, then the problem is solved.", score: 25, feedback: "The plan needs practice and review.", followup: "Everyone looks unsure." }
          ],
          topic: "Shared next step"
        },
        {
          client: "That sounds better than everyone staring at me like I am the broken one.",
          choices: [
            { text: "Let's hold onto that. The problem is the pattern we are changing together, not one person being broken.", score: 100, feedback: "Strong systemic reframe. It protects dignity and shared responsibility.", followup: "The teen looks relieved, and the parents nod." },
            { text: "Try not to be so sensitive to how people look at you.", score: 20, feedback: "Invalidating and individualizing.", followup: "The teen goes quiet." },
            { text: "Your parents should apologize before we continue.", score: 35, feedback: "Repair may matter, but this risks forcing a moment before the family is ready.", followup: "The parents look cornered." },
            { text: "Now we can stop talking about the family pattern.", score: 25, feedback: "The reframe needs repetition and practice.", followup: "The teen says, 'I hope it actually changes.'" }
          ],
          topic: "Systemic reframe"
        }
      ],
      summaryChecklist: [
        { label: "Balanced alliance", keywords: ["balanced", "alliance", "everyone", "whole family", "system"] },
        { label: "Mapped interactional sequence", keywords: ["sequence", "pattern", "loop", "interaction"] },
        { label: "Included context", keywords: ["context", "school", "stress", "routine"] },
        { label: "Avoided scapegoating", keywords: ["scapegoat", "identified", "not blame", "no blame"] },
        { label: "Made a shared experiment", keywords: ["experiment", "plan", "each person", "shared", "practice"] }
      ],
      modelAnswer: "I kept alliance with the parents and teen, mapped the lecture-pressure-yelling sequence, included school stress and routines, avoided making the teen the only problem, and ended with a shared behavioral experiment the family can review."
    },
    {
      id: "saynext-ethics-secret-affair",
      title: "Secret Before Couple Session",
      difficulty: "hard",
      clientType: "Couple",
      focus: ["Ethics", "Couple therapy frame", "Secrets policy"],
      presentingProblem: "One partner privately discloses an affair minutes before a couple session and asks the therapist not to tell.",
      prompt: "Choose responses that protect consent, confidentiality, balanced alliance, and the treatment frame.",
      turns: [
        {
          client: "Before my spouse comes in, I need to tell you I had an affair. You cannot say anything.",
          choices: [
            { text: "Before I agree to secrecy, we need to review the privacy and secrets policy for couple therapy.", score: 100, feedback: "Strong ethics-first response. It avoids making a promise that may break the treatment frame.", followup: "The partner says, 'I thought individual privacy still applied.'" },
            { text: "I promise I will never bring it up.", score: 10, feedback: "Unsafe. This may undermine informed consent and the couple therapy frame.", followup: "The partner relaxes, but the therapist is now boxed into a secret alliance." },
            { text: "I will tell your spouse as soon as they walk in.", score: 35, feedback: "Too abrupt. Disclosure needs a clinical and ethical process.", followup: "The partner says, 'Then I should not have told you.'" },
            { text: "Let's ignore it and focus on communication today.", score: 20, feedback: "Avoidance leaves a major consent and alliance issue active.", followup: "The partner says, 'Good, I do not want it touched.'" }
          ],
          topic: "Secrets policy"
        },
        {
          client: "If you make me tell, I will quit therapy.",
          choices: [
            { text: "I hear the fear. I also need to be clear about what information I can hold while treating the relationship.", score: 100, feedback: "Strong. It validates while keeping the professional frame.", followup: "The partner says, 'So you are saying this affects treatment?'" },
            { text: "Then therapy is over immediately.", score: 35, feedback: "Too abrupt. Termination or referral may be needed, but first clarify options.", followup: "The partner says, 'That feels like punishment.'" },
            { text: "Fine, we can keep it secret if you promise to end the affair.", score: 25, feedback: "This trades ethics for a bargain and keeps a secret alliance.", followup: "The partner says, 'Okay, so we never discuss it?'" },
            { text: "Your spouse deserves to know, so I am on their side now.", score: 20, feedback: "This damages balanced alliance and shifts into blame.", followup: "The partner shuts down." }
          ],
          topic: "Balanced frame"
        },
        {
          client: "I just need help deciding whether to stay married.",
          choices: [
            { text: "That may be important work, but the couple therapy consent frame has to be clear before we continue together.", score: 100, feedback: "Strong sequencing. Consent and role clarity come before treatment moves.", followup: "The partner says, 'What are my options?'" },
            { text: "Let's do discernment counseling secretly inside the couple therapy.", score: 30, feedback: "Role drift. The service and consent frame need to be explicit.", followup: "The partner says, 'So my spouse will not know what we are doing?'" },
            { text: "EFT will solve this if we deepen attachment needs.", score: 25, feedback: "Model work cannot bypass consent and secrets-policy concerns.", followup: "The partner says, 'I do not want to deepen anything yet.'" },
            { text: "You should leave the marriage if you are unsure.", score: 15, feedback: "Directive and outside the therapist's role.", followup: "The partner says, 'I do not want you deciding for me.'" }
          ],
          topic: "Informed consent"
        },
        {
          client: "Could we just meet individually for a while and not tell them why?",
          choices: [
            { text: "We would need a clear agreement about any individual contact, its purpose, and how it affects couple therapy.", score: 100, feedback: "Strong. It keeps role, consent, and records clear.", followup: "The partner says, 'So this cannot be hidden inside the couple work.'" },
            { text: "Yes, individual sessions are automatically private from the spouse.", score: 25, feedback: "Too absolute. Couple therapy requires a clear policy about individual contacts.", followup: "The partner says, 'Perfect, then I can keep both going.'" },
            { text: "No therapist ever meets individually with couple clients.", score: 45, feedback: "Too rigid. Some do, but only with clear consent and policy.", followup: "The partner says, 'But we did an individual intake.'" },
            { text: "Let your spouse decide your individual treatment.", score: 20, feedback: "This gives one partner inappropriate control.", followup: "The partner says, 'That does not feel right either.'" }
          ],
          topic: "Role clarity"
        },
        {
          client: "What if I tell them but they explode?",
          choices: [
            { text: "We need to assess safety, timing, and support before any disclosure plan.", score: 100, feedback: "Strong. It does not force a disclosure without risk assessment.", followup: "The partner says, 'There has never been violence, but I am scared of the reaction.'" },
            { text: "Explosions are part of honesty, so just do it.", score: 15, feedback: "This ignores safety and clinical pacing.", followup: "The partner says, 'That makes me want to hide it more.'" },
            { text: "If they explode, that proves they caused the affair.", score: 10, feedback: "Blaming and unethical.", followup: "The partner says, 'That is not fair.'" },
            { text: "Disclosure is never appropriate in couple therapy.", score: 35, feedback: "Too absolute. The issue is how to handle it ethically and safely.", followup: "The partner says, 'So what do I do?'" }
          ],
          topic: "Safety and pacing"
        },
        {
          client: "I feel trapped. I should not have said anything.",
          choices: [
            { text: "I understand this feels exposing. My job is to help us handle it clearly, ethically, and without creating a hidden alliance.", score: 100, feedback: "Strong. It joins distress while naming the clinical priority.", followup: "The partner says, 'Hidden alliance. That is what this would become, isn't it?'" },
            { text: "Yes, it would have been better not to tell me.", score: 10, feedback: "Shaming and clinically unhelpful.", followup: "The partner looks away." },
            { text: "This is why secrets always ruin therapy.", score: 25, feedback: "Overgeneralized and blaming.", followup: "The partner says, 'Now I feel judged.'" },
            { text: "Let's just bring your spouse in and see what happens.", score: 40, feedback: "Too vague. The therapist needs a deliberate plan.", followup: "The partner says, 'That sounds risky.'" }
          ],
          topic: "Alliance repair"
        },
        {
          client: "Okay. I need to understand the policy and maybe plan how to tell them safely.",
          choices: [
            { text: "Good. We will clarify the couple therapy frame, document the decision-making, and plan next steps with safety and consent in mind.", score: 100, feedback: "Strong close. It includes consent, documentation, safety, and next steps.", followup: "The partner says, 'That feels clearer, even if it is hard.'" },
            { text: "Great, then I will script exactly what you must say.", score: 45, feedback: "Some preparation helps, but the therapist should avoid taking over the client's agency.", followup: "The partner says, 'I need help, not a command.'" },
            { text: "Great, now the ethical issue is solved.", score: 35, feedback: "Not yet. The frame and disclosure plan still need careful handling.", followup: "The partner says, 'We have not actually done anything yet.'" },
            { text: "Great, and I will keep the chart vague.", score: 15, feedback: "Documentation should be accurate and clinically appropriate.", followup: "The partner says, 'Is that allowed?'" }
          ],
          topic: "Documentation"
        }
      ],
      summaryChecklist: [
        { label: "Clarified secrets policy", keywords: ["secret", "policy", "couple therapy", "frame"] },
        { label: "Protected informed consent", keywords: ["consent", "informed", "agreement", "role"] },
        { label: "Avoided hidden alliance", keywords: ["hidden alliance", "alliance", "balanced", "no side"] },
        { label: "Assessed safety and pacing", keywords: ["safety", "risk", "timing", "pace"] },
        { label: "Documented next steps", keywords: ["document", "record", "next step", "plan"] }
      ],
      modelAnswer: "I did not promise secrecy or force immediate disclosure. I clarified the couple therapy frame, protected informed consent and balanced alliance, assessed safety and pacing, and planned ethically documented next steps."
    }
  ]);
  var PROFILE_KEY = "therapyStudyProfiles:v1";
  var ACTIVE_KEY = "therapyStudyActiveProfile:v1";
  var SCENARIO_KEY = "therapyStudyScenarioAttempts:v1";
  var THEME_KEY = "therapyStudyTheme:v1";
  var ACCENT_KEY = "therapyStudyAccent:v1";
  var SYNC_CODE_KEY = "therapyStudySyncCode:v1";
  var FEEDBACK_ADMIN_TOKEN_KEY = "therapyStudyFeedbackAdminToken:v1";
  var REVIEW_INTERVAL_DAYS = [0, 1, 3, 7];
  var VIEW_CHROME = {
    dashboard: { kicker: "TODAY", title: "Study Dashboard" },
    clinic: { kicker: "SESSION", title: "Daily Clinic" },
    guide: { kicker: "REFERENCE", title: "Study Guide" },
    match: { kicker: "RECOGNITION", title: "Match the Model" },
    quiz: { kicker: "RECALL", title: "Questionnaire" },
    scenarios: { kicker: "APPLICATION", title: "Real Life Examples" },
    skill: { kicker: "CLINICAL SKILLS", title: "Skill Lab" },
    feedback: { kicker: "REQUESTS", title: "Bug Reports / Feature Requests" },
    progress: { kicker: "REVIEW", title: "Progress" }
  };

  var state = {
    profiles: [],
    activeProfileId: "",
    quiz: null,
    match: null,
    scenario: null,
    skill: null,
    clinic: null,
    lastScenarioId: "",
    syncMessage: "",
    syncStatus: "idle",
    syncTimer: null,
    applyingSync: false,
    feedbackItems: [],
    feedbackMessage: "",
    feedbackStatus: "idle",
    feedbackAdminToken: "",
    feedbackAdminMessage: "",
    feedbackAdminStatus: "idle",
    feedbackAdminLoading: false
  };

  var els = {};

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    cacheElements();
    setupNavigation();
    loadProfiles();
    loadTheme();
    loadFeedbackAdmin();
    populateFilters();
    bindForms();
    renderAll();
  }

  function cacheElements() {
    els.profileForm = document.getElementById("profileForm");
    els.profileSelect = document.getElementById("profileSelect");
    els.profileName = document.getElementById("profileName");
    els.themeSelect = document.getElementById("themeSelect");
    els.accentSelect = document.getElementById("accentSelect");
    els.sidebarToggle = document.getElementById("sidebarToggle");
    els.viewCrumbKicker = document.getElementById("viewCrumbKicker");
    els.viewCrumbTitle = document.getElementById("viewCrumbTitle");
    els.syncPanelShell = document.getElementById("syncPanelShell");
    els.syncPanel = document.getElementById("syncPanel");
    els.dashboardStats = document.getElementById("dashboardStats");
    els.dashboardTodayPlan = document.getElementById("dashboardTodayPlan");
    els.clinicSetup = document.getElementById("clinicSetup");
    els.clinicLevel = document.getElementById("clinicLevel");
    els.clinicFocus = document.getElementById("clinicFocus");
    els.todayStudyPath = document.getElementById("todayStudyPath");
    els.clinicCoach = document.getElementById("clinicCoach");
    els.focusQueue = document.getElementById("focusQueue");
    els.sourceList = document.getElementById("sourceList");
    els.guideFilter = document.getElementById("guideFilter");
    els.guideSearch = document.getElementById("guideSearch");
    els.guideResults = document.getElementById("guideResults");
    els.guideGrid = document.getElementById("guideGrid");
    els.matchSetup = document.getElementById("matchSetup");
    els.matchFocus = document.getElementById("matchFocus");
    els.matchCard = document.getElementById("matchCard");
    els.matchScore = document.getElementById("matchScore");
    els.quizSetup = document.getElementById("quizSetup");
    els.quizMode = document.getElementById("quizMode");
    els.quizDifficulty = document.getElementById("quizDifficulty");
    els.quizTopic = document.getElementById("quizTopic");
    els.quizCount = document.getElementById("quizCount");
    els.quizStatus = document.getElementById("quizStatus");
    els.quizCard = document.getElementById("quizCard");
    els.scenarioSetup = document.getElementById("scenarioSetup");
    els.scenarioDifficulty = document.getElementById("scenarioDifficulty");
    els.scenarioMode = document.getElementById("scenarioMode");
    els.scenarioCase = document.getElementById("scenarioCase");
    els.scenarioLibrary = document.getElementById("scenarioLibrary");
    els.scenarioCard = document.getElementById("scenarioCard");
    els.scenarioScore = document.getElementById("scenarioScore");
    els.skillSetup = document.getElementById("skillSetup");
    els.skillMode = document.getElementById("skillMode");
    els.skillDifficulty = document.getElementById("skillDifficulty");
    els.skillCase = document.getElementById("skillCase");
    els.skillCard = document.getElementById("skillCard");
    els.skillScore = document.getElementById("skillScore");
    els.quizHistory = document.getElementById("quizHistory");
    els.matchHistory = document.getElementById("matchHistory");
    els.scenarioHistory = document.getElementById("scenarioHistory");
    els.skillHistory = document.getElementById("skillHistory");
    els.clinicHistory = document.getElementById("clinicHistory");
    els.masteryDashboard = document.getElementById("masteryDashboard");
    els.resetProfile = document.getElementById("resetProfile");
    els.practiceWeakNow = document.getElementById("practiceWeakNow");
    els.feedbackForm = document.getElementById("feedbackForm");
    els.feedbackType = document.getElementById("feedbackType");
    els.feedbackTitleInput = document.getElementById("feedbackTitleInput");
    els.feedbackDetails = document.getElementById("feedbackDetails");
    els.feedbackContact = document.getElementById("feedbackContact");
    els.feedbackPage = document.getElementById("feedbackPage");
    els.feedbackStatus = document.getElementById("feedbackStatus");
    els.feedbackAdminLogin = document.getElementById("feedbackAdminLogin");
    els.feedbackAdminPassword = document.getElementById("feedbackAdminPassword");
    els.feedbackAdminStatus = document.getElementById("feedbackAdminStatus");
    els.feedbackAdminPanel = document.getElementById("feedbackAdminPanel");
    els.feedbackAdminFilter = document.getElementById("feedbackAdminFilter");
    els.feedbackAdminRefresh = document.getElementById("feedbackAdminRefresh");
    els.feedbackAdminLogout = document.getElementById("feedbackAdminLogout");
    els.feedbackAdminList = document.getElementById("feedbackAdminList");
  }

  function setupNavigation() {
    document.querySelectorAll("[data-view-button]").forEach(function (button) {
      button.addEventListener("click", function () {
        showView(button.getAttribute("data-view-button"));
        setSidebarOpen(false);
      });
    });

    document.querySelectorAll("[data-jump-view]").forEach(function (button) {
      button.addEventListener("click", function () {
        showView(button.getAttribute("data-jump-view"));
        setSidebarOpen(false);
      });
    });

    if (els.sidebarToggle) {
      els.sidebarToggle.addEventListener("click", function () {
        var shell = document.querySelector(".app-shell");
        setSidebarOpen(shell ? shell.classList.contains("sidebar-collapsed") : true);
      });
    }

    document.querySelectorAll("[data-skill-tab]").forEach(function (button) {
      button.addEventListener("click", function () {
        setSkillTab(button.getAttribute("data-skill-tab"));
      });
    });
  }

  function setSidebarOpen(isOpen) {
    var shell = document.querySelector(".app-shell");
    if (!shell) return;
    shell.classList.toggle("sidebar-collapsed", !isOpen);
    if (els.sidebarToggle) {
      els.sidebarToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      els.sidebarToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    }
  }

  function showView(viewId) {
    document.querySelectorAll(".view").forEach(function (view) {
      view.classList.toggle("is-active", view.id === viewId);
    });
    document.querySelectorAll("[data-view-button]").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-view-button") === viewId);
    });
    var shell = document.querySelector(".app-shell");
    if (shell) {
      shell.classList.toggle("is-guide-wide", viewId === "guide");
      shell.classList.toggle("is-content-wide", ["match", "quiz", "scenarios", "skill", "progress"].indexOf(viewId) !== -1);
    }
    var chrome = VIEW_CHROME[viewId] || VIEW_CHROME.dashboard;
    if (els.viewCrumbKicker) {
      els.viewCrumbKicker.textContent = chrome.kicker;
    }
    if (els.viewCrumbTitle) {
      els.viewCrumbTitle.textContent = chrome.title;
    }
    if (viewId === "feedback") {
      renderFeedback();
      if (state.feedbackAdminToken && state.feedbackItems.length === 0 && !state.feedbackAdminLoading) {
        loadFeedbackItems();
      }
    }
    if (viewId === "clinic") {
      renderClinicHome();
    }
    if (viewId === "match") {
      renderMatch();
    }
  }

  function bindForms() {
    els.profileForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = els.profileName.value.trim();
      if (!name) return;
      var profile = createProfile(name);
      state.profiles.push(profile);
      state.activeProfileId = profile.id;
      state.clinic = null;
      els.profileName.value = "";
      saveProfiles();
      renderAll();
    });

    els.profileSelect.addEventListener("change", function () {
      state.activeProfileId = els.profileSelect.value;
      state.clinic = null;
      saveActiveProfile();
      renderAll();
    });

    els.themeSelect.addEventListener("change", function () {
      applyTheme(els.themeSelect.value);
    });
    if (els.accentSelect) {
      els.accentSelect.addEventListener("change", function () {
        applyAccent(els.accentSelect.value);
      });
    }

    els.guideFilter.addEventListener("change", renderGuide);
    els.guideSearch.addEventListener("input", renderGuide);
    els.guideSearch.addEventListener("search", renderGuide);
    els.guideSearch.addEventListener("keyup", renderGuide);
    els.guideSearch.addEventListener("change", renderGuide);

    if (els.matchSetup) {
      els.matchSetup.addEventListener("submit", function (event) {
        event.preventDefault();
        startMatchRound();
      });
    }
    if (els.matchFocus) {
      els.matchFocus.addEventListener("change", function () {
        var profile = getProfile();
        profile.settings.matchFocus = els.matchFocus.value;
        state.match = null;
        saveProfiles();
        renderMatch();
      });
    }

    els.quizSetup.addEventListener("submit", function (event) {
      event.preventDefault();
      startQuiz();
    });
    if (els.quizMode) {
      els.quizMode.addEventListener("change", function () {
        state.quiz = null;
        renderQuizAvailability();
      });
    }
    els.quizDifficulty.addEventListener("change", renderQuizAvailability);
    els.quizTopic.addEventListener("change", renderQuizAvailability);
    els.quizCount.addEventListener("change", renderQuizAvailability);

    if (els.clinicSetup) {
      els.clinicSetup.addEventListener("submit", function (event) {
        event.preventDefault();
        startDailyClinic(els.clinicLevel ? els.clinicLevel.value : "practice", clinicFocusTarget());
      });
    }
    if (els.clinicLevel) {
      els.clinicLevel.addEventListener("change", function () {
        var profile = getProfile();
        profile.settings.clinicLevel = normalizeClinicLevel(els.clinicLevel.value);
        saveProfiles();
      });
    }

    els.scenarioSetup.addEventListener("submit", function (event) {
      event.preventDefault();
      startScenario();
    });
    els.scenarioDifficulty.addEventListener("change", function () {
      var profile = getProfile();
      profile.settings.scenarioDifficulty = els.scenarioDifficulty.value;
      saveProfiles();
      renderScenarioLibrary();
      if (!state.scenario) {
        els.scenarioCard.innerHTML = "<div class=\"empty-state\">Choose settings and load a random case.</div>";
        els.scenarioScore.innerHTML = "<div class=\"empty-state\">No case scored yet.</div>";
      }
    });
    els.scenarioMode.addEventListener("change", function () {
      var profile = getProfile();
      profile.settings.scenarioMode = els.scenarioMode.value;
      state.scenario = null;
      saveProfiles();
      renderScenarioLibrary();
      renderScenarioPlaceholder();
    });

    els.skillSetup.addEventListener("submit", function (event) {
      event.preventDefault();
      startSkillDrill();
    });
    els.skillMode.addEventListener("change", function () {
      var profile = getProfile();
      profile.settings.skillMode = els.skillMode.value;
      state.skill = null;
      saveProfiles();
      populateSkillCases();
      renderSkillPlaceholder();
    });
    els.skillDifficulty.addEventListener("change", function () {
      var profile = getProfile();
      profile.settings.skillDifficulty = els.skillDifficulty.value;
      state.skill = null;
      saveProfiles();
      populateSkillCases();
      renderSkillPlaceholder();
    });

    if (els.practiceWeakNow) {
      els.practiceWeakNow.addEventListener("click", openWeakPractice);
    }

    els.resetProfile.addEventListener("click", function () {
      clearActiveProfile();
    });

    if (els.feedbackForm) {
      els.feedbackForm.addEventListener("submit", submitFeedbackRequest);
    }
    if (els.feedbackAdminLogin) {
      els.feedbackAdminLogin.addEventListener("submit", loginFeedbackAdmin);
    }
    if (els.feedbackAdminFilter) {
      els.feedbackAdminFilter.addEventListener("change", loadFeedbackItems);
    }
    if (els.feedbackAdminRefresh) {
      els.feedbackAdminRefresh.addEventListener("click", loadFeedbackItems);
    }
    if (els.feedbackAdminLogout) {
      els.feedbackAdminLogout.addEventListener("click", logoutFeedbackAdmin);
    }
  }

  function populateFilters() {
    var models = unique(DATA.studySections.map(function (section) { return section.model; }));
    models.forEach(function (model) {
      els.guideFilter.appendChild(option(model, model));
    });

    var topics = unique(DATA.questions.map(function (question) { return question.model; }));
    topics.forEach(function (topic) {
      els.quizTopic.appendChild(option(topic, topic));
    });
    populateSkillCases();
  }

  function option(value, text) {
    var node = document.createElement("option");
    node.value = value;
    node.textContent = text;
    return node;
  }

  function loadProfiles() {
    state.profiles = readJson(PROFILE_KEY, []);
    if (!Array.isArray(state.profiles) || state.profiles.length === 0) {
      state.profiles = [createProfile("Learner 1")];
    }
    state.profiles = state.profiles.map(normalizeProfile);

    var active = safeStorage.getItem(ACTIVE_KEY);
    state.activeProfileId = active && findProfile(active) ? active : state.profiles[0].id;
    migrateScenarioAttempts();
    state.profiles = state.profiles.map(normalizeProfile);
    saveProfiles();
    saveActiveProfile();
  }

  function loadTheme() {
    var theme = safeStorage.getItem(THEME_KEY) || "light";
    var accent = safeStorage.getItem(ACCENT_KEY) || "teal";
    applyTheme(theme);
    applyAccent(accent);
  }

  function normalizeTheme(theme) {
    var allowed = ["light", "paper", "mist", "dark", "graphite", "midnight", "obsidian", "carbon", "deep-ocean", "twilight", "void", "onyx"];
    return allowed.indexOf(theme) === -1 ? "light" : theme;
  }

  function isDarkTheme(theme) {
    return ["dark", "graphite", "midnight", "obsidian", "carbon", "deep-ocean", "twilight", "void", "onyx"].indexOf(theme) !== -1;
  }

  function applyTheme(theme) {
    var nextTheme = normalizeTheme(theme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.setAttribute("data-tone", isDarkTheme(nextTheme) ? "dark" : "light");
    safeStorage.setItem(THEME_KEY, nextTheme);
    if (els.themeSelect) {
      els.themeSelect.value = nextTheme;
    }
  }

  function applyAccent(accent) {
    var allowed = ["teal", "blue", "pink", "red", "purple", "emerald", "cyan", "indigo", "orange", "amber", "lime", "rose", "slate"];
    var nextAccent = allowed.indexOf(accent) === -1 ? "teal" : accent;
    document.documentElement.setAttribute("data-accent", nextAccent);
    safeStorage.setItem(ACCENT_KEY, nextAccent);
    if (els.accentSelect) {
      els.accentSelect.value = nextAccent;
    }
  }

  function migrateScenarioAttempts() {
    var saved = readJson(SCENARIO_KEY, {});
    if (!saved || typeof saved !== "object") return;
    state.profiles.forEach(function (profile) {
      if (!Array.isArray(profile.scenarioAttempts)) {
        profile.scenarioAttempts = [];
      }
      if (Array.isArray(saved[profile.id]) && profile.scenarioAttempts.length === 0) {
        profile.scenarioAttempts = saved[profile.id];
      }
    });
  }

  function createProfile(name) {
    return {
      id: "profile-" + Date.now() + "-" + Math.floor(Math.random() * 100000),
      name: name,
      createdAt: new Date().toISOString(),
      quizAttempts: [],
      matchAttempts: [],
      scenarioAttempts: [],
      skillAttempts: [],
      clinicAttempts: [],
      reviewQueue: [],
      flashcardStats: {},
      masteryStats: {},
      settings: {
        quizDifficulty: "mixed",
        quizCount: 10,
        matchFocus: "mixed",
        clinicLevel: "practice",
        scenarioDifficulty: "mixed",
        scenarioMode: "combined",
        skillMode: "quick",
        skillDifficulty: "mixed"
      }
    };
  }

  function normalizeProfile(profile) {
    var normalized = profile || createProfile("Learner");
    normalized.quizAttempts = Array.isArray(normalized.quizAttempts) ? normalized.quizAttempts : [];
    normalized.matchAttempts = Array.isArray(normalized.matchAttempts) ? normalized.matchAttempts : [];
    normalized.scenarioAttempts = Array.isArray(normalized.scenarioAttempts) ? normalized.scenarioAttempts : [];
    normalized.skillAttempts = Array.isArray(normalized.skillAttempts) ? normalized.skillAttempts : [];
    normalized.clinicAttempts = Array.isArray(normalized.clinicAttempts) ? normalized.clinicAttempts : [];
    normalized.reviewQueue = Array.isArray(normalized.reviewQueue) ? normalized.reviewQueue : [];
    normalized.flashcardStats = normalized.flashcardStats && typeof normalized.flashcardStats === "object" ? normalized.flashcardStats : {};
    normalized.masteryStats = normalized.masteryStats && typeof normalized.masteryStats === "object" ? normalized.masteryStats : {};
    normalized.settings = normalized.settings || {};
    if (!normalized.settings.quizDifficulty) normalized.settings.quizDifficulty = "mixed";
    if (!normalized.settings.quizCount) normalized.settings.quizCount = 10;
    if (!normalized.settings.matchFocus) normalized.settings.matchFocus = "mixed";
    if (!normalized.settings.clinicLevel) normalized.settings.clinicLevel = "practice";
    if (!normalized.settings.scenarioDifficulty) normalized.settings.scenarioDifficulty = "mixed";
    if (!normalized.settings.scenarioMode) normalized.settings.scenarioMode = "combined";
    if (!normalized.settings.skillMode || ["quick", "simulator"].indexOf(normalized.settings.skillMode) === -1) {
      normalized.settings.skillMode = "quick";
    }
    if (!normalized.settings.skillDifficulty) normalized.settings.skillDifficulty = "mixed";
    return normalized;
  }

  function getProfile() {
    return findProfile(state.activeProfileId) || state.profiles[0];
  }

  function findProfile(id) {
    return state.profiles.find(function (profile) { return profile.id === id; });
  }

  function saveProfiles() {
    safeStorage.setItem(PROFILE_KEY, JSON.stringify(state.profiles));
    scheduleAutoSync();
  }

  function saveActiveProfile() {
    safeStorage.setItem(ACTIVE_KEY, state.activeProfileId);
  }

  function renderAll() {
    renderProfilePicker();
    renderDashboard();
    renderClinicHome();
    renderGuide();
    renderMatch();
    renderQuizPlaceholder();
    renderScenarioPlaceholder();
    renderScenarioLibrary();
    renderSkillPlaceholder();
    renderSyncPanel();
    renderFeedback();
    renderProgress();
  }

  function renderProfilePicker() {
    var profile = getProfile();
    els.profileSelect.innerHTML = state.profiles.map(function (item) {
      return "<option value=\"" + escapeHtml(item.id) + "\">" + escapeHtml(item.name) + "</option>";
    }).join("");
    els.profileSelect.value = profile.id;
  }

  function renderDashboard() {
    var profile = getProfile();
    var quizAttempts = profile.quizAttempts || [];
    var matchAttempts = profile.matchAttempts || [];
    var scenarioAttempts = profile.scenarioAttempts || [];
    var skillAttempts = profile.skillAttempts || [];
    var clinicAttempts = profile.clinicAttempts || [];
    var avgQuiz = average(quizAttempts.map(function (attempt) { return attempt.scorePercent; }));
    var avgMatch = average(matchAttempts.map(function (attempt) { return attempt.scorePercent; }));
    var avgScenario = average(scenarioAttempts.map(function (attempt) { return attempt.scorePercent; }));
    var avgSkill = average(skillAttempts.map(function (attempt) { return attempt.scorePercent; }));
    var avgClinic = average(clinicAttempts.map(function (attempt) { return attempt.scorePercent; }));
    var missed = getMissedTopics(profile);
    var due = getDueReviewItems(profile);
    var latest = [quizAttempts[0], matchAttempts[0], scenarioAttempts[0], skillAttempts[0], clinicAttempts[0]].filter(Boolean).sort(function (a, b) {
      return new Date(b.date || b.answeredAt || b.startedAt || 0).getTime() - new Date(a.date || a.answeredAt || a.startedAt || 0).getTime();
    })[0];
    var sayNextCount = WHAT_TO_SAY_NEXT_CASES.length;

    els.dashboardStats.innerHTML = [
      statCard(clinicAttempts.length, "Clinic rounds"),
      statCard(avgClinic === null ? "--" : avgClinic + "%", "Average clinic score"),
      statCard(quizAttempts.length, "Questionnaire attempts"),
      statCard(avgQuiz === null ? "--" : avgQuiz + "%", "Average questionnaire score"),
      statCard(matchAttempts.length, "Model matches"),
      statCard(avgMatch === null ? "--" : avgMatch + "%", "Average model match"),
      statCard(scenarioAttempts.length, "Scenario attempts"),
      statCard(avgScenario === null ? "--" : avgScenario + "%", "Average scenario score"),
      statCard(skillAttempts.length, "Skill lab attempts"),
      statCard(avgSkill === null ? "--" : avgSkill + "%", "Average skill score")
    ].join("");

    if (els.dashboardTodayPlan) {
      els.dashboardTodayPlan.innerHTML = [
        dashboardPlanItem("Role-play", sayNextCount + " What To Say Next sessions", "Practice therapist language through a back-and-forth case.", "Start What To Say Next", "saynext"),
        dashboardPlanItem("Review", due.length ? due.length + " spaced review items due" : "No spaced review due", due.length ? "Clear the oldest missed topics first." : "Use a mixed set to keep recall warm.", due.length ? "Practice Weak Spots" : "Start Questionnaire", due.length ? "weak" : "quiz"),
        dashboardPlanItem("Recent", latest ? latest.scorePercent + "% on " + (latest.title || latest.mode || "latest attempt") : "No attempts yet", latest ? formatDateTime(latest.date || latest.answeredAt || latest.startedAt) : "Start anywhere and this will fill in.", "Open Progress", "progress")
      ].join("");
      els.dashboardTodayPlan.querySelectorAll("[data-dashboard-action]").forEach(function (button) {
        button.addEventListener("click", function () {
          handleDashboardAction(button.getAttribute("data-dashboard-action"));
        });
      });
    }

    if (missed.length === 0) {
      els.focusQueue.innerHTML = "<div class=\"empty-state\">No missed topics yet.</div>";
    } else {
      els.focusQueue.innerHTML = missed.slice(0, 6).map(function (item) {
        return [
          "<div class=\"focus-item\">",
          "<strong>" + escapeHtml(renderWeakSpotLabel(item)) + "</strong>",
          "<span>" + item.count + " missed item" + (item.count === 1 ? "" : "s") + "</span>",
          "<button class=\"secondary weak-spot-button\" type=\"button\" data-weak-topic=\"" + escapeHtml(item.topic || "") + "\" data-weak-model=\"" + escapeHtml(item.model || "") + "\">Practice This Weak Spot</button>",
          "</div>"
        ].join("");
      }).join("");
      els.focusQueue.querySelectorAll("[data-weak-topic]").forEach(function (button) {
        button.addEventListener("click", function () {
          startWeakSpotClinic(button.getAttribute("data-weak-topic"), button.getAttribute("data-weak-model"));
        });
      });
    }

    els.sourceList.innerHTML = DATA.resources.map(function (resource) {
      return "<div class=\"source-item\"><a href=\"" + escapeHtml(resource.url) + "\" target=\"_blank\" rel=\"noreferrer\">" + escapeHtml(resource.title) + "</a><br><span>" + escapeHtml(resource.note) + "</span></div>";
    }).join("");

  }

  function dashboardPlanItem(label, title, detail, buttonText, action) {
    return [
      "<div class=\"today-plan-item\">",
      "<span>" + escapeHtml(label) + "</span>",
      "<strong>" + escapeHtml(title) + "</strong>",
      "<p>" + escapeHtml(detail) + "</p>",
      "<button class=\"secondary\" type=\"button\" data-dashboard-action=\"" + escapeHtml(action) + "\">" + escapeHtml(buttonText) + "</button>",
      "</div>"
    ].join("");
  }

  function handleDashboardAction(action) {
    if (action === "saynext") {
      setSelectIfOption(els.scenarioMode, "saynext");
      renderScenarioLibrary();
      showView("scenarios");
      return;
    }
    if (action === "weak") {
      openWeakPractice();
      return;
    }
    if (action === "quiz") {
      showView("quiz");
      return;
    }
    if (action === "progress") {
      showView("progress");
    }
  }

  function renderWeakSpotLabel(item) {
    var parts = [item.model, item.domain, item.topic].filter(Boolean);
    return unique(parts).join(" -> ") || item.topic || "Review item";
  }

  function renderClinicHome() {
    if (!els.todayStudyPath) return;
    var profile = getProfile();
    if (els.clinicLevel) {
      els.clinicLevel.value = normalizeClinicLevel((profile.settings || {}).clinicLevel || "practice");
    }
    if (state.clinic) {
      renderClinicSession();
      return;
    }
    var missed = getMissedTopics(profile);
    var weakSpot = missed[0] ? renderWeakSpotLabel(missed[0]) : "Balanced starter session";
    var due = getDueReviewItems(profile);
    els.todayStudyPath.innerHTML = [
      "<div class=\"clinic-start\">",
      "<div class=\"clinic-start-copy\"><strong>Start a branching therapy session</strong><span>One client case unfolds across several turns. Choose the therapist response, see how the client reacts, and keep the session moving.</span></div>",
      "<div class=\"clinic-preview clinic-agenda\">",
      "<div><em>Focus</em><strong>" + escapeHtml(weakSpot) + "</strong><span>Use Weak area to target this.</span></div>",
      "<div><em>Format</em><strong>5-7 turns</strong><span>Choices first, rewrite after feedback.</span></div>",
      "<div><em>Review</em><strong>" + (due.length ? due.length + " due" : "No due items") + "</strong><span>Clinic history still updates Progress.</span></div>",
      "</div>",
      "<div class=\"button-row\"><button type=\"button\" id=\"startDailyClinicInline\">Start Session</button></div>",
      "</div>"
    ].join("");
    renderClinicCoach();
    bindOptionalClick("startDailyClinicInline", function () {
      startDailyClinic(els.clinicLevel ? els.clinicLevel.value : "practice", clinicFocusTarget());
    });
  }

  function clinicFocusTarget() {
    var focus = els.clinicFocus ? els.clinicFocus.value : "balanced";
    if (focus === "weak") {
      var model = getWeakQuizModel(getProfile());
      return model ? { model: model, topic: "" } : null;
    }
    if (focus && focus !== "balanced") {
      return { model: focus, topic: "" };
    }
    return null;
  }

  function startWeakSpotClinic(topic, model) {
    showView("clinic");
    if (els.clinicFocus) els.clinicFocus.value = "weak";
    startDailyClinic((getProfile().settings || {}).clinicLevel || "practice", {
      topic: topic || "",
      model: model || ""
    });
  }

  function startDailyClinic(level, targetWeak) {
    var profile = getProfile();
    var normalizedLevel = normalizeClinicLevel(level);
    profile.settings.clinicLevel = normalizedLevel;
    state.clinic = buildClinicSession(profile, normalizedLevel, targetWeak || null);
    saveProfiles();
    renderClinicSession();
  }

  function normalizeClinicLevel(level) {
    return ["learn", "practice", "exam"].indexOf(level) === -1 ? "practice" : level;
  }

  function buildClinicSession(profile, level, targetWeak) {
    var script = pickClinicSession(targetWeak);
    return {
      level: level,
      targetWeak: targetWeak || null,
      script: script,
      index: 0,
      answers: [],
      alliance: 0,
      startedAt: new Date().toISOString(),
      completed: false,
      saved: false
    };
  }

  function pickClinicSession(targetWeak) {
    var sessions = clinicSessionScripts();
    var target = targetWeak && targetWeak.model ? String(targetWeak.model).toLowerCase() : "";
    var matches = target ? sessions.filter(function (session) {
      return session.model.toLowerCase() === target || session.tags.join(" ").toLowerCase().indexOf(target) !== -1;
    }) : [];
    return shuffle(matches.length ? matches : sessions)[0];
  }

  function clinicSessionScripts() {
    return [
      {
        id: "clinic-session-eft-withdraw",
        title: "The Evening Shutdown",
        model: "EFT",
        domain: "Systemic therapy models",
        topic: "Negative Cycle",
        clientSystem: "Couple",
        presentingProblem: "A couple reports that every evening conversation turns into criticism and withdrawal.",
        context: ["Both partners want the relationship to improve.", "No current violence is reported.", "One partner says they feel invisible; the other says they feel constantly failing."],
        riskNotes: ["Screen for coercion and safety before deepening vulnerable emotion."],
        openingLine: "Taylor says, 'I ask one question about why Jordan is late, and suddenly I am the villain. Jordan just stares at the floor.' Jordan replies, 'Because whatever I say turns into proof I do not care.'",
        tags: ["EFT", "Cycle", "Primary Emotion"],
        turns: [
          clinicTurn("eft-1", "Joining", "Taylor looks at you and says, 'Can you please tell Jordan this is not normal?'", "What would you do next?", [
            clinicChoice("Track the pattern without taking sides: 'I want to slow this down and understand what happens between you both when the question lands.'", 2, "Strong. You join both partners and move blame into process.", "Taylor exhales. Jordan looks up a little.", "Balanced alliance makes the room safer for deeper EFT work.", "Balanced alliance"),
            clinicChoice("Tell Jordan they need to answer faster so Taylor feels reassured.", 0, "This sides with Taylor and turns the therapist into a judge.", "Jordan folds their arms and says, 'See, I knew this would happen.'", "Do not start by declaring one partner the problem.", "Side-taking"),
            clinicChoice("Ask Taylor to stop using blaming words.", 1, "Partly useful, but it corrects before joining the distress.", "Taylor says, 'So I am the problem now?'", "Join the pain before coaching language.", "Premature correction")
          ]),
          clinicTurn("eft-2", "Cycle", "Jordan says, 'When I hear the questions, I go blank. I know anything I say will be wrong.'", "What would you do next?", [
            clinicChoice("Reflect the withdrawer's protection and link it to the cycle.", 2, "Strong EFT move. You validate protection and organize the cycle.", "Jordan nods. Taylor says, 'I did not know it felt like that.'", "This opens the softer layer without blaming either partner.", "Cycle tracking"),
            clinicChoice("Ask for a three-generation family diagram immediately.", 1, "A genogram may help later, but it misses the live EFT moment.", "Jordan answers politely but the emotional moment cools.", "Match the intervention to the model and moment.", "Model mismatch"),
            clinicChoice("Move straight to problem-solving their evening schedule.", 0, "This skips the emotional process that maintains the fight.", "Taylor says, 'We already tried schedules. That is not the point.'", "Problem solving too early can leave the cycle untouched.", "Problem solving too early")
          ]),
          clinicTurn("eft-3", "Primary Emotion", "Taylor's voice softens: 'When Jordan goes quiet, I feel like I do not matter at all.'", "What would you do next?", [
            clinicChoice("Validate and deepen the softer attachment fear.", 2, "Strong. You stay with the primary emotion under the protest.", "Taylor tears up. Jordan turns toward Taylor.", "This is the heart of EFT de-escalation.", "Primary emotion"),
            clinicChoice("Warn Taylor that crying could manipulate Jordan.", 0, "This shames vulnerability and escalates the cycle.", "Taylor shuts down and Jordan looks angry.", "Do not pathologize softer emotion.", "Shaming vulnerability"),
            clinicChoice("Ask Jordan to promise they will never be late again.", 1, "Reassurance sounds nice but avoids the attachment meaning.", "Jordan says, 'I cannot promise traffic will never happen.'", "Stay with meaning before contracts.", "Premature reassurance")
          ]),
          clinicTurn("eft-4", "Enactment Prep", "Jordan says quietly, 'I do care. I just feel like I fail before I start.'", "What would you do next?", [
            clinicChoice("Shape a small, safe enactment from Jordan to Taylor.", 2, "Strong. The emotion is organized enough for direct contact.", "Jordan turns and says, 'I care, and I get scared I will disappoint you.'", "EFT enactments work when paced and emotionally organized.", "Enactment"),
            clinicChoice("Tell Taylor to accept Jordan's apology and move on.", 0, "This rushes repair and silences Taylor's attachment fear.", "Taylor stiffens and says, 'That is not enough.'", "Do not force resolution before responsiveness.", "Forced resolution"),
            clinicChoice("Switch topics because the room is emotional.", 1, "Pacing matters, but avoiding the moment loses momentum.", "Both partners quiet down but seem distant.", "Regulate without abandoning the process.", "Avoidance")
          ]),
          clinicTurn("eft-5", "Consolidation", "After the enactment, both partners are quieter. Taylor says, 'That felt different, but I am scared it will disappear when we go home.'", "What would you do next?", [
            clinicChoice("Name the new interaction and plan a small between-session practice.", 2, "Strong close. You consolidate the new cycle and make it repeatable.", "Both partners agree to pause and name the cycle before arguing tonight.", "Consolidation turns a session moment into practice.", "Consolidation"),
            clinicChoice("Say the problem is solved because they had one good moment.", 0, "This overstates progress and skips relapse planning.", "Taylor looks doubtful; Jordan withdraws again.", "Do not oversell one session moment.", "Overstating progress"),
            clinicChoice("Assign a long communication worksheet without linking it to the cycle.", 1, "Homework can help, but it should connect to the live pattern.", "They agree, but the task feels generic.", "Make practice specific to the cycle.", "Generic homework")
          ])
        ]
      },
      {
        id: "clinic-session-bowen-triangle",
        title: "Caught Between Parents",
        model: "Bowen",
        domain: "Systemic therapy models",
        topic: "Triangles",
        clientSystem: "Adult family",
        presentingProblem: "An adult son is pulled into his divorced parents' conflict and asks the therapist to tell him who is right.",
        context: ["The client wants contact with both parents.", "Each parent pressures him for loyalty.", "The client reports anxiety before family calls."],
        riskNotes: ["No immediate safety issue is stated; continue to monitor autonomy and pressure."],
        openingLine: "Marcus says, 'My mom says I am betraying her if I answer Dad's calls. Dad says Mom is poisoning me. I need you to tell me what to do.'",
        tags: ["Bowen", "Triangle", "Differentiation"],
        turns: [
          clinicTurn("bowen-1", "Detriangling", "Marcus leans forward: 'Seriously, whose side is healthier?'", "What would you do next?", [
            clinicChoice("Refuse the judge role and help him observe the triangle.", 2, "Strong Bowen stance. You stay out of the triangle and shift to process.", "Marcus sighs, then says, 'So the pressure itself is part of it?'", "The therapist models detriangling.", "Detriangling"),
            clinicChoice("Choose the parent who sounds less reactive.", 0, "This joins the triangle.", "Marcus says, 'I knew it. I will tell Dad you agree.'", "Do not become the third point in the conflict.", "Joining triangle"),
            clinicChoice("Tell him to cut off both parents.", 0, "This prescribes cutoff instead of differentiation.", "Marcus looks alarmed: 'That seems extreme.'", "Bowen is not automatic no-contact advice.", "Cutoff confusion")
          ]),
          clinicTurn("bowen-2", "Process Questions", "Marcus says, 'Mom calls first, then Dad texts me, then I cannot sleep.'", "What would you do next?", [
            clinicChoice("Ask process questions about sequence, timing, and his part.", 2, "Strong. Bowen work studies how anxiety moves through the system.", "Marcus maps the calls and notices he replies fastest when guilty.", "Process questions create observation under pressure.", "Process questions"),
            clinicChoice("Ask him to role-play an emotional apology to both parents.", 1, "Possibly useful later, but the Bowen priority is observation and self-position.", "Marcus tries, but it becomes about pleasing them.", "Differentiate before performing repair.", "Model mismatch"),
            clinicChoice("Tell him his parents are manipulative and should be confronted.", 0, "This escalates blame and reactivity.", "Marcus gets tense and starts defending both parents.", "Bowen lowers reactivity rather than intensifying blame.", "Blame")
          ]),
          clinicTurn("bowen-3", "I-position", "Marcus says, 'If I say no to Mom, she will fall apart.'", "What would you do next?", [
            clinicChoice("Coach a calm I-position that respects connection without taking responsibility for her reaction.", 2, "Strong. This practices differentiation.", "Marcus says, 'I can say I love her and I am not discussing Dad tonight.'", "I-position is connected self-definition.", "I-position"),
            clinicChoice("Tell him to reassure her until she calms down.", 0, "This supports overfunctioning.", "Marcus says, 'That is what I already do for hours.'", "Overfunctioning keeps the triangle alive.", "Overfunctioning"),
            clinicChoice("Tell him not to care how she feels.", 0, "This confuses differentiation with emotional cutoff.", "Marcus pulls back: 'I do care, though.'", "Differentiation is not indifference.", "Cutoff")
          ]),
          clinicTurn("bowen-4", "Family Pattern", "He remembers being the messenger during his parents' marriage.", "What would you do next?", [
            clinicChoice("Connect the current pressure to the multigenerational or long-term family pattern.", 2, "Strong. You widen the lens without blaming.", "Marcus says, 'I have had this job since I was ten.'", "Bowen tracks repeated roles across time.", "Family pattern"),
            clinicChoice("Dismiss childhood history because he is an adult now.", 0, "This misses the repeated family process.", "Marcus looks confused and says, 'But it feels exactly the same.'", "History can reveal the emotional process.", "Ignoring history"),
            clinicChoice("Ask which parent he loves more.", 0, "This intensifies the loyalty bind.", "Marcus becomes visibly anxious.", "Do not amplify the triangle.", "Loyalty bind")
          ]),
          clinicTurn("bowen-5", "Next Step", "Marcus wants a practical plan before the next family call.", "What would you do next?", [
            clinicChoice("Plan one observable, less reactive contact experiment.", 2, "Strong. It is concrete and Bowen-consistent.", "Marcus chooses to wait ten minutes, breathe, and answer from an I-position.", "Small experiments build differentiation.", "Contact experiment"),
            clinicChoice("Write a message for him to send word-for-word.", 1, "Structure helps, but taking over weakens his self-definition.", "Marcus asks you to make every wording decision.", "Coach the process; do not become the manager.", "Therapist overfunctioning"),
            clinicChoice("Tell him to block everyone immediately.", 0, "This skips assessment and may reinforce cutoff.", "Marcus says, 'That would blow everything up.'", "Boundaries should fit goals, safety, and autonomy.", "Premature cutoff")
          ])
        ]
      },
      {
        id: "clinic-session-ethics-safety",
        title: "Before Couple Work",
        model: "Ethics",
        domain: "Crisis and risk",
        topic: "Safety Before Technique",
        clientSystem: "Couple",
        presentingProblem: "A couple requests EFT work, but one partner hints that arguments become scary at home.",
        context: ["The couple asks for communication exercises.", "One partner looks to the other before answering safety questions.", "The therapist has not completed private screening."],
        riskNotes: ["Possible coercion or retaliation risk. Safety and appropriateness of conjoint work come first."],
        openingLine: "Avery says, 'We just need tools to stop fighting.' Sam quietly adds, 'Sometimes it gets scary,' then glances at Avery and stops talking.",
        tags: ["Ethics", "Safety", "Consent"],
        turns: [
          clinicTurn("ethics-1", "Safety Signal", "Avery says, 'Do not make this dramatic. Can we just do the exercise?'", "What would you do next?", [
            clinicChoice("Pause routine couple work and clarify safety before technique.", 2, "Strong. Safety overrides model technique.", "Sam looks relieved. Avery looks frustrated but stays seated.", "Risk signals require careful assessment.", "Safety assessment"),
            clinicChoice("Start an enactment so they can speak honestly.", 0, "Unsafe. Enactments can increase danger when coercion may be present.", "Sam stops talking completely.", "Model fidelity never outranks safety.", "Unsafe enactment"),
            clinicChoice("Ask Avery to define what scary means for Sam.", 0, "This may expose Sam to retaliation or pressure.", "Sam shakes their head slightly.", "Do not make the possibly unsafe partner answer through the other partner.", "Unsafe questioning")
          ]),
          clinicTurn("ethics-2", "Private Screening", "You need more information about safety and coercion.", "What would you do next?", [
            clinicChoice("Explain the frame and arrange careful individual check-ins or screening.", 2, "Strong. You preserve safety and informed consent.", "Both partners hear the same rationale; Sam agrees to speak individually.", "Private screening can be clinically necessary.", "Private screening"),
            clinicChoice("Secretly text Sam later without explaining the frame.", 0, "This creates a confidentiality and records problem.", "The treatment frame becomes muddier.", "Be transparent about process and documentation.", "Confidentiality frame"),
            clinicChoice("Continue conjoint work but promise not to document the concern.", 0, "This is poor records practice and may increase risk.", "Sam looks more anxious.", "Risk concerns require appropriate documentation.", "Documentation")
          ]),
          clinicTurn("ethics-3", "Disclosure", "In a private check-in, Sam says Avery has punched walls and blocked the doorway during fights.", "What would you do next?", [
            clinicChoice("Assess immediate danger, coercive control, protective factors, and safe next steps.", 2, "Strong. You assess before deciding the treatment format.", "Sam describes a place they can go tonight if needed.", "Safety planning and level of care come before couple technique.", "Risk assessment"),
            clinicChoice("Tell Sam to confront Avery in the next conjoint session.", 0, "This could increase danger.", "Sam says, 'Please do not make me say that in front of Avery.'", "Avoid interventions that increase retaliation risk.", "Retaliation risk"),
            clinicChoice("Assume it is not abuse because no one was hit.", 0, "Blocking exits and intimidation can be serious safety data.", "Sam becomes quiet and guarded.", "Do not minimize coercive behavior.", "Minimizing risk")
          ]),
          clinicTurn("ethics-4", "Treatment Format", "Sam asks, 'Does this mean couples therapy is over?'", "What would you do next?", [
            clinicChoice("Explain that conjoint work depends on safety and may need referral, safety planning, or individual resources first.", 2, "Strong. You answer clearly without overpromising.", "Sam says, 'That makes sense. I need to think about safety first.'", "Appropriateness of conjoint therapy is a clinical decision.", "Conjoint appropriateness"),
            clinicChoice("Guarantee the relationship can be saved if they practice skills.", 0, "This overpromises and ignores safety.", "Sam looks doubtful.", "Do not sell technique when safety is unresolved.", "Overpromising"),
            clinicChoice("Immediately terminate without referral or planning.", 1, "Ending may be needed, but abrupt termination can abandon safety needs.", "Sam asks what to do next.", "Plan continuity and referrals.", "Continuity")
          ]),
          clinicTurn("ethics-5", "Documentation", "You have assessed risk and made a safety plan.", "What would you do next?", [
            clinicChoice("Document assessment, rationale, plan, consultation, and follow-up.", 2, "Strong. Risk decisions need clear records.", "The session closes with a concrete follow-up plan.", "Documentation supports continuity and clinical reasoning.", "Documentation"),
            clinicChoice("Document only 'couple communication issues' to avoid sensitive details.", 0, "Too vague for risk reasoning.", "Important clinical data is missing from the record.", "Records should be accurate and clinically appropriate.", "Vague documentation"),
            clinicChoice("Let the clients decide whether risk should be in the record.", 0, "Clients have rights, but clinical records must remain accurate.", "The record becomes clinically unreliable.", "Do not delete relevant risk data.", "Record accuracy")
          ])
        ]
      }
    ];
  }

  function clinicTurn(id, phase, clientLine, prompt, choices) {
    return { id: id, phase: phase, clientLine: clientLine, prompt: prompt, choices: choices };
  }

  function clinicChoice(text, score, feedback, clientFollowup, supervisorNote, missedArea) {
    return {
      text: text,
      score: score,
      feedback: feedback,
      clientFollowup: clientFollowup,
      supervisorNote: supervisorNote,
      missedArea: missedArea
    };
  }

  function renderClinicSession() {
    var clinic = state.clinic;
    if (!clinic) {
      renderClinicHome();
      return;
    }
    if (clinic.completed || clinic.index >= clinic.script.turns.length) {
      renderClinicSummary();
      return;
    }
    var turn = clinic.script.turns[clinic.index];
    var progress = Math.round((clinic.index / clinic.script.turns.length) * 100);
    els.todayStudyPath.innerHTML = [
      "<div class=\"clinic-session\">",
      "<div class=\"clinic-session-head\"><strong>Turn " + (clinic.index + 1) + " of " + clinic.script.turns.length + "</strong><span>" + escapeHtml(labelForClinicLevel(clinic.level)) + "</span></div>",
      "<div class=\"progress-bar\" aria-label=\"Daily Clinic progress\"><span style=\"width:" + progress + "%\"></span></div>",
      renderClinicCaseFrame(clinic),
      renderClinicTurn(turn),
      "</div>"
    ].join("");
    renderClinicCoach();
    bindClinicControls(turn, clinic);
  }

  function renderClinicCaseFrame(clinic) {
    var script = clinic.script;
    return [
      "<div class=\"clinic-case-frame\">",
      "<div class=\"skill-meta\"><span class=\"tag\">" + escapeHtml(script.model) + "</span><span class=\"tag\">" + escapeHtml(script.clientSystem) + "</span><span class=\"tag\">" + escapeHtml(script.topic) + "</span></div>",
      "<h3>" + escapeHtml(script.title) + "</h3>",
      "<p><strong>Presenting problem:</strong> " + escapeHtml(script.presentingProblem) + "</p>",
      "<div class=\"case-detail-grid\"><div class=\"case-detail\"><strong>Context</strong>" + list(script.context) + "</div><div class=\"case-detail alert\"><strong>Risk / ethics</strong>" + list(script.riskNotes) + "</div></div>",
      clinic.index === 0 ? "<div class=\"clinic-client-line\"><span>Client opens</span><p>" + escapeHtml(script.openingLine) + "</p></div>" : "",
      "</div>"
    ].join("");
  }

  function renderClinicTurn(turn) {
    var choices = turn.choices.map(function (choice, index) {
      var classNames = ["clinic-response"];
      if (turn.completed && turn.selectedIndex === index) classNames.push("is-selected");
      if (turn.completed && choice.score === 2) classNames.push("is-correct");
      if (turn.completed && turn.selectedIndex === index && choice.score === 0) classNames.push("is-wrong");
      return "<button class=\"" + classNames.join(" ") + "\" type=\"button\" data-clinic-choice=\"" + index + "\"" + (turn.completed ? " disabled" : "") + ">" + escapeHtml(choice.text) + "</button>";
    }).join("");
    return [
      "<div class=\"clinic-card\">",
      "<div class=\"skill-meta\"><span class=\"tag\">" + escapeHtml(turn.phase) + "</span><span class=\"tag\">Role play</span></div>",
      "<div class=\"clinic-client-line\"><span>Client says</span><p>" + escapeHtml(turn.clientLine) + "</p></div>",
      "<h4>" + escapeHtml(turn.prompt) + "</h4>",
      "<div class=\"clinic-response-list\">" + choices + "</div>",
      turn.completed ? renderClinicFeedback(turn.answerRecord) : "",
      turn.completed ? "<label class=\"sim-rewrite-label\" for=\"clinicRewrite\">Try a stronger line</label><textarea id=\"clinicRewrite\" class=\"sim-rewrite\" data-clinic-rewrite placeholder=\"Optional: write the therapist line you would use now.\">" + escapeHtml(turn.rewrite || "") + "</textarea>" : "",
      "<div class=\"button-row\">",
      turn.completed ? "<button type=\"button\" id=\"clinicNext\">" + (state.clinic && state.clinic.index === state.clinic.script.turns.length - 1 ? "Finish Session" : "Next Client Response") + "</button>" : "",
      "<button class=\"secondary\" type=\"button\" id=\"clinicStop\">Stop</button>",
      "</div>",
      "</div>"
    ].join("");
  }

  function bindClinicControls(turn, clinic) {
    els.todayStudyPath.querySelectorAll("[data-clinic-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        completeClinicChoice(turn, Number(button.getAttribute("data-clinic-choice")));
      });
    });
    var rewrite = document.getElementById("clinicRewrite");
    if (rewrite) {
      rewrite.addEventListener("input", function () {
        turn.rewrite = rewrite.value;
        if (turn.answerRecord) turn.answerRecord.rewrite = rewrite.value;
      });
    }
    bindOptionalClick("clinicNext", function () {
      clinic.index += 1;
      renderClinicSession();
    });
    bindOptionalClick("clinicStop", function () {
      state.clinic = null;
      renderClinicHome();
    });
  }

  function completeClinicChoice(turn, selectedIndex) {
    if (turn.completed) return;
    var clinic = state.clinic;
    var script = clinic.script;
    var choice = turn.choices[selectedIndex];
    var best = turn.choices.filter(function (candidate) { return candidate.score === 2; })[0] || choice;
    var answer = {
      type: "rolePlay",
      id: script.id + "-" + turn.id,
      model: script.model,
      domain: script.domain,
      topic: choice.missedArea || script.topic,
      prompt: turn.clientLine,
      correct: choice.score === 2,
      score: choice.score,
      selectedIndex: selectedIndex,
      selectedChoice: choice.text,
      correctChoice: best.text,
      whyBest: choice.feedback,
      whyTempting: choice.score === 2 ? "" : "This missed or softened the key clinical priority for this turn.",
      clientFollowup: choice.clientFollowup,
      supervisorNote: choice.supervisorNote,
      clinicalCaution: script.riskNotes.join(" "),
      reviewNext: choice.missedArea || script.topic,
      answeredAt: new Date().toISOString()
    };
    turn.selectedIndex = selectedIndex;
    turn.completed = true;
    turn.answerRecord = answer;
    clinic.alliance += choice.score - 1;
    recordClinicAnswer(answer, turn);
    renderClinicSession();
  }

  function recordClinicAnswer(answer, item) {
    var profile = getProfile();
    var clinic = state.clinic;
    clinic.answers.push(answer);
    updateReviewFromClinicDrillAnswer(profile, answer, item);
    saveProfiles();
  }

  function renderClinicFeedback(answer) {
    if (!answer) return "";
    return [
      "<div class=\"feedback " + (answer.correct ? "good" : "needs-work") + "\">",
      "<strong>" + (answer.correct ? "Supervisor feedback: strong." : "Supervisor feedback: adjust this.") + "</strong>",
      "<div class=\"explanation-grid\">",
      "<div><span>Your move</span><p>" + escapeHtml(answer.selectedChoice) + "</p></div>",
      "<div><span>Best move</span><p>" + escapeHtml(answer.correctChoice) + "</p></div>",
      "<div><span>Client follows up</span><p>" + escapeHtml(answer.clientFollowup) + "</p></div>",
      "<div><span>Supervisor note</span><p>" + escapeHtml(answer.supervisorNote) + "</p></div>",
      "</div>",
      "<p><strong>Why:</strong> " + escapeHtml(answer.whyBest) + "</p>",
      "</div>"
    ].join("");
  }

  function renderClinicCoach() {
    if (!els.clinicCoach) return;
    var clinic = state.clinic;
    if (!clinic) {
      var attempts = (getProfile().clinicAttempts || []).length;
      els.clinicCoach.innerHTML = [
        "<div class=\"skill-score-stack\">",
        "<div><strong>" + attempts + "</strong><span>Completed sessions</span></div>",
        "<div><strong>Choices + rewrite</strong><span>Response format</span></div>",
        "<div><strong>Local v1</strong><span>No backend required</span></div>",
        "</div>"
      ].join("");
      return;
    }
    var possible = clinic.answers.length * 2;
    var earned = clinic.answers.reduce(function (sum, answer) { return sum + (answer.score || 0); }, 0);
    els.clinicCoach.innerHTML = [
      "<div class=\"skill-score-stack\">",
      "<div><strong>" + earned + " / " + possible + "</strong><span>Clinical points</span></div>",
      "<div><strong>" + clinic.answers.length + "</strong><span>Turns answered</span></div>",
      "<div><strong>" + clinic.alliance + "</strong><span>Alliance trend</span></div>",
      "</div>"
    ].join("");
  }

  function renderClinicSummary() {
    var clinic = state.clinic;
    if (!clinic) return;
    if (!clinic.completed) {
      clinic.completed = true;
      saveClinicAttempt(clinic);
    }
    var possible = clinic.answers.length * 2 || 1;
    var earned = clinic.answers.reduce(function (sum, answer) { return sum + (answer.score || 0); }, 0);
    var percent = Math.round((earned / possible) * 100);
    var strengths = unique(clinic.answers.filter(function (answer) { return answer.score === 2; }).map(function (answer) {
      return answer.topic;
    })).slice(0, 4);
    var missed = unique(clinic.answers.filter(function (answer) { return answer.score < 2; }).map(function (answer) {
      return answer.model + " -> " + answer.topic;
    })).slice(0, 4);
    els.todayStudyPath.innerHTML = [
      "<div class=\"clinic-summary\">",
      "<div class=\"clinic-session-head\"><strong>Supervisor Summary</strong><span>" + percent + "%</span></div>",
      "<p><strong>" + escapeHtml(clinic.script.title) + "</strong> completed as a branching role-play session.</p>",
      strengths.length ? "<div class=\"feedback good\"><strong>Strengths:</strong>" + list(strengths) + "</div>" : "",
      missed.length ? "<div class=\"feedback needs-work\"><strong>Practice next:</strong>" + list(missed) + "</div>" : "<div class=\"feedback good\"><strong>Clean session.</strong> Try a harder focus next.</div>",
      "<div class=\"review-list\">" + clinic.answers.map(renderClinicFeedback).join("") + "</div>",
      "<div class=\"button-row\"><button type=\"button\" id=\"clinicAgain\">Start Another Session</button><button class=\"secondary\" type=\"button\" id=\"clinicClose\">Back to Dashboard</button></div>",
      "</div>"
    ].join("");
    renderClinicCoach();
    bindOptionalClick("clinicAgain", function () {
      startDailyClinic(clinic.level, clinic.targetWeak);
    });
    bindOptionalClick("clinicClose", function () {
      state.clinic = null;
      showView("dashboard");
      renderDashboard();
    });
  }

  function saveClinicAttempt(clinic) {
    if (clinic.saved) return;
    var profile = getProfile();
    var possible = clinic.answers.length * 2 || 1;
    var earned = clinic.answers.reduce(function (sum, answer) { return sum + (answer.score || 0); }, 0);
    var missed = clinic.answers.filter(function (answer) { return answer.score < 2; });
    profile.clinicAttempts = Array.isArray(profile.clinicAttempts) ? profile.clinicAttempts : [];
    profile.clinicAttempts.unshift({
      date: new Date().toISOString(),
      level: clinic.level,
      title: clinic.script.title,
      mode: "Branching Session",
      model: clinic.script.model,
      scorePercent: Math.round((earned / possible) * 100),
      correct: clinic.answers.filter(function (answer) { return answer.score === 2; }).length,
      total: clinic.answers.length,
      strengthened: unique(clinic.answers.filter(function (answer) { return answer.score === 2; }).map(function (answer) { return answer.model + " " + answer.topic; })),
      missedAreas: unique(missed.map(function (answer) { return answer.model + " -> " + answer.topic; })),
      answers: clinic.answers
    });
    profile.clinicAttempts = profile.clinicAttempts.slice(0, 40);
    clinic.saved = true;
    saveProfiles();
    renderProgress();
    renderDashboard();
  }

  function studyStep(number, title, detail, actionId, disabled) {
    return [
      "<div class=\"path-step\">",
      "<div class=\"path-number\">" + escapeHtml(number) + "</div>",
      "<div><strong>" + escapeHtml(title) + "</strong><span>" + escapeHtml(detail) + "</span></div>",
      "<button class=\"secondary\" type=\"button\" id=\"" + escapeHtml(actionId) + "\"" + (disabled ? " disabled" : "") + ">Start</button>",
      "</div>"
    ].join("");
  }

  function bindOptionalClick(id, handler) {
    var node = document.getElementById(id);
    if (node) node.addEventListener("click", handler);
  }

  function isSyncConfigured() {
    var sync = window.STUDY_SYNC;
    return Boolean(sync && sync.isConfigured && sync.isConfigured());
  }

  function ensureSyncCode() {
    var code = safeStorage.getItem(SYNC_CODE_KEY) || "";
    if (!isValidSyncCode(code)) {
      code = generateShareCode();
      safeStorage.setItem(SYNC_CODE_KEY, code);
    }
    return code;
  }

  function isValidSyncCode(code) {
    return /^[a-z0-9][a-z0-9_-]{2,63}$/.test(String(code || "").trim().toLowerCase());
  }

  function scheduleAutoSync() {
    if (state.applyingSync || !isSyncConfigured()) return;
    var code = ensureSyncCode();
    if (!code) return;
    if (state.syncTimer) {
      window.clearTimeout(state.syncTimer);
    }
    state.syncStatus = "pending";
    state.syncMessage = "Cloud sync queued.";
    state.syncTimer = window.setTimeout(function () {
      state.syncTimer = null;
      autoPushSync();
    }, 700);
  }

  async function autoPushSync() {
    var sync = window.STUDY_SYNC;
    if (!sync || !sync.push) return;
    var code = ensureSyncCode();
    state.syncStatus = "syncing";
    state.syncMessage = "Saving to Convex...";
    renderSyncPanel();
    try {
      await sync.push(code, getSyncPayload());
      state.syncStatus = "synced";
      state.syncMessage = "Progress saved to Convex automatically.";
    } catch (error) {
      state.syncStatus = "error";
      state.syncMessage = "Cloud sync failed: " + error.message;
    }
    renderSyncPanel();
  }

  function renderSyncPanel() {
    if (!els.syncPanel) return;
    var configured = isSyncConfigured();
    var code = configured ? ensureSyncCode() : "";
    var shell = els.syncPanelShell || els.syncPanel.closest(".sync-panel");

    if (!configured) {
      if (shell) shell.hidden = false;
      els.syncPanel.innerHTML = [
        "<div class=\"sync-status\"><strong>Local mode is active.</strong> The app works offline and is ready to send as a folder.</div>",
        "<div class=\"sync-status\">To turn it into a synced website, create a Convex project, deploy the <code>convex/</code> functions, then edit <code>assets/js/convex-config.js</code> with your Convex site URL.</div>",
        "<div class=\"sync-status\">After that, deploy the website to Vercel. Convex stores progress automatically for each browser while the study content stays in the website files.</div>"
      ].join("");
      return;
    }

    if (state.syncStatus !== "error") {
      if (shell) shell.hidden = true;
      els.syncPanel.innerHTML = "";
      return;
    }

    if (shell) shell.hidden = false;
    els.syncPanel.innerHTML = [
      "<div class=\"sync-status\"><strong>Automatic sync needs attention.</strong> Profiles and progress normally save to Convex in the background.</div>",
      "<details class=\"sync-advanced\">",
      "<summary>Advanced restore options</summary>",
      "<div class=\"sync-grid\">",
      "<label>Restore ID<input id=\"syncCode\" type=\"text\" value=\"" + escapeHtml(code) + "\" placeholder=\"lmft-study\" autocomplete=\"off\"></label>",
      "<div class=\"button-row\"><button type=\"button\" id=\"syncPull\">Restore This ID</button><button class=\"secondary\" type=\"button\" id=\"syncPush\">Sync Now</button><button class=\"secondary\" type=\"button\" id=\"syncNewCode\">Reset Cloud Copy</button></div>",
      "</div>",
      "</details>",
      state.syncMessage ? "<div class=\"feedback\">" + escapeHtml(state.syncMessage) + "</div>" : ""
    ].join("");

    document.getElementById("syncCode").addEventListener("input", function (event) {
      safeStorage.setItem(SYNC_CODE_KEY, event.target.value.trim());
      state.syncStatus = "pending";
      state.syncMessage = "Restore ID changed. Use the advanced restore buttons when needed.";
    });
    document.getElementById("syncNewCode").addEventListener("click", function () {
      safeStorage.setItem(SYNC_CODE_KEY, generateShareCode());
      state.syncStatus = "pending";
      state.syncMessage = "Cloud copy reset. Future progress will save automatically.";
      renderSyncPanel();
      scheduleAutoSync();
    });
    document.getElementById("syncPush").addEventListener("click", pushSync);
    document.getElementById("syncPull").addEventListener("click", pullSync);
  }

  function getSyncCode() {
    var codeInput = document.getElementById("syncCode");
    var code = (codeInput ? codeInput.value : safeStorage.getItem(SYNC_CODE_KEY) || "").trim();
    if (!code) {
      code = ensureSyncCode();
    }
    safeStorage.setItem(SYNC_CODE_KEY, code);
    return code;
  }

  function getSyncPayload() {
    return {
      version: 1,
      exportedAt: new Date().toISOString(),
      profiles: state.profiles,
      activeProfileId: state.activeProfileId,
      theme: safeStorage.getItem(THEME_KEY) || "light",
      accent: safeStorage.getItem(ACCENT_KEY) || "teal"
    };
  }

  function applySyncPayload(payload) {
    if (!payload || !Array.isArray(payload.profiles)) {
      throw new Error("Cloud copy is missing profile data.");
    }
    state.applyingSync = true;
    state.profiles = payload.profiles;
    state.activeProfileId = payload.activeProfileId && findProfile(payload.activeProfileId)
      ? payload.activeProfileId
      : state.profiles[0].id;
    saveProfiles();
    saveActiveProfile();
    saveScenarioMirror();
    if (payload.theme) {
      applyTheme(payload.theme);
    }
    if (payload.accent) {
      applyAccent(payload.accent);
    }
    state.quiz = null;
    state.scenario = null;
    state.applyingSync = false;
  }

  async function pushSync() {
    var sync = window.STUDY_SYNC;
    if (!sync || !sync.push) return;
    var code = getSyncCode();
    state.syncStatus = "syncing";
    state.syncMessage = "Saving to Convex...";
    renderSyncPanel();
    try {
      await sync.push(code, getSyncPayload());
      state.syncStatus = "synced";
      state.syncMessage = "Progress saved to Convex automatically.";
    } catch (error) {
      state.syncStatus = "error";
      state.syncMessage = "Cloud sync failed: " + error.message;
    }
    renderSyncPanel();
  }

  async function pullSync() {
    var sync = window.STUDY_SYNC;
    if (!sync || !sync.pull) return;
    var code = getSyncCode();
    if (!window.confirm("Restoring will replace the local profiles on this device with the Convex copy for '" + code + "'.")) {
      return;
    }
    state.syncStatus = "syncing";
    state.syncMessage = "Restoring from Convex...";
    renderSyncPanel();
    try {
      var payload = await sync.pull(code);
      applySyncPayload(payload);
      state.syncStatus = "synced";
      state.syncMessage = "Restored the saved cloud copy.";
    } catch (error) {
      state.syncStatus = "error";
      state.syncMessage = "Cloud restore failed: " + error.message;
    }
    renderAll();
  }

  function loadFeedbackAdmin() {
    state.feedbackAdminToken = safeStorage.getItem(FEEDBACK_ADMIN_TOKEN_KEY) || "";
  }

  function isFeedbackConfigured() {
    var feedback = window.STUDY_FEEDBACK;
    return Boolean(feedback && feedback.isConfigured && feedback.isConfigured());
  }

  function renderFeedback() {
    if (!els.feedbackStatus) return;
    if (els.feedbackPage && !els.feedbackPage.value) {
      els.feedbackPage.placeholder = currentFeedbackLocation();
    }
    if (!isFeedbackConfigured()) {
      state.feedbackStatus = "error";
      state.feedbackMessage = "Request inbox needs Convex configured before submissions can be saved.";
    } else if (state.feedbackStatus === "idle") {
      state.feedbackMessage = "";
    }
    renderFeedbackMessage(els.feedbackStatus, state.feedbackStatus, state.feedbackMessage);
    renderFeedbackAdmin();
  }

  function renderFeedbackAdmin() {
    if (!els.feedbackAdminPanel) return;
    var loggedIn = Boolean(state.feedbackAdminToken);
    if (els.feedbackAdminLogin) els.feedbackAdminLogin.hidden = loggedIn;
    els.feedbackAdminPanel.hidden = !loggedIn;

    if (!isFeedbackConfigured()) {
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = "Admin inbox needs Convex configured.";
    } else if (!loggedIn && state.feedbackAdminStatus === "idle") {
      state.feedbackAdminMessage = "";
    }

    renderFeedbackMessage(els.feedbackAdminStatus, state.feedbackAdminStatus, state.feedbackAdminMessage);
    if (loggedIn) {
      renderFeedbackItems();
    }
  }

  function renderFeedbackMessage(node, status, message) {
    if (!node) return;
    node.className = "feedback-status" + (status && status !== "idle" ? " " + status : "");
    node.textContent = message || "";
  }

  function clearFeedbackAdminToken() {
    state.feedbackAdminToken = "";
    safeStorage.setItem(FEEDBACK_ADMIN_TOKEN_KEY, "");
  }

  function normalizeFeedbackAdminError(error, fallback) {
    var message = String((error && error.message) || fallback || "Could not complete admin request.");
    message = message.split("\n")[0].replace(/^Uncaught Error:\s*/i, "");
    if (/requireAdmin|session|expired|log in|unauthorized/i.test(message)) {
      return {
        expired: true,
        message: "Admin session expired. Log in again."
      };
    }
    return {
      expired: false,
      message: message
    };
  }

  async function submitFeedbackRequest(event) {
    event.preventDefault();
    var feedback = window.STUDY_FEEDBACK;
    if (!feedback || !feedback.submit || !isFeedbackConfigured()) {
      state.feedbackStatus = "error";
      state.feedbackMessage = "Request inbox is not connected yet.";
      renderFeedback();
      return;
    }

    var title = (els.feedbackTitleInput.value || "").trim();
    var details = (els.feedbackDetails.value || "").trim();
    if (title.length < 4 || details.length < 10) {
      state.feedbackStatus = "error";
      state.feedbackMessage = "Add a short title and at least one clear sentence of details.";
      renderFeedback();
      return;
    }

    var button = els.feedbackForm.querySelector("button[type='submit']");
    if (button) button.disabled = true;
    state.feedbackStatus = "syncing";
    state.feedbackMessage = "Submitting request...";
    renderFeedback();

    try {
      await feedback.submit({
        type: els.feedbackType.value || "bug",
        title: title,
        details: details,
        contact: (els.feedbackContact.value || "").trim(),
        pageUrl: (els.feedbackPage.value || "").trim() || currentFeedbackLocation(),
        userAgent: window.navigator ? window.navigator.userAgent : ""
      });
      state.feedbackStatus = "synced";
      state.feedbackMessage = "Request submitted. Thank you.";
      els.feedbackTitleInput.value = "";
      els.feedbackDetails.value = "";
      els.feedbackPage.value = "";
    } catch (error) {
      state.feedbackStatus = "error";
      state.feedbackMessage = error.message || "Could not submit request.";
    }

    if (button) button.disabled = false;
    renderFeedback();
  }

  async function loginFeedbackAdmin(event) {
    event.preventDefault();
    var feedback = window.STUDY_FEEDBACK;
    if (!feedback || !feedback.adminLogin || !isFeedbackConfigured()) {
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = "Admin inbox is not connected yet.";
      renderFeedbackAdmin();
      return;
    }

    var password = (els.feedbackAdminPassword.value || "").trim();
    if (!password) {
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = "Enter the admin password.";
      renderFeedbackAdmin();
      return;
    }

    state.feedbackAdminStatus = "syncing";
    state.feedbackAdminMessage = "Logging in...";
    renderFeedbackAdmin();

    try {
      var result = await feedback.adminLogin(password);
      state.feedbackAdminToken = result.token || "";
      safeStorage.setItem(FEEDBACK_ADMIN_TOKEN_KEY, state.feedbackAdminToken);
      els.feedbackAdminPassword.value = "";
      state.feedbackAdminStatus = "synced";
      state.feedbackAdminMessage = "Logged in.";
      await loadFeedbackItems();
    } catch (error) {
      var loginError = normalizeFeedbackAdminError(error, "Could not log in.");
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = loginError.message;
      if (loginError.expired) {
        clearFeedbackAdminToken();
      }
      renderFeedbackAdmin();
    }
  }

  function logoutFeedbackAdmin() {
    clearFeedbackAdminToken();
    state.feedbackItems = [];
    state.feedbackAdminStatus = "idle";
    state.feedbackAdminMessage = "";
    renderFeedbackAdmin();
  }

  async function loadFeedbackItems() {
    var feedback = window.STUDY_FEEDBACK;
    if (!state.feedbackAdminToken || !feedback || !feedback.adminList || !isFeedbackConfigured()) {
      return;
    }

    state.feedbackAdminLoading = true;
    state.feedbackAdminStatus = "syncing";
    state.feedbackAdminMessage = "Loading requests...";
    renderFeedbackAdmin();

    try {
      var status = els.feedbackAdminFilter ? els.feedbackAdminFilter.value : "all";
      var result = await feedback.adminList(state.feedbackAdminToken, status);
      state.feedbackItems = Array.isArray(result.items) ? result.items : [];
      state.feedbackAdminStatus = "synced";
      state.feedbackAdminMessage = state.feedbackItems.length + " request" + (state.feedbackItems.length === 1 ? "" : "s") + " loaded.";
    } catch (error) {
      var loadError = normalizeFeedbackAdminError(error, "Could not load requests.");
      state.feedbackItems = [];
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = loadError.message;
      if (loadError.expired) {
        clearFeedbackAdminToken();
      }
    }

    state.feedbackAdminLoading = false;
    renderFeedbackAdmin();
  }

  function renderFeedbackItems() {
    if (!els.feedbackAdminList) return;
    if (state.feedbackAdminLoading) {
      els.feedbackAdminList.innerHTML = "<div class=\"empty-state\">Loading requests...</div>";
      return;
    }
    if (!state.feedbackItems.length) {
      els.feedbackAdminList.innerHTML = "<div class=\"empty-state\">No requests match this filter.</div>";
      return;
    }

    els.feedbackAdminList.innerHTML = state.feedbackItems.map(renderFeedbackItem).join("");
    els.feedbackAdminList.querySelectorAll("[data-feedback-save]").forEach(function (button) {
      button.addEventListener("click", function () {
        saveFeedbackItem(button);
      });
    });
  }

  function renderFeedbackItem(item) {
    var id = item._id || item.id || "";
    var contact = item.contact ? "<div><strong>Contact</strong><span>" + escapeHtml(item.contact) + "</span></div>" : "";
    var page = item.pageUrl ? "<div><strong>Page</strong><span>" + escapeHtml(item.pageUrl) + "</span></div>" : "";
    var browser = item.userAgent ? "<details><summary>Browser</summary><p>" + escapeHtml(item.userAgent) + "</p></details>" : "";

    return [
      "<article class=\"feedback-item\" data-feedback-id=\"" + escapeHtml(id) + "\">",
      "<div class=\"feedback-item-head\">",
      "<div>",
      "<div class=\"skill-meta\"><span class=\"tag\">" + escapeHtml(item.type === "feature" ? "Feature" : "Bug") + "</span><span class=\"tag\">" + escapeHtml(statusLabel(item.status)) + "</span></div>",
      "<h3>" + escapeHtml(item.title || "Untitled request") + "</h3>",
      "<p>" + escapeHtml(formatDateTime(item.createdAt)) + "</p>",
      "</div>",
      "<label>Status<select data-feedback-status>" + feedbackStatusOptions(item.status) + "</select></label>",
      "</div>",
      "<p class=\"feedback-details\">" + escapeHtml(item.details || "") + "</p>",
      contact || page ? "<div class=\"feedback-meta-grid\">" + contact + page + "</div>" : "",
      browser,
      "<label>Admin note<textarea data-feedback-note placeholder=\"Private note for this request\">" + escapeHtml(item.adminNote || "") + "</textarea></label>",
      "<div class=\"button-row\"><button class=\"secondary\" type=\"button\" data-feedback-save>Save</button></div>",
      "</article>"
    ].join("");
  }

  function feedbackStatusOptions(selected) {
    return ["new", "reviewing", "planned", "done", "closed"].map(function (status) {
      return "<option value=\"" + status + "\"" + (status === selected ? " selected" : "") + ">" + escapeHtml(statusLabel(status)) + "</option>";
    }).join("");
  }

  async function saveFeedbackItem(button) {
    var feedback = window.STUDY_FEEDBACK;
    var itemNode = button.closest("[data-feedback-id]");
    if (!feedback || !feedback.adminUpdate || !itemNode || !state.feedbackAdminToken) return;

    var id = itemNode.getAttribute("data-feedback-id");
    var statusNode = itemNode.querySelector("[data-feedback-status]");
    var noteNode = itemNode.querySelector("[data-feedback-note]");
    button.disabled = true;
    state.feedbackAdminStatus = "syncing";
    state.feedbackAdminMessage = "Saving request...";
    renderFeedbackMessage(els.feedbackAdminStatus, state.feedbackAdminStatus, state.feedbackAdminMessage);

    try {
      await feedback.adminUpdate(state.feedbackAdminToken, id, {
        status: statusNode ? statusNode.value : "new",
        adminNote: noteNode ? noteNode.value : ""
      });
      state.feedbackAdminStatus = "synced";
      state.feedbackAdminMessage = "Request saved.";
      await loadFeedbackItems();
    } catch (error) {
      var saveError = normalizeFeedbackAdminError(error, "Could not save request.");
      state.feedbackAdminStatus = "error";
      state.feedbackAdminMessage = saveError.message;
      if (saveError.expired) {
        clearFeedbackAdminToken();
      }
      button.disabled = false;
      renderFeedbackAdmin();
    }
  }

  function currentFeedbackLocation() {
    var active = document.querySelector(".view.is-active");
    return (active && active.id ? active.id : "app") + " / " + window.location.href.split("#")[0];
  }

  function statusLabel(status) {
    var labels = {
      new: "New",
      reviewing: "Reviewing",
      planned: "Planned",
      done: "Done",
      closed: "Closed"
    };
    return labels[status] || "New";
  }

  function formatDateTime(value) {
    if (!value) return "";
    var date = typeof value === "number" ? new Date(value) : new Date(String(value));
    if (isNaN(date.getTime())) return String(value);
    return date.toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function generateShareCode() {
    var random = Math.random().toString(36).slice(2, 8);
    return "lmft-" + random;
  }

  function statCard(value, label) {
    return "<div class=\"stat-card\"><strong>" + escapeHtml(String(value)) + "</strong><span>" + escapeHtml(label) + "</span></div>";
  }

  function renderGuide() {
    var filter = els.guideFilter.value || "all";
    var query = (els.guideSearch.value || "").trim();
    var tokens = normalizeText(query).split(" ").filter(Boolean);
    var sections = DATA.studySections.filter(function (section) {
      var text = normalizeText(getGuideSearchText(section));
      var queryMatch = tokens.length === 0 || tokens.every(function (token) {
        return text.indexOf(token) !== -1;
      });
      return (filter === "all" || section.model === filter) && queryMatch;
    });
    var filterCount = DATA.studySections.filter(function (section) {
      return filter === "all" || section.model === filter;
    }).length;

    if (els.guideResults) {
      var searchText = query ? " for \"" + escapeHtml(query) + "\"" : "";
      els.guideResults.innerHTML = "<strong>" + sections.length + "</strong> of " + filterCount + " study sections" + searchText + ".";
    }

    if (sections.length === 0) {
      els.guideGrid.innerHTML = "<div class=\"empty-state\">No matching study sections.</div>";
      return;
    }

    els.guideGrid.innerHTML = sections.map(function (section) {
      var matchSnippet = tokens.length ? renderGuideMatchSnippet(section, tokens) : "";
      return [
        "<article class=\"guide-card guide-card-wide\">",
        "<div class=\"guide-card-head\">",
        "<div><h3>" + highlightText(section.title, tokens) + "</h3><div class=\"tag-row\"><span class=\"tag\">" + escapeHtml(section.model) + "</span></div></div>",
        matchSnippet,
        "</div>",
        "<div class=\"guide-body\">",
        "<div class=\"guide-column guide-main\"><h4>Core Idea</h4><p>" + highlightText(section.overview, tokens) + "</p><h4>Therapist Role</h4><p>" + highlightText(section.therapistRole, tokens) + "</p></div>",
        "<div class=\"guide-column guide-side\">" + guideListBlock("Goals", section.goals, tokens) + guideListBlock("Interventions", section.interventions, tokens) + "</div>",
        "</div>",
        "<div class=\"guide-terms\"><h4>Key Terms</h4><div class=\"term-list term-list-compact\">" + section.keyTerms.map(function (term) {
          return "<div class=\"term term-compact\"><strong>" + highlightText(term.term, tokens) + "</strong><span>" + highlightText(term.definition, tokens) + "</span></div>";
        }).join("") + "</div></div>",
        "<div class=\"guide-study-strip\"><div class=\"guide-exam-watch\"><strong>Exam watch:</strong> " + highlightText(section.examWatch, tokens) + "</div>" + renderMicroDrill(section, tokens) + "</div>",
        "</article>"
      ].join("");
    }).join("");
  }

  function guideListBlock(title, items, tokens) {
    return "<div class=\"guide-list-block\"><h4>" + escapeHtml(title) + "</h4>" + list(items, tokens) + "</div>";
  }

  function renderMicroDrill(section, tokens) {
    var firstTerm = section.keyTerms && section.keyTerms.length ? section.keyTerms[0].term : section.title;
    var prompt = section.microDrill || "Quick recall: what clue tells you this is " + section.model + " or " + firstTerm + "?";
    var answer = section.microAnswer || section.examWatch || "Use the model language, safety priority, and next-step clue from this card.";
    return [
      "<details class=\"micro-drill\">",
      "<summary>" + highlightText(prompt, tokens || []) + "</summary>",
      "<div><strong>Answer:</strong> " + highlightText(answer, tokens || []) + "</div>",
      "</details>"
    ].join("");
  }

  function renderMatch() {
    if (!els.matchCard || !els.matchScore) return;
    var profile = getProfile();
    var focus = profile.settings.matchFocus || "mixed";
    if (els.matchFocus) setSelectIfOption(els.matchFocus, focus);
    renderMatchScore();
    if (!state.match) {
      els.matchCard.innerHTML = [
        "<div class=\"match-empty\">",
        "<strong>Start with a therapy transcript.</strong>",
        "<p>You will read a short client and therapist exchange, then choose whether the work looks like Bowen, EFT, Ethics, or Systemic Roles.</p>",
        "<button type=\"button\" id=\"startMatchRound\">Start Dialogue</button>",
        "</div>"
      ].join("");
      bindMatchEvents();
      return;
    }

    var round = state.match.round;
    var selected = state.match.selected;
    var submitted = state.match.submitted;
    els.matchCard.innerHTML = [
      "<div class=\"match-head\">",
      "<div><h3>" + escapeHtml(round.title) + "</h3><p>" + escapeHtml(round.context) + "</p></div>",
      "<span class=\"tag\">" + escapeHtml(focus === "mixed" ? "Mixed" : focus) + "</span>",
      "</div>",
      "<div class=\"match-dialogue\" aria-label=\"Therapy dialogue\">",
      round.dialogue.map(function (line) {
        return "<div class=\"match-turn\"><strong>" + escapeHtml(line.speaker) + "</strong><p>" + escapeHtml(line.text) + "</p></div>";
      }).join(""),
      "</div>",
      "<div class=\"match-question\"><strong>Which model or exam priority is being shown?</strong></div>",
      "<div class=\"match-choice-grid\">",
      MATCH_OPTIONS.map(function (optionLabel) {
        var classes = ["match-choice"];
        if (submitted && optionLabel === round.answer) classes.push("is-correct");
        if (submitted && selected === optionLabel && selected !== round.answer) classes.push("is-wrong");
        if (!submitted && selected === optionLabel) classes.push("is-selected");
        return "<button class=\"" + classes.join(" ") + "\" type=\"button\" data-match-choice=\"" + escapeHtml(optionLabel) + "\"" + (submitted ? " disabled" : "") + ">" + escapeHtml(optionLabel) + "</button>";
      }).join(""),
      "</div>",
      submitted ? renderMatchFeedback(state.match) : "",
      "<div class=\"button-row\">",
      submitted ? "<button type=\"button\" id=\"nextMatchRound\">Next Dialogue</button>" : "<button class=\"secondary\" type=\"button\" id=\"skipMatchRound\">Skip</button>",
      "</div>"
    ].join("");
    bindMatchEvents();
  }

  function renderMatchFeedback(match) {
    var correct = match.selected === match.round.answer;
    return [
      "<div class=\"feedback " + (correct ? "" : "needs-work") + "\">",
      "<strong>" + (correct ? "Correct." : "Not quite.") + "</strong>",
      " This is " + escapeHtml(match.round.answer) + ". " + escapeHtml(match.round.clue),
      "</div>"
    ].join("");
  }

  function renderMatchScore() {
    if (!els.matchScore) return;
    var profile = getProfile();
    var attempts = profile.matchAttempts || [];
    var recent = attempts.slice(0, 8);
    var streak = 0;
    for (var i = 0; i < attempts.length; i += 1) {
      if (!attempts[i].correct) break;
      streak += 1;
    }
    els.matchScore.innerHTML = [
      "<div class=\"skill-score-stack\">",
      "<div><strong>" + attempts.length + "</strong><span>Total matches</span></div>",
      "<div><strong>" + streak + "</strong><span>Current streak</span></div>",
      "<div><strong>" + (recent.length ? Math.round(recent.filter(function (item) { return item.correct; }).length / recent.length * 100) + "%" : "--") + "</strong><span>Recent accuracy</span></div>",
      "</div>"
    ].join("");
  }

  function bindMatchEvents() {
    var start = document.getElementById("startMatchRound");
    if (start) start.addEventListener("click", startMatchRound);
    var next = document.getElementById("nextMatchRound");
    if (next) next.addEventListener("click", startMatchRound);
    var skip = document.getElementById("skipMatchRound");
    if (skip) skip.addEventListener("click", startMatchRound);
    if (!els.matchCard || !state.match || state.match.submitted) return;
    els.matchCard.querySelectorAll("[data-match-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        scoreMatch(button.getAttribute("data-match-choice"));
      });
    });
  }

  function startMatchRound() {
    var profile = getProfile();
    var focus = els.matchFocus ? els.matchFocus.value : (profile.settings.matchFocus || "mixed");
    profile.settings.matchFocus = focus;
    var pool = MATCH_ROUNDS.filter(function (round) {
      return focus === "mixed" || round.model === focus;
    });
    if (!pool.length) pool = MATCH_ROUNDS.slice();
    var lastId = state.match && state.match.round ? state.match.round.id : "";
    var available = pool.length > 1 ? pool.filter(function (round) { return round.id !== lastId; }) : pool;
    state.match = {
      round: available[Math.floor(Math.random() * available.length)],
      selected: "",
      submitted: false
    };
    saveProfiles();
    renderMatch();
  }

  function scoreMatch(answer) {
    var profile = getProfile();
    if (!state.match || !state.match.round || state.match.submitted) return;
    var round = state.match.round;
    var correct = answer === round.answer;
    state.match.selected = answer;
    state.match.submitted = true;
    profile.matchAttempts = Array.isArray(profile.matchAttempts) ? profile.matchAttempts : [];
    profile.matchAttempts.unshift({
      date: new Date().toISOString(),
      roundId: round.id,
      title: round.title,
      model: round.model,
      selected: answer,
      correct: correct,
      scorePercent: correct ? 100 : 0,
      missedAreas: correct ? [] : [round.answer + " clues"]
    });
    profile.matchAttempts = profile.matchAttempts.slice(0, 40);
    saveProfiles();
    renderMatch();
    renderDashboard();
    renderProgress();
  }

  function getGuideSearchText(section) {
    return [
      section.model,
      section.title,
      section.overview,
      section.therapistRole,
      section.examWatch,
      section.goals.join(" "),
      section.interventions.join(" "),
      section.keyTerms.map(function (term) { return term.term + " " + term.definition; }).join(" ")
    ].join(" ");
  }

  function renderGuideMatchSnippet(section, tokens) {
    var candidates = [
      { label: "Overview", text: section.overview },
      { label: "Therapist role", text: section.therapistRole },
      { label: "Exam watch", text: section.examWatch }
    ];
    section.goals.forEach(function (goal) {
      candidates.push({ label: "Goal", text: goal });
    });
    section.interventions.forEach(function (intervention) {
      candidates.push({ label: "Intervention", text: intervention });
    });
    section.keyTerms.forEach(function (term) {
      candidates.push({ label: "Key term", text: term.term + ": " + term.definition });
    });

    var matches = candidates.filter(function (candidate) {
      var text = normalizeText(candidate.text);
      return tokens.some(function (token) { return text.indexOf(token) !== -1; });
    }).slice(0, 2);

    if (!matches.length) return "";
    return "<div class=\"match-snippet\"><strong>Matched:</strong> " + matches.map(function (match) {
      return "<span>" + escapeHtml(match.label) + ": " + highlightText(match.text, tokens) + "</span>";
    }).join("") + "</div>";
  }

  function list(items, tokens) {
    return "<ul>" + items.map(function (item) { return "<li>" + highlightText(item, tokens || []) + "</li>"; }).join("") + "</ul>";
  }

  function normalizeText(value) {
    return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }

  function highlightText(value, tokens) {
    var escaped = escapeHtml(value);
    var cleanTokens = unique((tokens || []).filter(function (token) { return token.length > 1; }));
    cleanTokens.forEach(function (token) {
      var escapedToken = escapeRegExp(token);
      escaped = escaped.replace(new RegExp("(" + escapedToken + ")", "gi"), "<mark>$1</mark>");
    });
    return escaped;
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function renderQuizPlaceholder() {
    var profile = getProfile();
    if (profile && profile.settings) {
      if (els.quizMode) setSelectIfOption(els.quizMode, profile.settings.quizMode || "practice");
      els.quizDifficulty.value = profile.settings.quizDifficulty || "mixed";
      els.quizCount.value = String(profile.settings.quizCount || 10);
    }
    if (state.quiz) {
      renderQuiz();
      return;
    }
    renderQuizAvailability();
    els.quizCard.innerHTML = "<div class=\"empty-state\">Choose settings and start an exam-recall set.</div>";
  }

  function getQuizMode() {
    return els.quizMode ? els.quizMode.value : "practice";
  }

  function getQuizPool() {
    var mode = getQuizMode();
    var difficulty = els.quizDifficulty.value;
    var topic = els.quizTopic.value;
    return DATA.questions.filter(function (question) {
      var difficultyMatch = difficulty === "mixed" || question.difficulty === difficulty;
      var topicMatch = mode === "timed" || mode === "review" || topic === "all" || question.model === topic;
      return difficultyMatch && topicMatch;
    });
  }

  function getRequestedQuizCount(poolLength) {
    if (els.quizCount.value === "all") {
      return poolLength;
    }

    var requested = Number(els.quizCount.value);
    return Number.isFinite(requested) && requested > 0 ? requested : 10;
  }

  function renderQuizAvailability() {
    if (state.quiz) return;
    var profile = getProfile();
    var mode = getQuizMode();
    var pool = mode === "review" ? getDueReviewQuestions(profile) : getQuizPool();
    var requested = getRequestedQuizCount(pool.length);
    var message = "";
    if (mode === "review") {
      message = pool.length
        ? Math.min(requested, pool.length) + " due exam-recall question" + (Math.min(requested, pool.length) === 1 ? "" : "s") + " will be used."
        : "No exam-recall questions are due. Start a mixed set to create review items.";
    } else if (mode === "timed") {
      message = "Timed mixed mode interleaves topics and saves explanations until the end.";
    } else {
      message = els.quizCount.value === "all"
        ? pool.length + " matching questions will be used."
        : pool.length >= requested
          ? requested + " of " + pool.length + " matching questions will be used."
          : "Only " + pool.length + " matching questions are available for this filter.";
    }
    els.quizStatus.innerHTML = "<div class=\"quiz-availability\">" + escapeHtml(message) + "</div>";
  }

  function startQuiz() {
    var profile = getProfile();
    var mode = getQuizMode();
    var difficulty = els.quizDifficulty.value;
    var pool = mode === "review" ? getDueReviewQuestions(profile) : getQuizPool();
    var count = getRequestedQuizCount(pool.length);

    clearQuizTimer();
    if (mode === "review" && pool.length === 0) {
      pool = getQuizPool();
      mode = "practice";
      if (els.quizMode) els.quizMode.value = "practice";
    }
    pool = pickQuizQuestions(pool, count, mode).map(prepareQuizQuestion);
    profile.settings.quizMode = mode;
    profile.settings.quizDifficulty = difficulty;
    profile.settings.quizCount = els.quizCount.value;
    saveProfiles();

    var timed = mode === "timed";
    state.quiz = {
      mode: mode,
      isTimed: timed,
      timeLimitSeconds: timed ? Math.max(300, pool.length * 80) : 0,
      endsAt: timed ? Date.now() + Math.max(300, pool.length * 80) * 1000 : 0,
      deferFeedback: timed,
      timerId: null,
      questions: pool,
      index: 0,
      answers: [],
      selectedIndex: null,
      submitted: false,
      hintShown: false,
      justifications: {},
      startedAt: new Date().toISOString()
    };
    if (timed) {
      state.quiz.timerId = window.setInterval(updateQuizTimer, 1000);
    }
    renderQuiz();
  }

  function pickQuizQuestions(pool, count, mode) {
    var limit = Math.min(count, pool.length);
    if (mode === "timed" || mode === "review" || els.quizTopic.value === "all") {
      return interleaveQuestions(pool).slice(0, limit);
    }
    return shuffle(pool).slice(0, limit);
  }

  function interleaveQuestions(pool) {
    var grouped = {};
    shuffle(pool).forEach(function (question) {
      var key = question.model || "Other";
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(question);
    });
    var keys = Object.keys(grouped).sort();
    var ordered = [];
    while (keys.some(function (key) { return grouped[key].length > 0; })) {
      keys.forEach(function (key) {
        if (grouped[key].length) ordered.push(grouped[key].shift());
      });
    }
    return ordered;
  }

  function prepareQuizQuestion(question) {
    var order = shuffle(question.choices.map(function (_, index) { return index; }));
    var shuffledChoices = order.map(function (originalIndex) {
      return question.choices[originalIndex];
    });
    var shuffledWrong = order.map(function (originalIndex) {
      return question.wrongExplanations[originalIndex] || "";
    });
    return {
      id: question.id,
      model: question.model,
      domain: question.domain || domainForQuestion(question),
      topic: question.topic,
      difficulty: question.difficulty,
      prompt: question.prompt,
      hint: question.hint,
      explanation: question.explanation,
      choices: shuffledChoices,
      wrongExplanations: shuffledWrong,
      answerIndex: order.indexOf(question.answerIndex)
    };
  }

  function renderQuiz() {
    var quiz = state.quiz;
    if (!quiz || quiz.questions.length === 0) {
      clearQuizTimer();
      els.quizStatus.innerHTML = "";
      els.quizCard.innerHTML = "<div class=\"empty-state\">No questions match those settings.</div>";
      return;
    }

    if (quiz.index >= quiz.questions.length) {
      finishQuiz();
      return;
    }

    var question = quiz.questions[quiz.index];
    var progress = Math.round((quiz.index / quiz.questions.length) * 100);
    els.quizStatus.innerHTML = [
      "<div class=\"progress-bar\" aria-label=\"Quiz progress\"><span style=\"width:" + progress + "%\"></span></div>",
      "<p>" + (quiz.index + 1) + " of " + quiz.questions.length + (quiz.isTimed ? " <span class=\"quiz-timer\" id=\"quizTimer\">" + escapeHtml(formatRemainingTime(quiz)) + "</span>" : "") + "</p>"
    ].join("");

    var choices = question.choices.map(function (choice, index) {
      var classNames = ["choice"];
      if (quiz.selectedIndex === index) classNames.push("is-selected");
      if (!quiz.deferFeedback && quiz.submitted && index === question.answerIndex) classNames.push("is-correct");
      if (!quiz.deferFeedback && quiz.submitted && quiz.selectedIndex === index && index !== question.answerIndex) classNames.push("is-wrong");
      return "<label class=\"" + classNames.join(" ") + "\"><input type=\"radio\" name=\"quizChoice\" value=\"" + index + "\"" + (quiz.selectedIndex === index ? " checked" : "") + (!quiz.deferFeedback && quiz.submitted ? " disabled" : "") + "><span>" + escapeHtml(choice) + "</span></label>";
    }).join("");

    var feedback = "";
    if (quiz.hintShown && !quiz.submitted) {
      feedback = "<div class=\"feedback\"><strong>Clue:</strong> " + escapeHtml(question.hint) + "</div>";
    }
    if (!quiz.deferFeedback && quiz.submitted) {
      var answer = getQuizAnswer(quiz, question.id);
      feedback = renderQuizFeedback(answer, question, true);
    }

    var needsJustification = false;
    if (!quiz.deferFeedback && quiz.submitted) {
      var currentAnswer = getQuizAnswer(quiz, question.id);
      needsJustification = currentAnswer && !currentAnswer.correct && !(quiz.justifications[question.id] || "").trim();
    }

    els.quizCard.innerHTML = [
      "<div class=\"question-meta\"><span class=\"tag\">" + escapeHtml(question.model) + "</span><span class=\"tag\">" + escapeHtml(question.domain) + "</span><span class=\"tag\">" + escapeHtml(question.topic) + "</span><span class=\"tag\">" + escapeHtml(question.difficulty) + "</span></div>",
      "<h3>" + escapeHtml(question.prompt) + "</h3>",
      quiz.deferFeedback ? "<div class=\"feedback\"><strong>Timed mode:</strong> choose the best answer. Explanations unlock after the set.</div>" : "",
      "<div class=\"choice-list\">" + choices + "</div>",
      feedback,
      "<div class=\"button-row\">",
      quiz.deferFeedback ? "<button type=\"button\" id=\"quizTimedNext\">" + (quiz.index === quiz.questions.length - 1 ? "Finish" : "Save & Next") + "</button>" : "",
      !quiz.deferFeedback && !quiz.submitted ? "<button type=\"button\" id=\"quizSubmit\">Submit</button>" : "",
      !quiz.deferFeedback && quiz.submitted ? "<button type=\"button\" id=\"quizNext\"" + (needsJustification ? " disabled" : "") + ">" + (quiz.index === quiz.questions.length - 1 ? "Finish" : "Next") + "</button>" : "",
      !quiz.deferFeedback && !quiz.submitted && !quiz.hintShown ? "<button class=\"secondary\" type=\"button\" id=\"quizHint\">Hint</button>" : "",
      "<button class=\"secondary\" type=\"button\" id=\"quizRestart\">Restart</button>",
      "</div>"
    ].join("");

    els.quizCard.querySelectorAll("input[name=\"quizChoice\"]").forEach(function (input) {
      input.addEventListener("change", function () {
        quiz.selectedIndex = Number(input.value);
        renderQuiz();
      });
    });

    var justification = document.getElementById("missJustification");
    if (justification) {
      justification.addEventListener("input", function () {
        quiz.justifications[question.id] = justification.value;
        var answer = getQuizAnswer(quiz, question.id);
        if (answer) answer.justification = justification.value;
        var nextButton = document.getElementById("quizNext");
        if (nextButton) nextButton.disabled = justification.value.trim().length < 8;
      });
    }

    var submit = document.getElementById("quizSubmit");
    if (submit) {
      submit.addEventListener("click", function () {
        if (quiz.selectedIndex === null) return;
        quiz.submitted = true;
        recordQuizAnswer(quiz, question, quiz.selectedIndex);
        renderQuiz();
      });
    }

    var timedNext = document.getElementById("quizTimedNext");
    if (timedNext) {
      timedNext.addEventListener("click", function () {
        if (quiz.selectedIndex === null) return;
        recordQuizAnswer(quiz, question, quiz.selectedIndex);
        moveToNextQuestion(quiz);
      });
    }

    var hint = document.getElementById("quizHint");
    if (hint) {
      hint.addEventListener("click", function () {
        quiz.hintShown = true;
        renderQuiz();
      });
    }

    var next = document.getElementById("quizNext");
    if (next) {
      next.addEventListener("click", function () {
        var answer = getQuizAnswer(quiz, question.id);
        if (answer && !answer.correct && !(answer.justification || "").trim()) return;
        moveToNextQuestion(quiz);
      });
    }

    var restart = document.getElementById("quizRestart");
    if (restart) {
      restart.addEventListener("click", startQuiz);
    }
    updateQuizTimer();
  }

  function recordQuizAnswer(quiz, question, selectedIndex) {
    var answer = {
      questionId: question.id,
      model: question.model,
      domain: question.domain,
      topic: question.topic,
      difficulty: question.difficulty,
      prompt: question.prompt,
      correct: selectedIndex === question.answerIndex,
      selectedIndex: selectedIndex,
      selectedChoice: question.choices[selectedIndex],
      correctChoice: question.choices[question.answerIndex],
      clue: question.hint,
      whyBest: question.explanation,
      whyTempting: selectedIndex === question.answerIndex ? "" : question.wrongExplanations[selectedIndex] || "This answer sounds plausible, but it misses the main stem clue.",
      wrongNotes: buildWrongAnswerNotes(question),
      hintUsed: !!quiz.hintShown,
      justification: quiz.justifications[question.id] || "",
      answeredAt: new Date().toISOString()
    };
    quiz.answers.push(answer);
    return answer;
  }

  function getQuizAnswer(quiz, questionId) {
    return quiz.answers.find(function (answer) { return answer.questionId === questionId; });
  }

  function moveToNextQuestion(quiz) {
    quiz.index += 1;
    quiz.selectedIndex = null;
    quiz.submitted = false;
    quiz.hintShown = false;
    renderQuiz();
  }

  function buildWrongAnswerNotes(question) {
    return question.choices.map(function (choice, index) {
      if (index === question.answerIndex) return null;
      return {
        choice: choice,
        note: question.wrongExplanations[index] || "This choice is less precise than the model, safety, or next-step clue."
      };
    }).filter(Boolean);
  }

  function renderQuizFeedback(answer, question, includeJustification) {
    if (!answer) return "";
    var status = answer.correct ? "Correct." : "Not quite.";
    var wrongNotes = answer.wrongNotes && answer.wrongNotes.length
      ? "<details class=\"distractor-notes\"><summary>Wrong-answer notes</summary><ul>" + answer.wrongNotes.map(function (item) {
        return "<li><strong>" + escapeHtml(item.choice) + ":</strong> " + escapeHtml(item.note) + "</li>";
      }).join("") + "</ul></details>"
      : "";
    var justification = includeJustification && !answer.correct ? [
      "<label class=\"justification-label\" for=\"missJustification\">What clue did you miss?</label>",
      "<textarea class=\"justification-box\" id=\"missJustification\" placeholder=\"Name the stem clue and why this is not " + escapeHtml(answer.model) + ", EFT, Bowen, or ethics-first as appropriate.\">" + escapeHtml(answer.justification || "") + "</textarea>",
      "<div class=\"fine-print-left\">Write at least a short sentence before moving on.</div>"
    ].join("") : "";

    return [
      "<div class=\"feedback " + (answer.correct ? "good" : "needs-work") + "\">",
      "<strong>" + status + "</strong>",
      "<div class=\"explanation-grid\">",
      "<div><span>Why the best answer wins</span><p>" + escapeHtml(answer.whyBest) + "</p></div>",
      "<div><span>Clue in the question</span><p>" + escapeHtml(answer.clue || question.hint || "Look for the model, risk, consent, and next-step signal in the stem.") + "</p></div>",
      "<div><span>Your answer</span><p>" + escapeHtml(answer.selectedChoice || "No selection") + "</p></div>",
      "<div><span>Review next</span><p>" + escapeHtml(reviewNextText(answer)) + "</p></div>",
      "</div>",
      answer.correct ? "" : "<p><strong>Why your choice was tempting:</strong> " + escapeHtml(answer.whyTempting) + "</p>",
      wrongNotes,
      justification,
      "</div>"
    ].join("");
  }

  function finishQuiz() {
    var profile = getProfile();
    var quiz = state.quiz;
    clearQuizTimer();
    completeUnansweredQuestions(quiz);
    var correct = quiz.answers.filter(function (answer) { return answer.correct; }).length;
    var total = quiz.questions.length;
    var percent = Math.round((correct / total) * 100);
    var missed = quiz.answers.filter(function (answer) { return !answer.correct; });
    var shaky = quiz.answers.filter(function (answer) { return answer.correct && answer.hintUsed; });

    quiz.answers.forEach(function (answer) {
      if (quiz.mode === "review" || !answer.correct || answer.hintUsed) {
        updateReviewFromQuizAnswer(profile, answer);
      }
    });

    profile.quizAttempts.unshift({
      date: new Date().toISOString(),
      mode: quiz.mode,
      timed: quiz.isTimed,
      scorePercent: percent,
      correct: correct,
      total: total,
      answers: quiz.answers,
      missed: missed,
      shaky: shaky
    });
    profile.quizAttempts = profile.quizAttempts.slice(0, 40);
    saveProfiles();

    els.quizStatus.innerHTML = "<div class=\"progress-bar\" aria-label=\"Quiz progress\"><span style=\"width:100%\"></span></div>";
    els.quizCard.innerHTML = [
      "<h3>" + (quiz.isTimed ? "Timed Mixed Review" : "Questionnaire Complete") + "</h3>",
      "<p>You scored <strong>" + percent + "%</strong> (" + correct + " of " + total + ").</p>",
      shaky.length ? "<div class=\"feedback\"><strong>Shaky correct:</strong> " + shaky.length + " hinted item" + (shaky.length === 1 ? "" : "s") + " were added to spaced review.</div>" : "",
      missed.length ? "<div class=\"feedback needs-work\"><strong>Review:</strong> " + escapeHtml(unique(missed.map(function (item) { return item.topic; })).join(", ")) + "</div>" : "<div class=\"feedback good\"><strong>Clean pass.</strong> No missed topics in this set.</div>",
      missed.length ? "<div class=\"review-list\">" + missed.map(function (answer) { return renderQuizFeedback(answer, answer, false); }).join("") + "</div>" : "",
      "<div class=\"button-row\"><button type=\"button\" id=\"quizAgain\">New Set</button><button class=\"secondary\" type=\"button\" data-jump-view=\"progress\">Progress</button></div>"
    ].join("");
    state.quiz = null;
    renderDashboard();
    renderProgress();

    document.getElementById("quizAgain").addEventListener("click", startQuiz);
    els.quizCard.querySelector("[data-jump-view]").addEventListener("click", function () {
      showView("progress");
    });
  }

  function completeUnansweredQuestions(quiz) {
    if (!quiz || !quiz.isTimed) return;
    quiz.questions.forEach(function (question) {
      if (getQuizAnswer(quiz, question.id)) return;
      quiz.answers.push({
        questionId: question.id,
        model: question.model,
        domain: question.domain,
        topic: question.topic,
        difficulty: question.difficulty,
        prompt: question.prompt,
        correct: false,
        selectedIndex: null,
        selectedChoice: "No answer",
        correctChoice: question.choices[question.answerIndex],
        clue: question.hint,
        whyBest: question.explanation,
        whyTempting: "No answer was saved before time expired.",
        wrongNotes: buildWrongAnswerNotes(question),
        hintUsed: false,
        justification: "",
        answeredAt: new Date().toISOString()
      });
    });
  }

  function clearQuizTimer() {
    if (state.quiz && state.quiz.timerId) {
      window.clearInterval(state.quiz.timerId);
      state.quiz.timerId = null;
    }
  }

  function updateQuizTimer() {
    var quiz = state.quiz;
    if (!quiz || !quiz.isTimed) return;
    var timer = document.getElementById("quizTimer");
    if (timer) timer.textContent = formatRemainingTime(quiz);
    if (quiz.endsAt && quiz.endsAt <= Date.now()) {
      finishQuiz();
    }
  }

  function formatRemainingTime(quiz) {
    var remaining = Math.max(0, Math.ceil((quiz.endsAt - Date.now()) / 1000));
    var minutes = Math.floor(remaining / 60);
    var seconds = remaining % 60;
    return minutes + ":" + String(seconds).padStart(2, "0");
  }

  function reviewNextText(answer) {
    var topic = answer.topic || "this concept";
    var model = answer.model || "the relevant model";
    if (answer.domain) {
      return answer.domain + ": review " + model + " / " + topic + ", then answer a similar item from spaced review.";
    }
    return "Review " + model + " / " + topic + ", then answer a similar item from spaced review.";
  }

  function domainForQuestion(question) {
    if (question.domain) return question.domain;
    if (question.model === "Ethics") return "Ethics / legal standards";
    if (question.model === "Systemic Roles") return "Assessment and treatment process";
    if (question.topic && /risk|crisis|safety|mandated|abuse/i.test(question.topic)) return "Crisis and risk";
    return "Systemic therapy models";
  }

  function renderScenarioPlaceholder() {
    var profile = getProfile();
    if (profile && profile.settings) {
      els.scenarioDifficulty.value = profile.settings.scenarioDifficulty || "mixed";
      els.scenarioMode.value = profile.settings.scenarioMode || "combined";
    }
    if (state.scenario) {
      renderScenario();
      return;
    }
    els.scenarioCard.innerHTML = "<div class=\"empty-state\">Choose settings and load a random case.</div>";
    els.scenarioScore.innerHTML = "<div class=\"empty-state\">No case scored yet.</div>";
  }

  function getScenarioPool() {
    var difficulty = els.scenarioDifficulty.value;
    if (els.scenarioMode.value === "saynext") {
      return WHAT_TO_SAY_NEXT_CASES.filter(function (scenario) {
        return difficulty === "mixed" || scenario.difficulty === difficulty;
      });
    }
    var errorMode = els.scenarioMode.value === "error";
    return DATA.scenarios.filter(function (scenario) {
      var difficultyMatch = difficulty === "mixed" || scenario.difficulty === difficulty;
      var typeMatch = errorMode ? !!scenario.errorCase : !scenario.errorCase;
      return difficultyMatch && typeMatch;
    });
  }

  function renderScenarioLibrary() {
    var pool = getScenarioPool();
    var selected = els.scenarioCase.value || "random";
    var isSayNext = els.scenarioMode.value === "saynext";
    var libraryLabel = isSayNext ? "What To Say Next sessions" : "real life examples";
    var randomLabel = isSayNext ? "Random session" : "Random case";
    els.scenarioCase.innerHTML = "<option value=\"random\">" + randomLabel + "</option>" + pool.map(function (scenario) {
      return "<option value=\"" + escapeHtml(scenario.id) + "\">" + escapeHtml(scenario.title) + "</option>";
    }).join("");
    els.scenarioCase.value = pool.some(function (scenario) { return scenario.id === selected; }) ? selected : "random";

    if (!pool.length) {
      els.scenarioLibrary.innerHTML = "<div class=\"empty-state\">No cases match this difficulty.</div>";
      return;
    }

    els.scenarioLibrary.innerHTML = [
      "<div class=\"case-library-head\"><strong>" + pool.length + " " + libraryLabel + " available</strong><span>Pick one directly or use " + randomLabel + ".</span></div>",
      "<div class=\"case-library-grid\">",
      pool.map(function (scenario) {
        var focus = scenario.focus ? scenario.focus.join(", ") : scenario.clientType;
        return [
          "<button class=\"case-tile\" type=\"button\" data-scenario-id=\"" + escapeHtml(scenario.id) + "\">",
          "<span>" + escapeHtml(scenario.difficulty) + " / " + escapeHtml(scenario.clientType) + "</span>",
          "<strong>" + escapeHtml(scenario.title) + "</strong>",
          "<em>" + escapeHtml(focus) + "</em>",
          "</button>"
        ].join("");
      }).join(""),
      "</div>"
    ].join("");

    els.scenarioLibrary.querySelectorAll("[data-scenario-id]").forEach(function (button) {
      button.addEventListener("click", function () {
        startScenario(button.getAttribute("data-scenario-id"));
      });
    });
  }

  function startScenario(scenarioId) {
    var profile = getProfile();
    var mode = els.scenarioMode.value;
    var pool = getScenarioPool();
    var selectedId = scenarioId || els.scenarioCase.value;
    var scenario = selectedId && selectedId !== "random"
      ? pool.find(function (item) { return item.id === selectedId; })
      : null;

    if (!scenario && pool.length > 1 && state.lastScenarioId) {
      pool = pool.filter(function (scenario) { return scenario.id !== state.lastScenarioId; });
    }
    if (!scenario) {
      scenario = shuffle(pool)[0];
    }

    profile.settings.scenarioDifficulty = els.scenarioDifficulty.value;
    profile.settings.scenarioMode = mode;
    saveProfiles();
    if (scenario) {
      els.scenarioCase.value = scenario.id;
    }

    state.scenario = {
      item: scenario,
      mode: mode,
      choiceOrders: scenario ? buildScenarioChoiceOrders(scenario) : {},
      selections: {},
      sayNext: mode === "saynext" ? { turnIndex: 0, answers: [], pending: null } : null,
      reflection: "",
      scored: false,
      result: null,
      feedbackGuide: null,
      startedAt: new Date().toISOString()
    };
    state.lastScenarioId = scenario ? scenario.id : "";
    renderScenario();
  }

  function buildScenarioChoiceOrders(scenario) {
    var orders = {};
    if (!scenario || !scenario.choices) return orders;
    Object.keys(scenario.choices).forEach(function (category) {
      orders[category] = shuffle(scenario.choices[category].map(function (_, index) { return index; }));
    });
    return orders;
  }

  function renderCaseDetails(scenario) {
    var blocks = [];
    var intakeNotes = Array.isArray(scenario.intakeNotes) && scenario.intakeNotes.length ? scenario.intakeNotes : [
      scenario.presentingProblem,
      "Use the case details to identify the main relational pattern.",
      "Check safety, consent, alliance, and scope before choosing a technique."
    ];
    var clinicalQuestion = scenario.clinicalQuestion || "What is the best next clinical move for this client system?";
    var redFlags = Array.isArray(scenario.redFlags) && scenario.redFlags.length ? scenario.redFlags : [
      "Do not skip risk, consent, or confidentiality concerns.",
      "Avoid blaming one person for a systemic pattern."
    ];

    if (intakeNotes.length) {
      blocks.push("<div class=\"case-detail\"><strong>What you know</strong>" + list(intakeNotes) + "</div>");
    }
    if (clinicalQuestion) {
      blocks.push("<div class=\"case-detail\"><strong>Your clinical question</strong><p>" + escapeHtml(clinicalQuestion) + "</p></div>");
    }
    if (redFlags.length) {
      blocks.push("<div class=\"case-detail alert\"><strong>Risk scan</strong>" + list(redFlags) + "</div>");
    }
    return blocks.length ? "<div class=\"case-detail-grid\">" + blocks.join("") + "</div>" : "";
  }

  function renderReflectionCoach(scenario) {
    var prompts = scenario.reflectionPrompts || [
      "What is the main systemic pattern?",
      "What should happen before any model-specific intervention?",
      "What would you do next in session?"
    ];
    return "<div class=\"reflection-coach\"><strong>Write toward these points</strong>" + list(prompts) + "</div>";
  }

  function renderScenario() {
    var session = state.scenario;
    if (!session || !session.item) {
      els.scenarioCard.innerHTML = "<div class=\"empty-state\">No scenarios match those settings.</div>";
      els.scenarioScore.innerHTML = "<div class=\"empty-state\">No case scored yet.</div>";
      return;
    }
    var scenario = session.item;
    if (session.mode === "saynext") {
      renderWhatToSayNextScenario(session, scenario);
      return;
    }
    if (scenario.errorCase || session.mode === "error") {
      renderErrorScenario(session, scenario);
      return;
    }
    var showGuided = session.mode === "guided" || session.mode === "combined";
    var showWritten = session.mode === "written" || session.mode === "combined";

    var caseDetailsHtml = renderCaseDetails(scenario);
    var guidedHtml = showGuided ? Object.keys(scenario.choices).map(function (category) {
      var label = labelForCategory(category);
      var order = session.choiceOrders[category] || scenario.choices[category].map(function (_, index) { return index; });
      var choices = order.map(function (originalIndex) {
        var choice = scenario.choices[category][originalIndex];
        var selected = session.selections[category] === originalIndex;
        var classNames = ["choice"];
        if (selected) classNames.push("is-selected");
        if (session.scored && scenario.idealSelections[category] === originalIndex) classNames.push("is-correct");
        if (session.scored && selected && scenario.idealSelections[category] !== originalIndex) classNames.push("is-wrong");
        return "<label class=\"" + classNames.join(" ") + "\"><input type=\"radio\" name=\"scenario-" + escapeHtml(category) + "\" value=\"" + originalIndex + "\"" + (selected ? " checked" : "") + (session.scored ? " disabled" : "") + "><span>" + escapeHtml(choice) + "</span></label>";
      }).join("");
      return "<fieldset class=\"scenario-group\"><legend>" + escapeHtml(label) + "</legend><div class=\"choice-list\">" + choices + "</div></fieldset>";
    }).join("") : "";

    var writtenHtml = showWritten ? [
      renderReflectionCoach(scenario),
      "<label for=\"reflectionText\">Written Reflection</label>",
      "<textarea id=\"reflectionText\" placeholder=\"Write your conceptualization, next step, and intervention plan.\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.reflection) + "</textarea>"
    ].join("") : "";

    els.scenarioCard.innerHTML = [
      "<div class=\"case-meta\"><span class=\"tag\">" + escapeHtml(scenario.clientType) + "</span><span class=\"tag\">" + escapeHtml(scenario.difficulty) + "</span>" + (scenario.focus ? scenario.focus.map(function (item) { return "<span class=\"tag\">" + escapeHtml(item) + "</span>"; }).join("") : "") + "</div>",
      "<h3>" + escapeHtml(scenario.title) + "</h3>",
      "<p><strong>Presenting problem:</strong> " + escapeHtml(scenario.presentingProblem) + "</p>",
      "<p>" + escapeHtml(scenario.prompt) + "</p>",
      caseDetailsHtml,
      !session.scored && session.feedbackGuide ? renderScenarioRedoGuide(session.feedbackGuide) : "",
      guidedHtml,
      writtenHtml,
      session.scored ? scenarioFeedback(session.result, scenario) : "",
      "<div class=\"button-row\">",
      session.scored ? "<button type=\"button\" id=\"redoScenario\">Redo With Feedback</button><button type=\"button\" id=\"newScenario\">New Random Case</button>" : "<button type=\"button\" id=\"scoreScenario\">Score Case</button>",
      session.scored ? "" : "<button class=\"secondary\" type=\"button\" id=\"scenarioReset\">Reset Case</button>",
      "</div>"
    ].join("");

    if (showGuided && !session.scored) {
      Object.keys(scenario.choices).forEach(function (category) {
        els.scenarioCard.querySelectorAll("input[name=\"scenario-" + category + "\"]").forEach(function (input) {
          input.addEventListener("change", function () {
            session.selections[category] = Number(input.value);
            renderScenario();
          });
        });
      });
    }

    var reflection = document.getElementById("reflectionText");
    if (reflection && !session.scored) {
      reflection.addEventListener("input", function () {
        session.reflection = reflection.value;
      });
    }

    var score = document.getElementById("scoreScenario");
    if (score) {
      score.addEventListener("click", scoreScenario);
    }

    var reset = document.getElementById("scenarioReset");
    if (reset) {
      reset.addEventListener("click", function () {
        startScenario();
      });
    }

    var next = document.getElementById("newScenario");
    if (next) {
      next.addEventListener("click", startScenario);
    }

    var redo = document.getElementById("redoScenario");
    if (redo) {
      redo.addEventListener("click", redoScenarioWithFeedback);
    }

    renderScenarioScore();
  }

  function renderWhatToSayNextScenario(session, scenario) {
    var run = session.sayNext || { turnIndex: 0, answers: [], pending: null };
    session.sayNext = run;
    var turns = scenario.turns || [];
    var complete = run.turnIndex >= turns.length && !run.pending;
    var transcript = renderWhatToSayTranscript(scenario, run);
    var activeTurn = !complete ? turns[run.turnIndex] : null;
    var choicesHtml = activeTurn && !run.pending ? [
      "<div class=\"what-next-question\"><strong>What would you say next?</strong></div>",
      "<div class=\"what-next-choice-grid\">",
      activeTurn.choices.map(function (choice, index) {
        return "<button class=\"what-next-choice\" type=\"button\" data-what-next-choice=\"" + index + "\">" + escapeHtml(choice.text) + "</button>";
      }).join(""),
      "</div>"
    ].join("") : "";
    var pendingHtml = run.pending ? [
      "<div class=\"feedback " + (run.pending.score >= 80 ? "good" : "needs-work") + "\">",
      "<strong>" + (run.pending.score >= 80 ? "Good move." : "Coaching note.") + "</strong> " + escapeHtml(run.pending.feedback),
      "</div>",
      "<div class=\"button-row\"><button type=\"button\" id=\"continueWhatNext\">" + (run.turnIndex + 1 >= turns.length ? "Write Summary" : "Continue Session") + "</button></div>"
    ].join("") : "";
    var summaryHtml = complete ? [
      "<div class=\"scenario-group what-next-summary\">",
      "<h3>Brief Summary</h3>",
      "<p>Explain why you chose the responses you chose. Name the model lens, the client pattern, and the clinical priorities you were protecting.</p>",
      "<label for=\"whatNextSummary\">Your summary</label>",
      "<textarea id=\"whatNextSummary\" placeholder=\"I chose these responses because...\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.reflection || "") + "</textarea>",
      "</div>",
      session.scored ? whatNextFeedback(session.result, scenario) : "",
      "<div class=\"button-row\">",
      session.scored ? "<button type=\"button\" id=\"newScenario\">New Random Case</button>" : "<button type=\"button\" id=\"scoreWhatNext\">Grade Session</button>",
      !session.scored ? "<button class=\"secondary\" type=\"button\" id=\"scenarioReset\">Restart Session</button>" : "",
      "</div>"
    ].join("") : "";

    els.scenarioCard.innerHTML = [
      "<div class=\"case-meta\"><span class=\"tag\">What To Say Next</span><span class=\"tag\">" + escapeHtml(scenario.difficulty) + "</span>" + (scenario.focus ? scenario.focus.map(function (item) { return "<span class=\"tag\">" + escapeHtml(item) + "</span>"; }).join("") : "") + "</div>",
      "<h3>" + escapeHtml(scenario.title) + "</h3>",
      "<p><strong>Presenting problem:</strong> " + escapeHtml(scenario.presentingProblem) + "</p>",
      "<p>" + escapeHtml(scenario.prompt) + "</p>",
      "<div class=\"progress-bar what-next-progress\" aria-label=\"What To Say Next progress\"><span style=\"width:" + Math.round((run.turnIndex / Math.max(1, turns.length)) * 100) + "%\"></span></div>",
      transcript,
      choicesHtml,
      pendingHtml,
      summaryHtml
    ].join("");

    els.scenarioCard.querySelectorAll("[data-what-next-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        chooseWhatToSayNext(Number(button.getAttribute("data-what-next-choice")));
      });
    });
    var continueButton = document.getElementById("continueWhatNext");
    if (continueButton) continueButton.addEventListener("click", continueWhatToSayNext);
    var summary = document.getElementById("whatNextSummary");
    if (summary && !session.scored) {
      summary.addEventListener("input", function () {
        session.reflection = summary.value;
      });
    }
    var score = document.getElementById("scoreWhatNext");
    if (score) score.addEventListener("click", scoreWhatToSayNext);
    var reset = document.getElementById("scenarioReset");
    if (reset) reset.addEventListener("click", function () { startScenario(scenario.id); });
    var next = document.getElementById("newScenario");
    if (next) next.addEventListener("click", startScenario);
    renderScenarioScore();
  }

  function renderWhatToSayTranscript(scenario, run) {
    var rows = [];
    run.answers.forEach(function (answer) {
      var turn = scenario.turns[answer.turnIndex];
      rows.push({ speaker: "Client", text: turn.client });
      rows.push({ speaker: "Therapist", text: answer.response });
      if (answer.followup) rows.push({ speaker: "Client", text: answer.followup });
    });
    if (!run.pending && run.turnIndex < scenario.turns.length) {
      rows.push({ speaker: "Client", text: scenario.turns[run.turnIndex].client });
    }
    return "<div class=\"what-next-transcript\">" + rows.map(function (row) {
      return "<div class=\"match-turn\"><strong>" + escapeHtml(row.speaker) + "</strong><p>" + escapeHtml(row.text) + "</p></div>";
    }).join("") + "</div>";
  }

  function chooseWhatToSayNext(index) {
    var session = state.scenario;
    if (!session || !session.sayNext || session.sayNext.pending || session.scored) return;
    var turn = session.item.turns[session.sayNext.turnIndex];
    var choice = turn.choices[index];
    if (!choice) return;
    var answer = {
      turnIndex: session.sayNext.turnIndex,
      selectedIndex: index,
      score: choice.score || 0,
      topic: turn.topic || "Therapist response",
      response: choice.text,
      feedback: choice.feedback || "",
      followup: choice.followup || ""
    };
    session.sayNext.answers.push(answer);
    session.sayNext.pending = answer;
    renderScenario();
  }

  function continueWhatToSayNext() {
    var session = state.scenario;
    if (!session || !session.sayNext || !session.sayNext.pending) return;
    session.sayNext.turnIndex += 1;
    session.sayNext.pending = null;
    renderScenario();
  }

  function scoreWhatToSayNext() {
    var profile = getProfile();
    var session = state.scenario;
    var scenario = session.item;
    var answers = session.sayNext ? session.sayNext.answers : [];
    var choicePercent = answers.length ? Math.round(answers.reduce(function (sum, answer) {
      return sum + answer.score;
    }, 0) / answers.length) : 0;
    var written = scoreWritten(session.reflection, { checklist: scenario.summaryChecklist || [] });
    var percent = Math.round(choicePercent * 0.65 + written.percent * 0.35);
    var missedAreas = [];
    answers.forEach(function (answer) {
      if (answer.score < 80) missedAreas.push(answer.topic);
    });
    written.hits.filter(function (hit) { return !hit.matched; }).forEach(function (hit) {
      missedAreas.push(hit.label);
    });

    session.scored = true;
    session.result = {
      scorePercent: percent,
      choicePercent: choicePercent,
      written: written,
      missedAreas: unique(missedAreas)
    };

    profile.scenarioAttempts.unshift({
      date: new Date().toISOString(),
      scenarioId: scenario.id,
      title: scenario.title,
      mode: "What To Say Next",
      difficulty: scenario.difficulty,
      scorePercent: percent,
      missedAreas: session.result.missedAreas,
      model: modelForScenario(scenario)
    });
    profile.scenarioAttempts = profile.scenarioAttempts.slice(0, 40);
    updateReviewFromScenarioAttempt(profile, profile.scenarioAttempts[0]);
    saveProfiles();
    saveScenarioMirror();
    renderScenario();
    renderDashboard();
    renderProgress();
  }

  function whatNextFeedback(result, scenario) {
    var missed = result.missedAreas || [];
    return [
      "<div class=\"feedback " + (result.scorePercent >= 80 ? "good" : "needs-work") + "\"><strong>Session score:</strong> " + result.scorePercent + "%<br><strong>Response choices:</strong> " + result.choicePercent + "%<br><strong>Summary:</strong> " + result.written.percent + "%</div>",
      missed.length ? "<div class=\"feedback needs-work\"><strong>Could strengthen:</strong>" + list(missed) + "</div>" : "<div class=\"feedback good\"><strong>Strong run:</strong> Your choices and summary matched the clinical priorities.</div>",
      "<div class=\"feedback\"><strong>Model answer:</strong><br>" + escapeHtml(scenario.modelAnswer || "") + "</div>"
    ].join("");
  }

  function renderErrorScenario(session, scenario) {
    var choices = (scenario.errorChoices || []).map(function (choice, index) {
      var selected = session.selections.errorChoice === index;
      var classNames = ["choice"];
      if (selected) classNames.push("is-selected");
      if (session.scored && choice.correct) classNames.push("is-correct");
      if (session.scored && selected && !choice.correct) classNames.push("is-wrong");
      return "<label class=\"" + classNames.join(" ") + "\"><input type=\"radio\" name=\"errorChoice\" value=\"" + index + "\"" + (selected ? " checked" : "") + (session.scored ? " disabled" : "") + "><span>" + escapeHtml(choice.text) + "</span></label>";
    }).join("");

    els.scenarioCard.innerHTML = [
      "<div class=\"case-meta\"><span class=\"tag\">Spot Therapist Error</span><span class=\"tag\">" + escapeHtml(scenario.difficulty) + "</span>" + (scenario.focus ? scenario.focus.map(function (item) { return "<span class=\"tag\">" + escapeHtml(item) + "</span>"; }).join("") : "") + "</div>",
      "<h3>" + escapeHtml(scenario.title) + "</h3>",
      "<p><strong>Presenting problem:</strong> " + escapeHtml(scenario.presentingProblem) + "</p>",
      "<p>" + escapeHtml(scenario.prompt) + "</p>",
      renderCaseDetails(scenario),
      "<div class=\"flawed-response\"><strong>Therapist response to critique</strong><p>" + escapeHtml(scenario.flawedResponse || "") + "</p></div>",
      "<fieldset class=\"scenario-group\"><legend>" + escapeHtml(scenario.errorPrompt || "What is the main therapist error?") + "</legend><div class=\"choice-list\">" + choices + "</div></fieldset>",
      "<label for=\"reflectionText\">Repair the response</label>",
      "<textarea id=\"reflectionText\" placeholder=\"Name the error, the missed clue, and a safer model-consistent repair.\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.reflection) + "</textarea>",
      session.scored ? scenarioFeedback(session.result, scenario) : "",
      "<div class=\"button-row\">",
      session.scored ? "<button type=\"button\" id=\"redoScenario\">Redo With Feedback</button><button type=\"button\" id=\"newScenario\">New Random Case</button>" : "<button type=\"button\" id=\"scoreScenario\">Score Case</button>",
      session.scored ? "" : "<button class=\"secondary\" type=\"button\" id=\"scenarioReset\">Reset Case</button>",
      "</div>"
    ].join("");

    if (!session.scored) {
      els.scenarioCard.querySelectorAll("input[name=\"errorChoice\"]").forEach(function (input) {
        input.addEventListener("change", function () {
          session.selections.errorChoice = Number(input.value);
          renderScenario();
        });
      });
    }

    var reflection = document.getElementById("reflectionText");
    if (reflection && !session.scored) {
      reflection.addEventListener("input", function () {
        session.reflection = reflection.value;
      });
    }

    var score = document.getElementById("scoreScenario");
    if (score) score.addEventListener("click", scoreScenario);
    var reset = document.getElementById("scenarioReset");
    if (reset) reset.addEventListener("click", function () { startScenario(); });
    var next = document.getElementById("newScenario");
    if (next) next.addEventListener("click", startScenario);
    var redo = document.getElementById("redoScenario");
    if (redo) redo.addEventListener("click", redoScenarioWithFeedback);

    renderScenarioScore();
  }

  function renderScenarioRedoGuide(result) {
    var missed = getScenarioMissedAreas(result).slice(0, 5);
    if (!missed.length) {
      return "<div class=\"feedback good\"><strong>Redo focus:</strong> Try to reproduce the full rubric and make the reasoning more specific.</div>";
    }
    return "<div class=\"feedback needs-work\"><strong>Redo focus:</strong> Keep this feedback visible and strengthen " + escapeHtml(missed.join(", ")) + ".</div>";
  }

  function redoScenarioWithFeedback() {
    var current = state.scenario;
    if (!current || !current.item || !current.result) return;
    state.scenario = {
      item: current.item,
      mode: current.mode,
      choiceOrders: buildScenarioChoiceOrders(current.item),
      selections: {},
      reflection: "",
      scored: false,
      result: null,
      feedbackGuide: current.result,
      startedAt: new Date().toISOString()
    };
    renderScenario();
  }

  function scoreScenario() {
    var profile = getProfile();
    var session = state.scenario;
    var scenario = session.item;
    if (scenario.errorCase || session.mode === "error") {
      scoreErrorScenario(profile, session, scenario);
      return;
    }
    var showGuided = session.mode === "guided" || session.mode === "combined";
    var showWritten = session.mode === "written" || session.mode === "combined";
    var guided = showGuided ? scoreGuided(session, scenario) : null;
    var written = showWritten ? scoreWritten(session.reflection, scenario) : null;
    var parts = [];
    if (guided) parts.push(guided.percent);
    if (written) parts.push(written.percent);
    var percent = parts.length ? Math.round(parts.reduce(function (sum, value) { return sum + value; }, 0) / parts.length) : 0;

    session.scored = true;
    session.result = {
      scorePercent: percent,
      guided: guided,
      written: written
    };
    session.result.missedAreas = getScenarioMissedAreas(session.result);

    profile.scenarioAttempts.unshift({
      date: new Date().toISOString(),
      scenarioId: scenario.id,
      title: scenario.title,
      mode: session.mode,
      difficulty: scenario.difficulty,
      scorePercent: percent,
      missedAreas: session.result.missedAreas,
      model: modelForScenario(scenario)
    });
    profile.scenarioAttempts = profile.scenarioAttempts.slice(0, 40);
    updateReviewFromScenarioAttempt(profile, profile.scenarioAttempts[0]);
    saveProfiles();
    saveScenarioMirror();
    renderScenario();
    renderDashboard();
    renderProgress();
  }

  function scoreErrorScenario(profile, session, scenario) {
    var selected = session.selections.errorChoice;
    var choice = selected === undefined ? null : scenario.errorChoices[selected];
    var choicePercent = choice && choice.correct ? 100 : 0;
    var written = scoreWritten(session.reflection, {
      checklist: scenario.repairChecklist || scenario.checklist || []
    });
    var percent = Math.round((choicePercent + written.percent) / 2);
    var missedAreas = [];
    if (!choice || !choice.correct) missedAreas.push("Therapist error");
    written.hits.filter(function (hit) { return !hit.matched; }).forEach(function (hit) {
      missedAreas.push(hit.label);
    });

    session.scored = true;
    session.result = {
      scorePercent: percent,
      error: {
        selected: selected,
        selectedText: choice ? choice.text : "No selection",
        feedback: choice ? choice.feedback : "Choose the main therapist error before scoring.",
        correctText: getCorrectErrorChoice(scenario),
        percent: choicePercent
      },
      written: written,
      missedAreas: unique(missedAreas)
    };

    profile.scenarioAttempts.unshift({
      date: new Date().toISOString(),
      scenarioId: scenario.id,
      title: scenario.title,
      mode: "Spot Therapist Error",
      difficulty: scenario.difficulty,
      scorePercent: percent,
      missedAreas: session.result.missedAreas,
      model: modelForScenario(scenario),
      errorCase: true
    });
    profile.scenarioAttempts = profile.scenarioAttempts.slice(0, 40);
    updateReviewFromScenarioAttempt(profile, profile.scenarioAttempts[0]);
    saveProfiles();
    saveScenarioMirror();
    renderScenario();
    renderDashboard();
    renderProgress();
  }

  function getCorrectErrorChoice(scenario) {
    var correct = (scenario.errorChoices || []).filter(function (choice) { return choice.correct; })[0];
    return correct ? correct.text : "Review the model answer.";
  }

  function scoreGuided(session, scenario) {
    var categories = Object.keys(scenario.idealSelections);
    var correct = 0;
    var details = categories.map(function (category) {
      var selected = session.selections[category];
      var ideal = scenario.idealSelections[category];
      var ok = selected === ideal;
      if (ok) correct += 1;
      return {
        category: category,
        ok: ok,
        selected: selected,
        ideal: ideal,
        rubric: scenario.rubric[category]
      };
    });
    return {
      correct: correct,
      total: categories.length,
      percent: Math.round((correct / categories.length) * 100),
      details: details
    };
  }

  function scoreWritten(text, scenario) {
    var lower = (text || "").toLowerCase();
    var hits = scenario.checklist.map(function (item) {
      var matched = item.keywords.some(function (keyword) {
        return lower.indexOf(keyword.toLowerCase()) !== -1;
      });
      return { label: item.label, matched: matched };
    });
    var matchedCount = hits.filter(function (hit) { return hit.matched; }).length;
    return {
      matched: matchedCount,
      total: scenario.checklist.length,
      percent: Math.round((matchedCount / scenario.checklist.length) * 100),
      hits: hits
    };
  }

  function scenarioFeedback(result, scenario) {
    var blocks = [];
    if (result.error) {
      blocks.push("<div class=\"feedback " + (result.error.percent >= 100 ? "good" : "needs-work") + "\"><strong>Therapist error:</strong> " + escapeHtml(result.error.selectedText) + "<br><br><strong>Best critique:</strong> " + escapeHtml(result.error.correctText) + "<br><br><strong>Feedback:</strong> " + escapeHtml(result.error.feedback) + "</div>");
    }
    if (result.guided) {
      var missed = result.guided.details.filter(function (item) { return !item.ok; });
      blocks.push("<div class=\"feedback " + (missed.length ? "needs-work" : "good") + "\"><strong>Guided choices:</strong> " + result.guided.correct + " of " + result.guided.total + ". " + (missed.length ? "Review " + escapeHtml(missed.map(function (item) { return labelForCategory(item.category); }).join(", ")) + "." : "Your selections matched the rubric.") + "</div>");
      blocks.push(renderGuidedBreakdown(result.guided, scenario));
    }
    if (result.written) {
      var included = result.written.hits.filter(function (hit) { return hit.matched; }).map(function (hit) { return hit.label; });
      var missedWritten = result.written.hits.filter(function (hit) { return !hit.matched; }).map(function (hit) { return hit.label; });
      blocks.push("<div class=\"feedback " + (missedWritten.length ? "needs-work" : "good") + "\"><strong>Written reflection:</strong> " + result.written.matched + " of " + result.written.total + " checklist items. " + (included.length ? "<br><strong>Included:</strong> " + escapeHtml(included.join(", ")) + "." : "") + (missedWritten.length ? "<br><strong>Could add:</strong> " + escapeHtml(missedWritten.join(", ")) + "." : "") + "</div>");
      blocks.push(renderChecklistBreakdown(result.written));
    }
    if (Array.isArray(scenario.priorities) && scenario.priorities.length) {
      blocks.push("<div class=\"feedback\"><strong>Clinical priorities:</strong>" + list(scenario.priorities) + "</div>");
    }
    blocks.push("<div class=\"feedback\"><strong>Model answer:</strong><br>" + escapeHtml(scenario.modelAnswer) + "</div>");
    blocks.push("<div class=\"feedback\"><strong>Improve next time:</strong>" + list(scenario.improvementTips) + "</div>");
    return blocks.join("");
  }

  function renderGuidedBreakdown(guided, scenario) {
    var cards = guided.details.map(function (item) {
      var selected = item.selected === undefined ? "No selection" : scenario.choices[item.category][item.selected];
      var ideal = scenario.choices[item.category][item.ideal];
      return [
        "<div class=\"breakdown-item " + (item.ok ? "good" : "needs-work") + "\">",
        "<div class=\"mini-label\">" + escapeHtml(labelForCategory(item.category)) + "</div>",
        "<p><strong>Your answer:</strong> " + escapeHtml(selected) + "</p>",
        "<p><strong>Best answer:</strong> " + escapeHtml(ideal) + "</p>",
        "<p><strong>Why it matters:</strong> " + escapeHtml(item.rubric) + "</p>",
        "</div>"
      ].join("");
    }).join("");
    return "<div class=\"breakdown-grid\">" + cards + "</div>";
  }

  function renderChecklistBreakdown(written) {
    var items = written.hits.map(function (hit) {
      return "<div class=\"check-item " + (hit.matched ? "good" : "needs-work") + "\"><span>" + (hit.matched ? "Included" : "Add") + "</span><strong>" + escapeHtml(hit.label) + "</strong></div>";
    }).join("");
    return "<div class=\"check-grid\">" + items + "</div>";
  }

  function getScenarioMissedAreas(result) {
    if (!result) return [];
    if (Array.isArray(result.missedAreas) && (result.error || result.choicePercent !== undefined)) return result.missedAreas;
    var missedGuided = result.guided ? result.guided.details.filter(function (item) {
      return !item.ok;
    }).map(function (item) {
      return labelForCategory(item.category);
    }) : [];
    var missedWritten = result.written ? result.written.hits.filter(function (hit) {
      return !hit.matched;
    }).map(function (hit) {
      return hit.label;
    }) : [];
    return unique(missedGuided.concat(missedWritten));
  }

  function modelForScenario(scenario) {
    var focus = (scenario && scenario.focus ? scenario.focus.join(" ") : "").toLowerCase();
    if (focus.indexOf("bowen") !== -1) return "Bowen";
    if (focus.indexOf("eft") !== -1 || focus.indexOf("efft") !== -1) return "EFT";
    if (focus.indexOf("ethics") !== -1 || focus.indexOf("safety") !== -1 || focus.indexOf("risk") !== -1) return "Ethics";
    return "Systemic Roles";
  }

  function renderScenarioScore() {
    var session = state.scenario;
    if (!session || !session.scored || !session.result) {
      els.scenarioScore.innerHTML = "<div class=\"empty-state\">No case scored yet.</div>";
      return;
    }
    var score = session.result.scorePercent;
    var nextPractice = getScenarioMissedAreas(session.result).slice(0, 3);
    els.scenarioScore.innerHTML = [
      "<div class=\"score-ring\">" + score + "%</div>",
      "<p><strong>" + scoreLabel(score) + "</strong></p>",
      session.result.guided ? "<p>Guided: " + session.result.guided.percent + "%</p>" : "",
      session.result.written ? "<p>Written: " + session.result.written.percent + "%</p>" : "",
      nextPractice.length ? "<div class=\"feedback\"><strong>Practice next:</strong>" + list(nextPractice) + "</div>" : "<div class=\"feedback good\"><strong>Next step:</strong> Try a harder case or switch modes.</div>"
    ].join("");
  }

  function getSkillTab() {
    return els.skillMode && els.skillMode.value === "simulator" ? "simulator" : "quick";
  }

  function setSkillTab(tab) {
    var nextTab = tab === "simulator" ? "simulator" : "quick";
    var profile = getProfile();
    setSelectIfOption(els.skillMode, nextTab);
    if (profile && profile.settings) {
      profile.settings.skillMode = nextTab;
      saveProfiles();
    }
    state.skill = null;
    populateSkillCases();
    renderSkillPlaceholder();
  }

  function renderSkillTabs() {
    var tab = getSkillTab();
    document.querySelectorAll("[data-skill-tab]").forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-skill-tab") === tab);
    });
  }

  function populateSkillCases() {
    if (!els.skillCase) return;
    els.skillCase.disabled = true;
    els.skillCase.innerHTML = "<option value=\"random\">Random round</option>";
  }

  function getSkillPool(types) {
    var difficulty = els.skillDifficulty ? els.skillDifficulty.value : "mixed";
    var allowed = types || [];
    return (DATA.skillDrills || []).filter(function (drill) {
      var typeMatch = !allowed.length || allowed.indexOf(drill.type) !== -1;
      var difficultyMatch = difficulty === "mixed" || drill.difficulty === difficulty;
      return typeMatch && difficultyMatch;
    });
  }

  function renderSkillPlaceholder() {
    var profile = getProfile();
    if (profile && profile.settings) {
      var savedMode = ["quick", "simulator"].indexOf(profile.settings.skillMode) !== -1 ? profile.settings.skillMode : "quick";
      setSelectIfOption(els.skillMode, savedMode);
      setSelectIfOption(els.skillDifficulty, profile.settings.skillDifficulty || "mixed");
    }
    populateSkillCases();
    renderSkillTabs();
    if (state.skill) {
      renderSkill();
      return;
    }
    renderSkillAvailability();
    var isSimulator = getSkillTab() === "simulator";
    els.skillCard.innerHTML = [
      "<div class=\"skill-welcome\">",
      "<h3>" + (isSimulator ? "Simulator" : "Quick Play") + "</h3>",
      "<p>" + (isSimulator ? "Pick the strongest therapist move, get a short why-it-works note, then try a stronger line if you want." : "One-click rounds for model clues, next moves, red flags, and terms. Build a streak and keep moving.") + "</p>",
      "<div class=\"skill-mode-grid\">",
      "<div><strong>Model Clue Match</strong><span>Spot the model from exam-style clues.</span></div>",
      "<div><strong>Next Move</strong><span>Choose the next clinical step.</span></div>",
      "<div><strong>Red Flag Sprint</strong><span>Decide when safety or ethics comes first.</span></div>",
      "<div><strong>Term Snap</strong><span>Match key language before it fades.</span></div>",
      "</div>",
      "<div class=\"button-row\"><button type=\"button\" id=\"startSkillRound\">" + (isSimulator ? "Start Simulator" : "Start Quick Play") + "</button></div>",
      "</div>"
    ].join("");
    bindSkillCardEvents();
  }

  function renderSkillAvailability() {
    if (!els.skillScore) return;
    var profile = getProfile();
    var best = profile && profile.settings ? profile.settings.skillBestStreak || 0 : 0;
    var tab = getSkillTab();
    els.skillScore.innerHTML = [
      "<div class=\"skill-score-stack\">",
      "<div><strong>" + (tab === "simulator" ? "Simulator" : "Quick Play") + "</strong><span>Ready</span></div>",
      "<div><strong>" + best + "</strong><span>Best streak</span></div>",
      "<div><strong>0 / 0</strong><span>This run</span></div>",
      "</div>"
    ].join("");
  }

  function startSkillDrill(options) {
    var profile = getProfile();
    var tab = getSkillTab();
    var oldStats = state.skill && state.skill.mode === tab && state.skill.stats ? state.skill.stats : null;
    var stats = oldStats || { correct: 0, total: 0, streak: 0, bestStreak: profile.settings.skillBestStreak || 0 };
    profile.settings.skillMode = tab;
    profile.settings.skillDifficulty = els.skillDifficulty.value;
    saveProfiles();

    var targetModel = options && options.weak ? getWeakQuizModel(profile) : null;
    var item = tab === "simulator" ? buildSimulatorRound(targetModel) : buildQuickPlayRound(targetModel);
    state.skill = {
      mode: tab,
      item: item,
      selectedIndex: null,
      submitted: false,
      correct: false,
      rewrite: "",
      stats: stats,
      startedAt: new Date().toISOString()
    };
    renderSkill();
  }

  function renderSkill() {
    var session = state.skill;
    renderSkillTabs();
    if (!session) {
      renderSkillPlaceholder();
      return;
    }
    if (!session.item) {
      els.skillCard.innerHTML = "<div class=\"empty-state\">No skill rounds match those settings.</div>";
      els.skillScore.innerHTML = "<div class=\"empty-state\">Try mixed difficulty or another Skill Lab tab.</div>";
      return;
    }
    els.skillCard.innerHTML = session.mode === "simulator" ? renderSimulatorRound(session) : renderQuickPlayRound(session);
    bindSkillCardEvents();
    renderSkillScore();
  }

  function buildQuickPlayRound(targetModel) {
    var builders = [
      buildModelClueRound,
      buildNextMoveRound,
      buildRedFlagRound,
      buildTermSnapRound
    ];
    var round = null;
    shuffle(builders).some(function (builder) {
      round = builder(targetModel);
      return !!round;
    });
    return round;
  }

  function buildModelClueRound(targetModel) {
    var difficulty = els.skillDifficulty ? els.skillDifficulty.value : "mixed";
    var pool = (DATA.questions || []).filter(function (question) {
      var difficultyMatch = difficulty === "mixed" || question.difficulty === difficulty;
      var modelMatch = !targetModel || question.model === targetModel;
      return difficultyMatch && modelMatch && question.prompt;
    });
    var item = shuffle(pool)[0];
    if (!item) return null;
    var choices = ["Bowen", "EFT", "Ethics", "Systemic Roles"];
    var correctIndex = Math.max(0, choices.indexOf(item.model));
    return {
      id: "quick-model-" + item.id,
      gameType: "Model Clue Match",
      title: "Model Clue Match",
      prompt: item.prompt,
      choices: choices,
      correctIndex: correctIndex,
      feedback: item.explanation || item.hint || "Match the model language in the stem.",
      modelAnswer: choices[correctIndex],
      model: item.model,
      difficulty: item.difficulty,
      sourceTitle: item.topic || item.model
    };
  }

  function buildNextMoveRound(targetModel) {
    var pool = getSkillPool(["nextIntervention", "responsePractice"]).filter(function (drill) {
      return Array.isArray(drill.choices) && (!targetModel || skillMatchesTarget(drill, targetModel));
    });
    var item = shuffle(pool)[0];
    if (!item) return null;
    var maxScore = getMaxChoiceScore(item.choices);
    var correctIndex = item.choices.findIndex(function (choice) { return choice.score === maxScore; });
    return {
      id: "quick-next-" + item.id,
      gameType: "Next Move",
      title: item.title,
      prompt: item.prompt,
      choices: item.choices.map(function (choice) { return choice.text; }),
      correctIndex: correctIndex < 0 ? 0 : correctIndex,
      feedbackByChoice: item.choices.map(function (choice) { return choice.feedback; }),
      feedback: item.modelAnswer || item.choices[correctIndex < 0 ? 0 : correctIndex].feedback,
      modelAnswer: item.choices[correctIndex < 0 ? 0 : correctIndex].text,
      model: modelForSkill(item),
      difficulty: item.difficulty,
      sourceTitle: item.title
    };
  }

  function buildRedFlagRound(targetModel) {
    var mixed = getSkillPool(["nextIntervention", "ethicsScanner", "responsePractice"]).filter(function (drill) {
      return !targetModel || skillMatchesTarget(drill, targetModel);
    });
    var item = shuffle(mixed)[0];
    if (!item) return null;
    var text = [item.title, item.prompt, item.modelAnswer, (item.tags || []).join(" ")].join(" ").toLowerCase();
    var isRedFlag = /safety|risk|coercion|violence|abuse|danger|mandated|consent|confidential|legal|ethic|court|document|protect/.test(text);
    return {
      id: "quick-red-" + item.id,
      gameType: "Red Flag Sprint",
      title: item.title,
      prompt: item.prompt,
      choices: ["Safety / ethics comes first", "Proceed with model technique"],
      correctIndex: isRedFlag ? 0 : 1,
      feedback: isRedFlag ? "Pause model technique and clarify safety, consent, risk, or documentation first." : "No clear safety override is stated, so model-consistent clinical work can proceed while still monitoring risk.",
      modelAnswer: isRedFlag ? "Safety / ethics comes first" : "Proceed with model technique",
      model: isRedFlag ? "Ethics" : modelForSkill(item),
      difficulty: item.difficulty,
      sourceTitle: item.title
    };
  }

  function buildTermSnapRound(targetModel) {
    var terms = [];
    (DATA.studySections || []).forEach(function (section) {
      (section.keyTerms || []).forEach(function (term) {
        var model = section.model || section.title || "Systemic Roles";
        if (!targetModel || model.indexOf(targetModel) !== -1 || section.title.indexOf(targetModel) !== -1) {
          terms.push({ term: term.term, definition: term.definition, model: model, section: section.title });
        }
      });
    });
    var item = shuffle(terms)[0];
    if (!item) return null;
    var distractors = shuffle(terms.filter(function (term) { return term.term !== item.term; })).slice(0, 3).map(function (term) {
      return term.term;
    });
    var choices = shuffle([item.term].concat(distractors));
    return {
      id: "quick-term-" + slugify(item.term),
      gameType: "Term Snap",
      title: item.section,
      prompt: item.definition,
      choices: choices,
      correctIndex: choices.indexOf(item.term),
      feedback: item.term + " belongs with " + item.model + ".",
      modelAnswer: item.term,
      model: normalizeSkillModel(item.model),
      difficulty: els.skillDifficulty ? els.skillDifficulty.value : "mixed",
      sourceTitle: item.section
    };
  }

  function slugify(text) {
    return String(text || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  function normalizeSkillModel(model) {
    var text = String(model || "").toLowerCase();
    if (text.indexOf("bowen") !== -1) return "Bowen";
    if (text.indexOf("eft") !== -1 || text.indexOf("emotion") !== -1) return "EFT";
    if (text.indexOf("ethic") !== -1 || text.indexOf("risk") !== -1 || text.indexOf("safety") !== -1) return "Ethics";
    return "Systemic Roles";
  }

  function buildSimulatorRound(targetModel) {
    var pool = getSkillPool(["responsePractice", "nextIntervention", "bowenTrainer", "eftMapper"]).filter(function (drill) {
      return !targetModel || skillMatchesTarget(drill, targetModel);
    });
    var item = shuffle(pool)[0];
    if (!item) return null;
    if (Array.isArray(item.choices)) {
      var maxScore = getMaxChoiceScore(item.choices);
      var correctIndex = item.choices.findIndex(function (choice) { return choice.score === maxScore; });
      return {
        id: "sim-" + item.id,
        gameType: "Simulator",
        title: item.title,
        prompt: item.prompt,
        choices: item.choices.map(function (choice) { return choice.text; }),
        correctIndex: correctIndex < 0 ? 0 : correctIndex,
        feedbackByChoice: item.choices.map(function (choice) { return choice.feedback; }),
        feedback: item.modelAnswer || item.choices[correctIndex < 0 ? 0 : correctIndex].feedback,
        modelAnswer: item.modelAnswer || item.choices[correctIndex < 0 ? 0 : correctIndex].text,
        model: modelForSkill(item),
        difficulty: item.difficulty,
        sourceTitle: item.title
      };
    }
    var categories = Object.keys(item.choices || {});
    var category = shuffle(categories)[0];
    if (!category) return null;
    var choices = item.choices[category] || [];
    var ideal = item.idealSelections && item.idealSelections[category] !== undefined ? item.idealSelections[category] : 0;
    return {
      id: "sim-" + item.id + "-" + category,
      gameType: "Simulator",
      title: item.title + ": " + labelForCategory(category),
      prompt: item.prompt,
      choices: choices,
      correctIndex: ideal,
      feedback: item.rubric && item.rubric[category] ? item.rubric[category] : item.modelAnswer,
      modelAnswer: item.modelAnswer,
      model: modelForSkill(item),
      difficulty: item.difficulty,
      sourceTitle: item.title
    };
  }

  function renderQuickPlayRound(session) {
    var item = session.item;
    return [
      renderRoundHeader(item, session),
      "<div class=\"skill-prompt\"><strong>" + escapeHtml(item.gameType) + "</strong><p>" + escapeHtml(item.prompt) + "</p></div>",
      renderSkillAnswerButtons(session),
      session.submitted ? renderRoundFeedback(session) : "",
      renderRoundButtons(session)
    ].join("");
  }

  function renderSimulatorRound(session) {
    var item = session.item;
    return [
      renderRoundHeader(item, session),
      "<div class=\"skill-prompt\"><strong>Client moment</strong><p>" + escapeHtml(item.prompt) + "</p></div>",
      renderSkillAnswerButtons(session),
      session.submitted ? renderRoundFeedback(session) : "",
      session.submitted ? "<label class=\"sim-rewrite-label\" for=\"simRewrite\">Try a stronger line</label><textarea id=\"simRewrite\" class=\"sim-rewrite\" data-sim-rewrite placeholder=\"Optional: write one cleaner therapist line after seeing the feedback.\">" + escapeHtml(session.rewrite || "") + "</textarea>" : "",
      renderRoundButtons(session)
    ].join("");
  }

  function renderRoundHeader(item, session) {
    return [
      "<div class=\"skill-round-head\">",
      "<div><div class=\"skill-meta\"><span class=\"tag\">" + escapeHtml(item.gameType) + "</span><span class=\"tag\">" + escapeHtml(item.difficulty || "mixed") + "</span><span class=\"tag\">" + escapeHtml(item.model || "Mixed") + "</span></div>",
      "<h3>" + escapeHtml(item.title) + "</h3></div>",
      "<div class=\"round-streak\"><strong>" + session.stats.streak + "</strong><span>streak</span></div>",
      "</div>"
    ].join("");
  }

  function renderSkillAnswerButtons(session) {
    return "<div class=\"skill-answer-grid\">" + session.item.choices.map(function (choice, index) {
      var classes = ["skill-answer"];
      if (session.submitted && index === session.item.correctIndex) classes.push("is-correct");
      if (session.submitted && index === session.selectedIndex && index !== session.item.correctIndex) classes.push("is-wrong");
      return "<button class=\"" + classes.join(" ") + "\" type=\"button\" data-skill-answer=\"" + index + "\"" + (session.submitted ? " disabled" : "") + ">" + escapeHtml(choice) + "</button>";
    }).join("") + "</div>";
  }

  function renderRoundFeedback(session) {
    var item = session.item;
    var selectedFeedback = item.feedbackByChoice && item.feedbackByChoice[session.selectedIndex] ? item.feedbackByChoice[session.selectedIndex] : item.feedback;
    return [
      "<div class=\"feedback " + (session.correct ? "good" : "needs-work") + "\">",
      "<strong>" + (session.correct ? "Correct." : "Not quite.") + "</strong>",
      "<p>" + escapeHtml(selectedFeedback || item.feedback || "") + "</p>",
      "<p><strong>Best answer:</strong> " + escapeHtml(item.modelAnswer || item.choices[item.correctIndex]) + "</p>",
      "</div>"
    ].join("");
  }

  function renderRoundButtons(session) {
    return [
      "<div class=\"button-row\">",
      session.submitted ? "<button type=\"button\" id=\"newSkillDrill\">Next Round</button>" : "",
      "<button class=\"secondary\" type=\"button\" id=\"startSkillRound\">" + (session.submitted ? "Restart Run" : "New Round") + "</button>",
      "</div>"
    ].join("");
  }

  function renderSkillHeader(item) {
    return [
      "<div class=\"skill-meta\"><span class=\"tag\">" + escapeHtml(labelForSkillMode(item.type)) + "</span><span class=\"tag\">" + escapeHtml(item.difficulty) + "</span><span class=\"tag\">" + escapeHtml(item.clientType) + "</span>" + (item.tags ? item.tags.map(function (tag) { return "<span class=\"tag\">" + escapeHtml(tag) + "</span>"; }).join("") : "") + "</div>",
      "<h3>" + escapeHtml(item.title) + "</h3>",
      "<p>" + escapeHtml(item.prompt) + "</p>",
      item.details && item.details.length ? "<div class=\"case-detail-grid\"><div class=\"case-detail\"><strong>What you know</strong>" + list(item.details) + "</div><div class=\"case-detail\"><strong>Clinical task</strong><p>" + escapeHtml(skillTaskText(item.type)) + "</p></div><div class=\"case-detail alert\"><strong>Watch for</strong>" + list(item.tips || []) + "</div></div>" : ""
    ].join("");
  }

  function skillTaskText(type) {
    var labels = {
      modelCompare: "Write a short clinical conceptualization, compare the model lens, and name the next intervention.",
      responsePractice: "Write the therapist response you would actually say and explain the clinical reason for it.",
      bowenTrainer: "Map the family process, Bowen concepts, and coaching stance in writing.",
      eftMapper: "Map the cycle, primary emotion, attachment meaning, and next EFT move in writing.",
      nextIntervention: "Write the strongest next clinical action and why it fits the case.",
      ethicsScanner: "Write the risk/ethics flags, what must be assessed, and the documentation or consultation step."
    };
    return labels[type] || "Complete the clinical reasoning drill.";
  }

  function renderSkillWorksheet(item, session) {
    var fields = getSkillWorksheetFields(item);
    return [
      "<div class=\"worksheet-intro\"><strong>Clinical worksheet</strong><p>Use complete clinical sentences. This section scores your written reasoning against the case checklist, not answer-picking.</p></div>",
      "<div class=\"skill-worksheet\">",
      fields.map(function (field) {
        return [
          "<div class=\"worksheet-field\">",
          "<label for=\"skillText-" + escapeHtml(field.id) + "\">" + escapeHtml(field.label) + "</label>",
          "<p>" + escapeHtml(field.help) + "</p>",
          "<textarea id=\"skillText-" + escapeHtml(field.id) + "\" data-skill-text=\"" + escapeHtml(field.id) + "\" placeholder=\"" + escapeHtml(field.placeholder) + "\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.responses[field.id] || "") + "</textarea>",
          "</div>"
        ].join("");
      }).join(""),
      "</div>"
    ].join("");
  }

  function getSkillWorksheetFields(item) {
    var ethicsRelevant = isEthicsRelevantSkill(item);
    return [
      {
        id: "conceptualization",
        label: "Case conceptualization",
        help: "Name the relational pattern, symptom function, cycle, triangle, or risk frame that organizes the case.",
        placeholder: "The clinical pattern I see is..."
      },
      {
        id: "modelFit",
        label: "Model fit / clinical lens",
        help: "Explain which model language fits and what clues in the stem support that lens.",
        placeholder: "The best lens is... because the stem shows..."
      },
      {
        id: "nextIntervention",
        label: "Next best intervention",
        help: "State the next therapist move and why it should happen before other tempting options.",
        placeholder: "The next step is..."
      },
      {
        id: "therapistLanguage",
        label: "Therapist wording",
        help: "Write a sentence or two you could say in session using calm, model-consistent language.",
        placeholder: "I might say..."
      },
      {
        id: "ethicsNotes",
        label: ethicsRelevant ? "Risk / ethics / documentation" : "Risk / ethics notes, if relevant",
        help: ethicsRelevant ? "Name the safety, consent, confidentiality, documentation, consultation, or legal duty issue." : "If there is no risk issue, say that and note what you would still monitor.",
        placeholder: ethicsRelevant ? "I would assess or document..." : "No immediate risk is stated; I would monitor..."
      }
    ];
  }

  function isEthicsRelevantSkill(item) {
    var text = [
      item.type,
      item.title,
      item.prompt,
      item.modelAnswer,
      (item.tags || []).join(" "),
      (item.tips || []).join(" ")
    ].join(" ").toLowerCase();
    return /ethic|risk|safety|danger|coercion|abuse|consent|confidential|document|legal|court|mandated|protect/.test(text);
  }

  function getSkillWorksheetChecklist(item) {
    var checklist = [];
    function add(label, keywords) {
      var cleanKeywords = unique((keywords || []).map(function (keyword) {
        return String(keyword || "").trim();
      }).filter(Boolean));
      if (!label || !cleanKeywords.length) return;
      checklist.push({ label: label, keywords: cleanKeywords });
    }

    (item.fields || []).forEach(function (field) {
      (field.checklist || []).forEach(function (check) {
        add(field.label + ": " + check.label, check.keywords);
      });
    });

    (item.checklist || []).forEach(function (check) {
      add(check.label, check.keywords);
    });

    if (item.rubric) {
      Object.keys(item.rubric).forEach(function (key) {
        var label = labelForCategory(key);
        var ideal = item.choices && item.choices[key] && item.choices[key][item.idealSelections ? item.idealSelections[key] : 0];
        add(label, skillKeywordsFromText([label, item.rubric[key], ideal].join(" ")));
      });
    }

    if (item.flags && item.idealFlags) {
      item.idealFlags.forEach(function (index) {
        add("Risk flag: " + item.flags[index], skillKeywordsFromText(item.flags[index]));
      });
    }

    if (!checklist.length) {
      add("Clinical pattern", ["pattern", "cycle", "relationship", "system"]);
      add("Next step", ["next", "assess", "intervention", "therapist"]);
      add("Model language", skillKeywordsFromText((item.tags || []).join(" ")).concat(skillKeywordsFromText(item.title)));
    }

    return dedupeChecklist(checklist);
  }

  function skillKeywordsFromText(text) {
    var stopWords = {
      "the": true, "and": true, "for": true, "with": true, "that": true, "this": true,
      "from": true, "into": true, "about": true, "would": true, "should": true,
      "their": true, "therapist": true, "client": true, "family": true, "couple": true
    };
    return unique(String(text || "").toLowerCase().split(/[^a-z0-9-]+/).filter(function (word) {
      return word.length > 3 && !stopWords[word];
    })).slice(0, 8);
  }

  function dedupeChecklist(checklist) {
    var seen = {};
    return checklist.filter(function (item) {
      var key = item.label.toLowerCase();
      if (seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function scoreWorksheetSkill(session, item) {
    var fields = getSkillWorksheetFields(item);
    var responses = fields.map(function (field) {
      return {
        id: field.id,
        label: field.label,
        text: session.responses[field.id] || ""
      };
    });
    var combinedText = responses.map(function (response) { return response.text; }).join(" ");
    var checklist = getSkillWorksheetChecklist(item);
    var written = scoreChecklist(combinedText, checklist);
    var requiredFields = responses.filter(function (response) {
      return response.id !== "ethicsNotes" || isEthicsRelevantSkill(item) || response.text.trim().length > 0;
    });
    var missingFields = requiredFields.filter(function (response) {
      return response.text.trim().length < 20;
    }).map(function (response) { return response.label; });
    var completeness = requiredFields.length
      ? Math.round(((requiredFields.length - missingFields.length) / requiredFields.length) * 100)
      : 100;
    var score = Math.round(((written.percent * 2) + completeness) / 3);
    return {
      scorePercent: score,
      worksheet: {
        responses: responses,
        written: written,
        completeness: completeness,
        missingFields: missingFields
      },
      missedAreas: unique(written.hits.filter(function (hit) {
        return !hit.matched;
      }).map(function (hit) {
        return hit.label;
      }).concat(missingFields))
    };
  }

  function renderModelCompareSkill(item, session) {
    return "<div class=\"model-compare-grid\">" + item.fields.map(function (field) {
      return [
        "<div class=\"skill-field\">",
        "<label for=\"skillText-" + escapeHtml(field.id) + "\">" + escapeHtml(field.label) + "</label>",
        "<textarea id=\"skillText-" + escapeHtml(field.id) + "\" data-skill-text=\"" + escapeHtml(field.id) + "\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.responses[field.id] || "") + "</textarea>",
        "</div>"
      ].join("");
    }).join("") + "</div>";
  }

  function renderChoiceSkill(item, session, textLabel) {
    var maxScore = getMaxChoiceScore(item.choices);
    var choices = item.choices.map(function (choice, index) {
      var selected = session.selections.choice === index;
      var classNames = ["choice"];
      if (selected) classNames.push("is-selected");
      if (session.scored && choice.score === maxScore) classNames.push("is-correct");
      if (session.scored && selected && choice.score < maxScore) classNames.push("is-wrong");
      return [
        "<label class=\"" + classNames.join(" ") + "\">",
        "<input type=\"radio\" name=\"skill-choice\" value=\"" + index + "\"" + (selected ? " checked" : "") + (session.scored ? " disabled" : "") + ">",
        "<span>" + escapeHtml(choice.text) + "</span>",
        session.scored ? "<span class=\"choice-score\">" + choice.score + "/" + maxScore + "</span>" : "",
        "</label>"
      ].join("");
    }).join("");
    return [
      "<div class=\"choice-list\">" + choices + "</div>",
      "<label for=\"skillWritten\">" + escapeHtml(textLabel) + "</label>",
      "<textarea id=\"skillWritten\" data-skill-text=\"written\" placeholder=\"Write the clinical reasoning or therapist response.\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.responses.written || "") + "</textarea>"
    ].join("");
  }

  function renderGuidedSkill(item, session) {
    return Object.keys(item.choices).map(function (category) {
      var choices = item.choices[category].map(function (choice, index) {
        var selected = session.selections[category] === index;
        var classNames = ["choice"];
        if (selected) classNames.push("is-selected");
        if (session.scored && item.idealSelections[category] === index) classNames.push("is-correct");
        if (session.scored && selected && item.idealSelections[category] !== index) classNames.push("is-wrong");
        return "<label class=\"" + classNames.join(" ") + "\"><input type=\"radio\" name=\"skill-" + escapeHtml(category) + "\" value=\"" + index + "\"" + (selected ? " checked" : "") + (session.scored ? " disabled" : "") + "><span>" + escapeHtml(choice) + "</span></label>";
      }).join("");
      return "<fieldset class=\"scenario-group\"><legend>" + escapeHtml(labelForCategory(category)) + "</legend><div class=\"choice-list\">" + choices + "</div></fieldset>";
    }).join("");
  }

  function renderEthicsSkill(item, session) {
    var selectedFlags = session.selections.flags || {};
    var flags = item.flags.map(function (flag, index) {
      var selected = !!selectedFlags[index];
      var ideal = item.idealFlags.indexOf(index) !== -1;
      var classNames = ["flag-choice"];
      if (session.scored && selected === ideal) classNames.push("is-correct");
      if (session.scored && selected !== ideal) classNames.push("is-wrong");
      return "<label class=\"" + classNames.join(" ") + "\"><input type=\"checkbox\" data-skill-flag=\"" + index + "\"" + (selected ? " checked" : "") + (session.scored ? " disabled" : "") + "><span>" + escapeHtml(flag) + "</span></label>";
    }).join("");
    return [
      "<div class=\"flag-list\">" + flags + "</div>",
      "<label for=\"skillWritten\">What must the therapist assess or do next?</label>",
      "<textarea id=\"skillWritten\" data-skill-text=\"written\" placeholder=\"Name risk, consent, documentation, consultation, or legal duties.\" " + (session.scored ? "disabled" : "") + ">" + escapeHtml(session.responses.written || "") + "</textarea>"
    ].join("");
  }

  function bindSkillCardEvents() {
    var session = state.skill;
    var start = document.getElementById("startSkillRound");
    if (start) start.addEventListener("click", function () {
      state.skill = null;
      startSkillDrill();
    });
    var next = document.getElementById("newSkillDrill");
    if (next) next.addEventListener("click", startSkillDrill);
    if (!session || session.submitted) {
      var rewrite = document.getElementById("simRewrite");
      if (rewrite && session) {
        rewrite.addEventListener("input", function () {
          session.rewrite = rewrite.value;
        });
      }
      return;
    }
    els.skillCard.querySelectorAll("[data-skill-answer]").forEach(function (button) {
      button.addEventListener("click", function () {
        scoreSkill(Number(button.getAttribute("data-skill-answer")));
      });
    });
  }

  function scoreSkill(selectedIndex) {
    var profile = getProfile();
    var session = state.skill;
    if (!session || !session.item) return;
    var item = session.item;
    var correct = selectedIndex === item.correctIndex;
    session.selectedIndex = selectedIndex;
    session.submitted = true;
    session.correct = correct;
    session.stats.total += 1;
    session.stats.correct += correct ? 1 : 0;
    session.stats.streak = correct ? session.stats.streak + 1 : 0;
    session.stats.bestStreak = Math.max(session.stats.bestStreak || 0, session.stats.streak);
    profile.settings.skillBestStreak = Math.max(profile.settings.skillBestStreak || 0, session.stats.bestStreak);
    profile.skillAttempts.unshift({
      date: new Date().toISOString(),
      drillId: item.id,
      title: item.title,
      mode: session.mode === "simulator" ? "Simulator" : "Quick Play",
      model: item.model || "Mixed",
      difficulty: item.difficulty,
      scorePercent: correct ? 100 : 0,
      missedAreas: correct ? [] : [item.gameType || item.title]
    });
    profile.skillAttempts = profile.skillAttempts.slice(0, 40);
    saveProfiles();
    renderSkill();
    renderDashboard();
    renderProgress();
  }

  function scoreModelCompareSkill(session, item) {
    var sections = item.fields.map(function (field) {
      var scored = scoreChecklist(session.responses[field.id] || "", field.checklist);
      return {
        label: field.label,
        percent: scored.percent,
        hits: scored.hits,
        modelAnswer: field.modelAnswer
      };
    });
    var missed = [];
    sections.forEach(function (section) {
      section.hits.filter(function (hit) { return !hit.matched; }).forEach(function (hit) {
        missed.push(section.label + ": " + hit.label);
      });
    });
    return {
      scorePercent: average(sections.map(function (section) { return section.percent; })) || 0,
      sections: sections,
      missedAreas: unique(missed)
    };
  }

  function scoreChoiceSkill(session, item) {
    var selected = session.selections.choice;
    var maxScore = getMaxChoiceScore(item.choices);
    var choice = selected === undefined ? null : item.choices[selected];
    var choicePercent = choice ? Math.round((choice.score / maxScore) * 100) : 0;
    var written = scoreChecklist(session.responses.written || "", item.checklist);
    var missed = written.hits.filter(function (hit) { return !hit.matched; }).map(function (hit) { return hit.label; });
    if (!choice || choice.score < maxScore) missed.unshift("Therapist response choice");
    return {
      scorePercent: Math.round((choicePercent + written.percent) / 2),
      choice: {
        selected: selected,
        selectedText: choice ? choice.text : "No selection",
        feedback: choice ? choice.feedback : "Choose a response before scoring.",
        percent: choicePercent,
        bestText: item.choices.filter(function (candidate) { return candidate.score === maxScore; })[0].text
      },
      written: written,
      missedAreas: unique(missed)
    };
  }

  function scoreGuidedSkill(session, item) {
    var guided = scoreGuided(session, item);
    var missed = guided.details.filter(function (detail) { return !detail.ok; }).map(function (detail) {
      return labelForCategory(detail.category);
    });
    return {
      scorePercent: guided.percent,
      guided: guided,
      missedAreas: unique(missed)
    };
  }

  function scoreEthicsSkill(session, item) {
    var selectedFlags = session.selections.flags || {};
    var correctFlags = 0;
    var flagDetails = item.flags.map(function (flag, index) {
      var selected = !!selectedFlags[index];
      var ideal = item.idealFlags.indexOf(index) !== -1;
      if (selected === ideal) correctFlags += 1;
      return { label: flag, selected: selected, ideal: ideal, ok: selected === ideal };
    });
    var flagPercent = Math.round((correctFlags / item.flags.length) * 100);
    var written = scoreChecklist(session.responses.written || "", item.checklist);
    var missed = flagDetails.filter(function (flag) { return !flag.ok; }).map(function (flag) { return flag.label; })
      .concat(written.hits.filter(function (hit) { return !hit.matched; }).map(function (hit) { return hit.label; }));
    return {
      scorePercent: Math.round((flagPercent + written.percent) / 2),
      flags: { percent: flagPercent, correct: correctFlags, total: item.flags.length, details: flagDetails },
      written: written,
      missedAreas: unique(missed)
    };
  }

  function scoreChecklist(text, checklist) {
    var lower = (text || "").toLowerCase();
    var hits = (checklist || []).map(function (item) {
      var matched = item.keywords.some(function (keyword) {
        return lower.indexOf(keyword.toLowerCase()) !== -1;
      });
      return { label: item.label, matched: matched };
    });
    var matchedCount = hits.filter(function (hit) { return hit.matched; }).length;
    return {
      matched: matchedCount,
      total: hits.length,
      percent: hits.length ? Math.round((matchedCount / hits.length) * 100) : 0,
      hits: hits
    };
  }

  function skillFeedback(result, item) {
    var blocks = [];
    if (result.worksheet) {
      blocks.push("<div class=\"feedback " + (result.scorePercent >= 75 ? "good" : "needs-work") + "\"><strong>Worksheet score:</strong> " + result.scorePercent + "%<br><br><strong>Checklist:</strong> " + result.worksheet.written.matched + " of " + result.worksheet.written.total + " clinical reasoning items matched.</div>");
      if (result.worksheet.missingFields && result.worksheet.missingFields.length) {
        blocks.push("<div class=\"feedback needs-work\"><strong>Fill out these sections:</strong>" + list(result.worksheet.missingFields) + "</div>");
      }
      blocks.push(renderChecklistBreakdown(result.worksheet.written));
      blocks.push("<div class=\"feedback\"><strong>Model answer:</strong><br>" + escapeHtml(item.modelAnswer || buildWorksheetModelAnswer(item)) + "</div>");
      if (item.tips && item.tips.length) {
        blocks.push("<div class=\"feedback\"><strong>Improve next time:</strong>" + list(item.tips) + "</div>");
      }
      return blocks.join("");
    }
    if (result.sections) {
      result.sections.forEach(function (section) {
        blocks.push("<div class=\"feedback " + (section.percent >= 75 ? "good" : "needs-work") + "\"><strong>" + escapeHtml(section.label) + ":</strong> " + section.percent + "%</div>");
        blocks.push(renderChecklistBreakdown({ hits: section.hits }));
        blocks.push("<div class=\"feedback\"><strong>Model answer:</strong><br>" + escapeHtml(section.modelAnswer) + "</div>");
      });
    }
    if (result.choice) {
      blocks.push("<div class=\"feedback " + (result.choice.percent >= 75 ? "good" : "needs-work") + "\"><strong>Selected response:</strong> " + escapeHtml(result.choice.selectedText) + "<br><br><strong>Feedback:</strong> " + escapeHtml(result.choice.feedback) + "<br><br><strong>Strongest response:</strong> " + escapeHtml(result.choice.bestText) + "</div>");
    }
    if (result.guided) {
      blocks.push(renderGuidedBreakdown(result.guided, item));
    }
    if (result.flags) {
      blocks.push("<div class=\"feedback " + (result.flags.percent >= 75 ? "good" : "needs-work") + "\"><strong>Risk scan:</strong> " + result.flags.correct + " of " + result.flags.total + " flags.</div>");
      blocks.push(renderFlagBreakdown(result.flags));
    }
    if (result.written) {
      blocks.push("<div class=\"feedback " + (result.written.percent >= 75 ? "good" : "needs-work") + "\"><strong>Written reasoning:</strong> " + result.written.matched + " of " + result.written.total + " checklist items.</div>");
      blocks.push(renderChecklistBreakdown(result.written));
    }
    if (!result.sections) {
      blocks.push("<div class=\"feedback\"><strong>Model answer:</strong><br>" + escapeHtml(item.modelAnswer) + "</div>");
    }
    if (item.tips && item.tips.length) {
      blocks.push("<div class=\"feedback\"><strong>Improve next time:</strong>" + list(item.tips) + "</div>");
    }
    return blocks.join("");
  }

  function buildWorksheetModelAnswer(item) {
    if (item.fields && item.fields.length) {
      return item.fields.map(function (field) {
        return field.label + ": " + field.modelAnswer;
      }).join("\n\n");
    }
    return "Use the case data to name the clinical pattern, match the model language, choose the next step, and write therapist language that fits the risk level and treatment frame.";
  }

  function renderFlagBreakdown(flags) {
    return "<div class=\"check-grid\">" + flags.details.map(function (flag) {
      var label = flag.ideal ? "Needed" : "Not central";
      var status = flag.ok ? "good" : "needs-work";
      return "<div class=\"check-item " + status + "\"><span>" + escapeHtml(label) + "</span><strong>" + escapeHtml(flag.label) + "</strong></div>";
    }).join("") + "</div>";
  }

  function renderSkillScore() {
    var session = state.skill;
    if (!session || !session.stats) {
      renderSkillAvailability();
      return;
    }
    var stats = session.stats;
    var accuracy = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
    els.skillScore.innerHTML = [
      "<div class=\"skill-score-stack\">",
      "<div><strong>" + stats.streak + "</strong><span>Current streak</span></div>",
      "<div><strong>" + stats.correct + " / " + stats.total + "</strong><span>This run</span></div>",
      "<div><strong>" + stats.bestStreak + "</strong><span>Best streak</span></div>",
      "<div><strong>" + accuracy + "%</strong><span>Accuracy</span></div>",
      "</div>",
      session.submitted ? "<div class=\"feedback " + (session.correct ? "good" : "needs-work") + "\"><strong>Last round:</strong> " + (session.correct ? "Nice hit. Keep the streak alive." : "Missed it. Reset and grab the next one.") + "</div>" : ""
    ].join("");
  }

  function renderSkillRedoGuide(result) {
    var missed = (result.missedAreas || []).slice(0, 5);
    if (!missed.length) {
      return "<div class=\"feedback good\"><strong>Redo focus:</strong> Rebuild the worksheet with more precise model language.</div>";
    }
    return "<div class=\"feedback needs-work\"><strong>Redo focus:</strong> Strengthen " + escapeHtml(missed.join(", ")) + ".</div>";
  }

  function redoSkillWithFeedback() {
    var current = state.skill;
    if (!current || !current.item || !current.result) return;
    state.skill = {
      mode: current.mode,
      item: current.item,
      selections: {},
      responses: {},
      scored: false,
      result: null,
      feedbackGuide: current.result,
      startedAt: new Date().toISOString()
    };
    renderSkill();
  }

  function renderWeakPractice() {
    var profile = getProfile();
    var missed = getMissedTopics(profile).slice(0, 8);
    var due = getDueReviewItems(profile).slice(0, 6);
    var model = getWeakQuizModel(profile) || "Bowen";
    els.skillCard.innerHTML = [
      "<div class=\"skill-meta\"><span class=\"tag\">Weak-Area Worksheet</span><span class=\"tag\">" + escapeHtml(model) + "</span></div>",
      "<h3>Practice Weak Spots With Case Writing</h3>",
      "<div class=\"worksheet-intro\"><strong>Clinical worksheet first</strong><p>Load a written drill targeted to your missed areas. Quiz review is still available, but it is clearly labeled as exam recall.</p></div>",
      due.length ? "<div class=\"weak-list\">" + due.map(function (item) {
        return "<div class=\"weak-item\"><strong>" + escapeHtml(item.title || item.topic) + "</strong><br><span>Due " + escapeHtml(formatDue(item.dueAt)) + " / " + escapeHtml(item.kind) + "</span></div>";
      }).join("") + "</div>" : "",
      missed.length ? "<div class=\"weak-list\">" + missed.map(function (item) {
        return "<div class=\"weak-item\"><strong>" + escapeHtml(item.topic) + "</strong><br><span>" + item.count + " miss" + (item.count === 1 ? "" : "es") + "</span></div>";
      }).join("") + "</div>" : "<div class=\"empty-state\">No misses yet. Bowen is queued first because it is the priority model.</div>",
      "<div class=\"button-row\"><button type=\"button\" id=\"startWeakWorksheet\">Load Weak-Area Worksheet</button><button class=\"secondary\" type=\"button\" id=\"startWeakQuiz\">Start Weak-Area Quiz</button><button class=\"secondary\" type=\"button\" id=\"startDueReview\">Start Due Review Quiz</button></div>"
    ].join("");
    els.skillScore.innerHTML = "<div class=\"feedback\"><strong>Worksheet target:</strong> " + escapeHtml(model) + "</div>";
    document.getElementById("startWeakWorksheet").addEventListener("click", function () {
      startWeakSkillWorksheet(model);
    });
    document.getElementById("startWeakQuiz").addEventListener("click", function () {
      startWeakQuiz(model);
    });
    document.getElementById("startDueReview").addEventListener("click", function () {
      showView("quiz");
      setSelectIfOption(els.quizMode, "review");
      setSelectIfOption(els.quizDifficulty, "mixed");
      setSelectIfOption(els.quizTopic, "all");
      setSelectIfOption(els.quizCount, "10");
      startQuiz();
    });
  }

  function startWeakSkillWorksheet(model) {
    var target = model || getWeakQuizModel(getProfile()) || "Bowen";
    var pool = (DATA.skillDrills || []).filter(function (drill) {
      return skillMatchesTarget(drill, target);
    });
    if (!pool.length) {
      pool = DATA.skillDrills || [];
    }
    var item = shuffle(pool)[0];
    if (!item) return;
    setSelectIfOption(els.skillMode, item.type);
    setSelectIfOption(els.skillDifficulty, "mixed");
    populateSkillCases();
    setSelectIfOption(els.skillCase, item.id);
    state.skill = {
      mode: item.type,
      item: item,
      selections: {},
      responses: {},
      scored: false,
      result: null,
      feedbackGuide: null,
      startedAt: new Date().toISOString()
    };
    renderSkill();
  }

  function skillMatchesTarget(drill, target) {
    var text = [
      drill.type,
      drill.title,
      drill.prompt,
      drill.modelAnswer,
      (drill.tags || []).join(" ")
    ].join(" ").toLowerCase();
    var needle = String(target || "").toLowerCase();
    if (!needle) return false;
    if (needle === "ethics") return /ethic|risk|safety|legal|consent|document/.test(text);
    if (needle === "systemic roles") return /systemic|role|assessment|treatment|termination/.test(text);
    return text.indexOf(needle) !== -1;
  }

  function openWeakPractice() {
    showView("skill");
    setSelectIfOption(els.skillMode, "quick");
    populateSkillCases();
    startSkillDrill({ weak: true });
  }

  function startWeakQuiz(model) {
    var target = model || getWeakQuizModel(getProfile()) || "Bowen";
    state.quiz = null;
    showView("quiz");
    setSelectIfOption(els.quizMode, "practice");
    els.quizDifficulty.value = "mixed";
    if (Array.prototype.some.call(els.quizTopic.options, function (optionNode) { return optionNode.value === target; })) {
      els.quizTopic.value = target;
    } else {
      els.quizTopic.value = "all";
    }
    els.quizCount.value = "20";
    startQuiz();
  }

  function getWeakQuizModel(profile) {
    var counts = {};
    (profile.quizAttempts || []).forEach(function (attempt) {
      (attempt.missed || []).forEach(function (miss) {
        if (miss.model) counts[miss.model] = (counts[miss.model] || 0) + 1;
      });
    });
    (profile.scenarioAttempts || []).forEach(function (attempt) {
      if (attempt.scorePercent < 85 && attempt.model) counts[attempt.model] = (counts[attempt.model] || 0) + 1;
    });
    (profile.skillAttempts || []).forEach(function (attempt) {
      if (attempt.scorePercent < 85 && attempt.model) counts[attempt.model] = (counts[attempt.model] || 0) + 1;
    });
    (profile.clinicAttempts || []).forEach(function (attempt) {
      (attempt.answers || []).forEach(function (answer) {
        if (!answer.correct && answer.model) counts[answer.model] = (counts[answer.model] || 0) + 1;
      });
    });
    var ranked = Object.keys(counts).sort(function (a, b) {
      return counts[b] - counts[a] || (a === "Bowen" ? -1 : b === "Bowen" ? 1 : a.localeCompare(b));
    });
    return ranked[0] || null;
  }

  function getMaxChoiceScore(choices) {
    return Math.max.apply(null, choices.map(function (choice) { return choice.score; }));
  }

  function modelForSkill(item) {
    if (item.type === "bowenTrainer") return "Bowen";
    if (item.type === "eftMapper") return "EFT";
    if (item.type === "ethicsScanner") return "Ethics";
    if (item.type === "modelCompare") return "Comparison";
    if (item.tags && item.tags.indexOf("Bowen") !== -1) return "Bowen";
    if (item.tags && item.tags.indexOf("EFT") !== -1) return "EFT";
    if (item.tags && item.tags.indexOf("Ethics") !== -1) return "Ethics";
    return "Systemic Roles";
  }

  function labelForSkillMode(mode) {
    var labels = {
      modelCompare: "Case Conceptualization",
      responsePractice: "Therapist Language",
      bowenTrainer: "Bowen Process Map",
      eftMapper: "EFT Cycle Map",
      nextIntervention: "Next-Step Plan",
      ethicsScanner: "Risk / Ethics Review",
      weak: "Weak-Area Worksheet"
    };
    return labels[mode] || mode;
  }

  function setSelectIfOption(select, value) {
    if (!select) return;
    var hasValue = Array.prototype.some.call(select.options, function (optionNode) {
      return optionNode.value === String(value);
    });
    if (hasValue) select.value = String(value);
  }

  function scoreLabel(score) {
    if (score >= 85) return "Strong clinical reasoning";
    if (score >= 70) return "Solid, with refinements";
    if (score >= 50) return "Developing answer";
    return "Needs a slower assessment";
  }

  function renderProgress() {
    var profile = getProfile();
    renderMasteryDashboard(profile);

    els.quizHistory.innerHTML = historyTable(profile.quizAttempts || [], [
      { key: "date", label: "Date", render: formatDate },
      { key: "mode", label: "Mode", render: function (value) { return value || "practice"; } },
      { key: "scorePercent", label: "Score", render: function (value) { return value + "%"; } },
      { key: "total", label: "Items" },
      { key: "missed", label: "Missed", render: function (value) {
        return value && value.length ? unique(value.map(function (item) { return item.topic; })).join(", ") : "None";
      } }
    ]);

    if (els.matchHistory) {
      els.matchHistory.innerHTML = historyTable(profile.matchAttempts || [], [
        { key: "date", label: "Date", render: formatDate },
        { key: "title", label: "Dialogue" },
        { key: "model", label: "Answer" },
        { key: "selected", label: "Picked" },
        { key: "scorePercent", label: "Score", render: function (value) { return value + "%"; } }
      ]);
    }

    els.scenarioHistory.innerHTML = historyTable(profile.scenarioAttempts || [], [
      { key: "date", label: "Date", render: formatDate },
      { key: "title", label: "Case" },
      { key: "mode", label: "Mode" },
      { key: "scorePercent", label: "Score", render: function (value) { return value + "%"; } }
    ]);

    els.skillHistory.innerHTML = historyTable(profile.skillAttempts || [], [
      { key: "date", label: "Date", render: formatDate },
      { key: "title", label: "Drill" },
      { key: "mode", label: "Mode" },
      { key: "scorePercent", label: "Score", render: function (value) { return value + "%"; } },
      { key: "missedAreas", label: "Practice", render: function (value) {
        return value && value.length ? value.slice(0, 3).join(", ") : "None";
      } }
    ]);

    if (els.clinicHistory) {
      els.clinicHistory.innerHTML = historyTable(profile.clinicAttempts || [], [
        { key: "date", label: "Date", render: formatDate },
        { key: "title", label: "Session", render: function (value) { return value || "Daily Clinic"; } },
        { key: "mode", label: "Mode", render: function (value) { return value || "Branching Session"; } },
        { key: "scorePercent", label: "Score", render: function (value) { return value + "%"; } },
        { key: "missedAreas", label: "Practice", render: function (value) {
          return value && value.length ? value.slice(0, 3).join(", ") : "None";
        } }
      ]);
    }
  }

  function renderMasteryDashboard(profile) {
    if (!els.masteryDashboard) return;
    var due = getDueReviewItems(profile);
    var missed = getMissedTopics(profile).slice(0, 5);
    var justified = getJustifiedMisses(profile).slice(0, 4);
    var readiness = getReadinessByArea(profile);
    var clinicAttempts = profile.clinicAttempts || [];
    var matchAttempts = profile.matchAttempts || [];
    var lastClinic = clinicAttempts[0] || null;
    var weakest = readiness.length ? readiness.slice().sort(function (a, b) {
      return a.percent - b.percent || b.count - a.count;
    })[0] : null;

    els.masteryDashboard.innerHTML = [
      "<div class=\"mastery-grid\">",
      masteryMetric(weakest ? weakest.area : "--", "Weakest area"),
      masteryMetric(due.length ? formatDue(due[0].dueAt) : "None", "Next review due"),
      masteryMetric(missed.length ? missed[0].topic : "--", "Most missed concept"),
      masteryMetric(String(justified.length), "Missed with justification"),
      masteryMetric(String(matchAttempts.length), "Model matches"),
      masteryMetric(String(clinicAttempts.length), "Clinic rounds"),
      "</div>",
      readiness.length ? "<div class=\"readiness-list\">" + readiness.map(function (item) {
        return "<div class=\"readiness-row\"><span>" + escapeHtml(item.area) + "</span><strong>" + item.percent + "%</strong><em>" + item.count + " data point" + (item.count === 1 ? "" : "s") + "</em></div>";
      }).join("") + "</div>" : "<div class=\"empty-state\">Complete a mixed quiz to build readiness by area.</div>",
      lastClinic ? "<div class=\"feedback\"><strong>Last clinic:</strong> " + lastClinic.scorePercent + "% / " + escapeHtml(labelForClinicLevel(lastClinic.level)) + "</div>" : "",
      missed.length ? "<div class=\"feedback\"><strong>Most missed concepts:</strong>" + list(missed.map(function (item) { return renderWeakSpotLabel(item) + " (" + item.count + ")"; })) + "</div>" : "",
      justified.length ? "<div class=\"feedback needs-work\"><strong>Review these misses:</strong>" + list(justified.map(function (item) { return item.topic + ": " + item.justification; })) + "</div>" : ""
    ].join("");
  }

  function masteryMetric(value, label) {
    return "<div class=\"mastery-metric\"><strong>" + escapeHtml(value) + "</strong><span>" + escapeHtml(label) + "</span></div>";
  }

  function historyTable(rows, columns) {
    if (!rows || rows.length === 0) {
      return "<div class=\"empty-state\">No history yet.</div>";
    }
    return [
      "<div class=\"table-wrap\"><table><thead><tr>",
      columns.map(function (column) { return "<th>" + escapeHtml(column.label) + "</th>"; }).join(""),
      "</tr></thead><tbody>",
      rows.slice(0, 12).map(function (row) {
        return "<tr>" + columns.map(function (column) {
          var value = row[column.key];
          var rendered = column.render ? column.render(value, row) : value;
          return "<td>" + escapeHtml(String(rendered)) + "</td>";
        }).join("") + "</tr>";
      }).join(""),
      "</tbody></table></div>"
    ].join("");
  }

  function clearActiveProfile() {
    var profile = getProfile();
    profile.quizAttempts = [];
    profile.matchAttempts = [];
    profile.scenarioAttempts = [];
    profile.skillAttempts = [];
    profile.clinicAttempts = [];
    profile.reviewQueue = [];
    profile.flashcardStats = {};
    profile.masteryStats = {};
    state.quiz = null;
    state.match = null;
    state.scenario = null;
    state.skill = null;
    state.clinic = null;
    saveProfiles();
    saveScenarioMirror();
    renderAll();
  }

  function getMissedTopics(profile) {
    var counts = {};
    function add(model, domain, topic) {
      var label = topic || domain || model || "Review item";
      var key = [model || "", domain || "", label].join("|");
      if (!counts[key]) {
        counts[key] = {
          model: model || "",
          domain: domain || "",
          topic: label,
          count: 0
        };
      }
      counts[key].count += 1;
    }
    (profile.quizAttempts || []).forEach(function (attempt) {
      (attempt.missed || []).forEach(function (miss) {
        add(miss.model, miss.domain || domainForQuestion(miss), miss.topic);
      });
    });
    (profile.matchAttempts || []).forEach(function (attempt) {
      if (!attempt.correct) add(attempt.model || "Model recognition", "Match the Model", attempt.model || "Model clues");
    });
    (profile.scenarioAttempts || []).forEach(function (attempt) {
      (attempt.missedAreas || []).forEach(function (area) {
        add(attempt.model || "Clinical cases", attempt.title, area);
      });
    });
    (profile.skillAttempts || []).forEach(function (attempt) {
      (attempt.missedAreas || []).forEach(function (area) {
        add(attempt.model || "Skill lab", attempt.title || attempt.mode, area);
      });
    });
    (profile.clinicAttempts || []).forEach(function (attempt) {
      (attempt.answers || []).forEach(function (answer) {
        if (!answer.correct) add(answer.model, answer.domain, answer.topic);
      });
    });
    (profile.reviewQueue || []).forEach(function (item) {
      if (item && item.misses > 0) {
        add(item.model, item.domain, item.topic || item.title);
        counts[[item.model || "", item.domain || "", item.topic || item.title || "Review item"].join("|")].count += Math.max(0, item.misses - 1);
      }
    });
    return Object.keys(counts).map(function (key) {
      return counts[key];
    }).sort(function (a, b) {
      return b.count - a.count || renderWeakSpotLabel(a).localeCompare(renderWeakSpotLabel(b));
    });
  }

  function getDueReviewItems(profile) {
    var now = Date.now();
    return (profile.reviewQueue || []).filter(function (item) {
      return item && item.dueAt && new Date(item.dueAt).getTime() <= now && item.stage < REVIEW_INTERVAL_DAYS.length;
    }).sort(function (a, b) {
      return new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime();
    });
  }

  function getDueReviewQuestions(profile) {
    var dueIds = getDueReviewItems(profile).filter(function (item) {
      return item.kind === "quiz";
    }).map(function (item) { return item.id; });
    return DATA.questions.filter(function (question) {
      return dueIds.indexOf(question.id) !== -1;
    });
  }

  function updateReviewFromQuizAnswer(profile, answer) {
    upsertReviewItem(profile, {
      kind: "quiz",
      id: answer.questionId,
      title: answer.topic,
      model: answer.model,
      domain: answer.domain,
      topic: answer.topic,
      prompt: answer.prompt
    }, answer.correct && !answer.hintUsed);
  }

  function updateReviewFromScenarioAttempt(profile, attempt) {
    if (!attempt || !attempt.scenarioId) return;
    var existing = (profile.reviewQueue || []).find(function (queued) {
      return queued.kind === "scenario" && queued.id === attempt.scenarioId;
    });
    if (attempt.scorePercent >= 85 && !existing) return;
    upsertReviewItem(profile, {
      kind: "scenario",
      id: attempt.scenarioId,
      title: attempt.title,
      model: attempt.model,
      domain: attempt.model === "Ethics" ? "Ethics / legal standards" : "Clinical case transfer",
      topic: attempt.title,
      errorCase: !!attempt.errorCase
    }, attempt.scorePercent >= 85);
  }

  function updateReviewFromFlashcardAnswer(profile, answer) {
    upsertReviewItem(profile, {
      kind: "flashcard",
      id: answer.id,
      title: answer.topic,
      model: answer.model,
      domain: answer.domain,
      topic: answer.topic,
      prompt: answer.prompt
    }, answer.correct);
  }

  function updateReviewFromClinicDrillAnswer(profile, answer, item) {
    var kind = item && item.type === "quizReview" ? "quiz" : "clinicDrill";
    upsertReviewItem(profile, {
      kind: kind,
      id: answer.id,
      title: answer.topic,
      model: answer.model,
      domain: answer.domain,
      topic: answer.topic,
      prompt: answer.prompt
    }, answer.correct);
  }

  function updateFlashcardStats(profile, answer) {
    profile.flashcardStats = profile.flashcardStats && typeof profile.flashcardStats === "object" ? profile.flashcardStats : {};
    var stats = profile.flashcardStats[answer.id] || {
      attempts: 0,
      correct: 0,
      misses: 0
    };
    stats.attempts += 1;
    if (answer.correct) {
      stats.correct += 1;
    } else {
      stats.misses += 1;
    }
    stats.lastResult = answer.correct ? "correct" : "missed";
    stats.lastReviewedAt = answer.answeredAt;
    profile.flashcardStats[answer.id] = stats;
  }

  function upsertReviewItem(profile, item, success) {
    profile.reviewQueue = Array.isArray(profile.reviewQueue) ? profile.reviewQueue : [];
    var existing = profile.reviewQueue.find(function (queued) {
      return queued.kind === item.kind && queued.id === item.id;
    });
    var now = new Date();
    var target = existing || {
      kind: item.kind,
      id: item.id,
      createdAt: now.toISOString(),
      misses: 0,
      reviews: 0,
      stage: 0
    };
    target.title = item.title;
    target.model = item.model;
    target.domain = item.domain;
    target.topic = item.topic;
    target.prompt = item.prompt || target.prompt || "";
    target.errorCase = !!item.errorCase;
    target.lastReviewedAt = now.toISOString();
    target.reviews += 1;
    if (success) {
      target.stage = Math.min((target.stage || 0) + 1, REVIEW_INTERVAL_DAYS.length - 1);
    } else {
      target.stage = 0;
      target.misses += 1;
    }
    target.dueAt = addDays(now, REVIEW_INTERVAL_DAYS[target.stage]).toISOString();
    if (!existing) profile.reviewQueue.push(target);
    profile.reviewQueue = profile.reviewQueue.slice(-160);
  }

  function getRedoScenario(profile) {
    var dueScenario = getDueReviewItems(profile).filter(function (item) {
      return item.kind === "scenario";
    })[0];
    var attempt = dueScenario || (profile.scenarioAttempts || []).find(function (item) {
      return item.scorePercent < 85 && item.scenarioId;
    });
    if (!attempt) return null;
    var scenarioId = attempt.id || attempt.scenarioId;
    var scenario = (DATA.scenarios || []).find(function (item) { return item.id === scenarioId; });
    return scenario ? {
      scenarioId: scenario.id,
      title: scenario.title,
      errorCase: !!scenario.errorCase
    } : null;
  }

  function getJustifiedMisses(profile) {
    var misses = [];
    (profile.quizAttempts || []).forEach(function (attempt) {
      (attempt.missed || []).forEach(function (miss) {
        if (miss.justification) {
          misses.push({
            topic: miss.topic || "Missed item",
            model: miss.model || "",
            justification: miss.justification
          });
        }
      });
    });
    return misses;
  }

  function getReadinessByArea(profile) {
    var stats = {};
    function add(area, percent) {
      var key = area || "General";
      if (!stats[key]) stats[key] = { area: key, total: 0, count: 0 };
      stats[key].total += percent;
      stats[key].count += 1;
    }
    (profile.quizAttempts || []).forEach(function (attempt) {
      (attempt.answers || []).forEach(function (answer) {
        add(answer.domain || domainForQuestion(answer), answer.correct ? 100 : 0);
      });
    });
    (profile.matchAttempts || []).forEach(function (attempt) {
      add("Model recognition", attempt.scorePercent || 0);
    });
    (profile.scenarioAttempts || []).forEach(function (attempt) {
      add(attempt.model || "Clinical cases", attempt.scorePercent || 0);
    });
    (profile.skillAttempts || []).forEach(function (attempt) {
      add(attempt.model || "Skill lab", attempt.scorePercent || 0);
    });
    (profile.clinicAttempts || []).forEach(function (attempt) {
      (attempt.answers || []).forEach(function (answer) {
        add(answer.domain || answer.model || "Daily Clinic", answer.correct ? 100 : 0);
      });
    });
    return Object.keys(stats).map(function (key) {
      return {
        area: stats[key].area,
        percent: Math.round(stats[key].total / stats[key].count),
        count: stats[key].count
      };
    }).sort(function (a, b) {
      return a.area.localeCompare(b.area);
    });
  }

  function addDays(date, days) {
    return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
  }

  function formatDue(value) {
    if (!value) return "None";
    var date = new Date(value);
    if (isNaN(date.getTime())) return "None";
    var today = new Date();
    if (date.toDateString() === today.toDateString()) return "Today";
    return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  }

  function findFlashcard(id) {
    return (DATA.flashcards || []).find(function (card) { return card.id === id; });
  }

  function findClinicDrill(id) {
    return (DATA.clinicDrills || []).find(function (drill) { return drill.id === id; });
  }

  function findQuestion(id) {
    return (DATA.questions || []).find(function (question) { return question.id === id; });
  }

  function matchesClinicTarget(item, targetWeak) {
    if (!item || !targetWeak || (!targetWeak.topic && !targetWeak.model)) return false;
    if (targetWeak.model && item.model === targetWeak.model) return true;
    var needle = normalizeText(targetWeak.topic || "");
    if (!needle) return false;
    var haystack = normalizeText([
      item.model,
      item.domain,
      item.topic,
      item.title,
      item.front,
      item.prompt
    ].join(" "));
    return needle.split(" ").filter(Boolean).some(function (part) {
      return part.length > 2 && haystack.indexOf(part) !== -1;
    });
  }

  function labelForClinicLevel(level) {
    var labels = {
      learn: "Learn mode",
      practice: "Practice mode",
      exam: "Exam mode"
    };
    return labels[level] || "Practice mode";
  }

  function labelForFlashcardType(type) {
    var labels = {
      basic: "Basic Recall",
      situation: "Situation Card",
      modelClue: "Model Clue",
      compare: "Compare Card",
      ethics: "Ethics Card"
    };
    return labels[type] || "Flashcard";
  }

  function labelForCategory(category) {
    var labels = {
      conceptualization: "Conceptualization",
      therapistRole: "Therapist Role",
      intervention: "Intervention",
      nextStep: "Next Step",
      ethicsRisk: "Ethics and Risk",
      triangle: "Triangle",
      fusion: "Fusion",
      cutoff: "Cutoff",
      differentiation: "Differentiation",
      multigenerational: "Multigenerational Pattern",
      coachMove: "Bowen Coach Move",
      cycle: "Negative Cycle",
      pursuerMove: "Pursuer Move",
      withdrawerMove: "Withdrawer Move",
      secondaryEmotion: "Secondary Emotion",
      primaryEmotion: "Primary Emotion",
      attachmentFear: "Attachment Fear",
      unmetNeed: "Unmet Need"
    };
    return labels[category] || category;
  }

  function saveScenarioMirror() {
    var mirror = {};
    state.profiles.forEach(function (profile) {
      mirror[profile.id] = profile.scenarioAttempts || [];
    });
    safeStorage.setItem(SCENARIO_KEY, JSON.stringify(mirror));
  }

  function readJson(key, fallback) {
    try {
      var raw = safeStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  var safeStorage = {
    memory: {},
    getItem: function (key) {
      try {
        return window.localStorage.getItem(key);
      } catch (error) {
        return this.memory[key] || null;
      }
    },
    setItem: function (key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        this.memory[key] = String(value);
      }
    }
  };

  function average(values) {
    var clean = values.filter(function (value) { return typeof value === "number" && !isNaN(value); });
    if (clean.length === 0) return null;
    return Math.round(clean.reduce(function (sum, value) { return sum + value; }, 0) / clean.length);
  }

  function unique(values) {
    return values.filter(function (value, index, array) {
      return value && array.indexOf(value) === index;
    });
  }

  function shuffle(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  function formatDate(value) {
    if (!value) return "";
    var date = new Date(value);
    if (isNaN(date.getTime())) return value;
    return date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
})();
