import React from 'react'
import '../styles/Research.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import AccordeonCard from '../Components/Cards/AccordeonCard'
import CreatingListCard from '../Components/Cards/CreatingListCard'

let publications = [
    "Taras, V., Baak, D., Caprar, D., Dowd, D., Froesee, F., Jimenezf, A., & Magnussong, P. (2019). Diverse effects of diversity: Disaggregating effects of diversity in global virtual team. Journal of International Management.",
    "E Tavoletti, RD Stephens, L Dong, The impact of peer evaluation on team effort, productivity, motivation and performance in global virtual teams, Team Performance Management: An International Journal",
    "Baumanis, L., Taras, V., Lynden, K., Tavoletti, E., & Muth, T. (2019). The X-Culture Global Business Program: A Short-Term International Study-Abroad Experience. In M. A. Gonzalez-Perez, K. Lynden, & V. Taras (Eds.), The Palgrave Handbook of Learning and Teaching International Business and Management. Cham, Switzerland: Palgrave MacMillan.",
    "Taras, V. (2019). X-Culture Academy: Kids Learning International Business Through Experience. In M. A. Gonzalez-Perez, K. Lynden, & V. Taras (Eds.), The Palgrave Handbook of Learning and Teaching International Business and Management. Cham, Switzerland: Palgrave MacMillan.",
    "Taras, V. (2019). The X-Culture Coaching Program: Learning Team Management Through Practice. In M. A. Gonzalez-Perez, K. Lynden, & V. Taras (Eds.), The Palgrave Handbook of Learning and Teaching International Business and Management. Cham, Switzerland: Palgrave MacMillan.",
    "Mulik, S., Srivastava, M., Yajnik, N., & Taras, V. (In press). ‘Antecedents and Outcomes of Flow Experience of MOOC Users. Journal of International Education in Business.",
    "Taras, V. (In press). Conceptualizing and Measuring Cultural Intelligence: Important Unanswered Questions. European Journal of International Management.",
    "Modaresnezhad, M., Palvia, P., Iyer, L., & Taras, V. (In press). Information Technology (IT) Enabled Crowdsourcing: A Conceptual Framework. Information Processing and Management.",
    "McLarnon, M., O’Neill, T., Taras, V., Donia, M., Steel, P., & Law, D. (in press). Global Virtual Team Communication, Coordination, and Performance across Three Peer Feedback Strategies. Canadian Journal of Behavioural Science / Revue canadienne des sciences du comportement.",
    "Palvia, P., Dissanayake, I., Amoako-Gyampah, K., Mehta, N., & Taras, V. (2019 in press). Competition Matters! Self-Efficacy, Effort and Performance in Crowdsourcing Teams. Information & Management.",
    "Poór, J., Varga, E., Szira, Z., Kollár, C., & Taras, V. (2018). Central and Eastern European Experience of the X-Culture Project in Teaching International Management and Cross-Cultural Communication. Journal of Intercultural Management, 10(1), 5-41.",
    "Taras, V., Tullar, W., Liu, T., & Pierce, J. (in press). Straight from the Horse’s Mouth: Justifications and Prevention Strategies Provided by Free Riders on Global Virtual Teams. Journal for Management and Training for Industries.",
    "Poór, J., Varga, E., Machová, R., & Taras, V. (2018). Nové Formy Vzdelávania Prostredníctvom „X-Culture“ Projektu (New Forms of Education under “X-Culture” Project). Ekonomické Rozhľady (Economic Review), 47(1), 9-25.",
    "Taras, V., Mimeli, E., Wang, Z., & Harms, H. (in press). Family Involvement in Publicly-Traded Firms and Firm Performance: A Meta-Analysis. Management Research Review.",
    "Jimenez, A., Boehe, D., Taras, V., & Caprar, D. (2017). Working across Boundaries: Current and Future Perspectives on Global Virtual Teams. Journal of International Management. 23(4): 341-349.",
    "Poór, J., Varga, E., Machova, R., Taras, V. (in press) X-Culture: A nemzetközi együttműködés egy példája In Borgulya Ágnes és Konczosné Szombathelyi Márta (Szerk.) Vállalati kommunikációmenedzsment (pp. 134-148), L’Harmattan Kiadó: Budapest (in Hungarian).",
    "Tullar, W., Taras, V. (2017). Free Riding: A Multi-Cultural Study. International Journal of the Academic Business World., 11(1):39-48.",
    "Poór, J., Varga, E., Machova, R., Taras, V. (2016), X-Culture: An international project in the light of experience gained over the years (2010-2016). Journal of Eastern European and Central Asian Research. (3)2: 1-10.",
    "Guenkel, M., Schlaeger, C., & Taras, V. (2016). Cultural Values, Emotional Intelligence, and Conflict Handling Styles: A Global Study. Journal of World Business. 51(4): 568–585.",
    "Zakaria, N., & Yusof, S. A. M. (2018). Crossing cultural boundaries using the internet: Toward building a model of swift trust formation in global virtual teams. Journal of International Management,",
    "Sujin Jang (forthcoming). Cultural Brokerage and Creative Performance in Multicultural Teams. Organizational Science.",
    "Zwerg-Villegas, Anne Marie & Martínez, Jaime. 2016. Experiential learning with global virtual teams: Developing intercultural and virtual competencies. Magis Revista Internacional de Investigación en Educación. 9(18): 129-146.",
    "Arora, S. (2017). Teaching Pedagogical Innovation for International Marketing in India. Journal of International Business Education.",
    "Jimenez, A., Boehne, D., Taras, V., & Caprar, D. (2017). Working across Boundaries: Current and Future Perspectives on Global Virtual Teams Article reference. Journal of International Management.",
    "Taras, V., & Gonzalez-Perez, M. A. (Eds.). (2015). The Handbook of Experiential Learning in International Business. Houndmills, UK: Palgrave Macmillan (ISBN: 9781137467706).",
    "Poór, J., Varga, E., Machova, R., Taras, V. (2017) X-Culture: A nemzetközi együttműködés egy példája In Borgulya Ágnes és Konczosné Szombathelyi Márta (Szerk.) Vállalati kommunikációmenedzsment (pp. 134-148), L’Harmattan Kiadó: Budapest (in Hungarian).",
    "Tullar, W., Taras, V. (2017). Free Riding: A Multi-Cultural Study. International Journal of the Academic Business World.",
    "Poór, J., Varga, E., Machova, R., Taras, V. (in press), X-Culture: An international project in the light of experience gained over the years (2010-2016). Journal of Eastern European and Central Asian Research. (3)2: 1-10.",
    "Guenkel, M., Schlaeger, C., & Taras, V. (2016). Cultural Values, Emotional Intelligence, and Conflict Handling Styles: A Global Study. Journal of World Business. 51(4):  568–585.",
    "Alon, I., Boulanger, M., Meyers, J., Vas, T.(alphabetical). (2016). The Development and Validation of the Business Cultural Intelligence Quotient. Cross Cultural and Strategic Management (former Cross Cultural Management: An International Journal), 23(1): 78-100.",
    "Gonzalez-Perez, M.A, Velez-Calle, A., Cathro, V., Caprar, D.V. & Taras, V. (2014) Virtual teams: Challenges and opportunities for International Business teaching and learning. Journal of Teaching in International Business. Paciber Special Issue, 25:200-213.",
    "Magnusson, P., Schuster, A., & Taras, V. (2014). A Process-Based Explanation of the Psychic Distance Paradox: Evidence from Global Virtual Teams. Management International Review, 54(3): 283-306",
    "Poór, J., Machova, R., Kerekes, K., Király, Á., & Taras, V. (2013). Experiences and Conclusions on the X-Culture International Case-Study Program. Human Political Review, 1:13-23.",
    "Taras, V., Berg, D. M., Erdener, C. B., Hagen, J. M., Johns, A., Meszoely, G., . . . Smith, R. C. (2015). More Food for Thought: Other Experiential Learning Projects. In V. Taras & M. A. Gonzalez-Perez (Eds.), The Handbook of Experiential Learning in International Business (pp. 873-886). Houndmills, UK: Palgrave Macmillan.",
    "Gonzalez-Perez, M. A., & Taras, V. (2015). Conceptual and Theoretical Foundations: Experiential Learning in International Business and International Management Fields. In V. Taras & M. A. Gonzalez-Perez (Eds.), The Handbook of Experiential Learning in International Business (pp. 12-17). Houndmills, UK: Palgrave Macmillan.",
    "Taras, V., & Ordeñana, X. (2015). X-Culture: Challenges and Best Practices of Large-Scale Experiential Collaborative Projects. In V. Taras & M. A. Gonzalez-Perez (Eds.), The Handbook of Experiential Learning in International Business (pp. 131-149). Houndmills, UK: Palgrave Macmillan.",
    "Taras, V., Caprar, D., Rottig, D., Sarala, R., Zakaria, N., Zhao, F. , Jimenez, A., Lei, W.S., Minor, M., Bryla, P., Ordenana, X., Bode, A., Schuster, A., Vaiginiene, E., Froese, F., Bathula, H., Yajnik, N., Baldegger, R., Huang, V., (2013). A global classroom? A multi-method evaluation of effectiveness of international collaboration exercises in international management education. Academy of Management Learning & Education.",
    "Taras, V., Bryla, P., Gupta, S. F., Jiménez, A., Minor, M. S., Muth, T., Ordenana, X., Rottig, D., Sarala, R. M., Zakaria, N., & Zdravkovic, S. (2013). Changing the Face of International Business Education: The X-Culture Project. Academy of International Business Insights, 12(4):11-17.",
    "Taras, V., Muth, T., & Gitlin, B. (2013). International collaboration experience: Using multi-country student collaboration projects to enhance learning and faculty research. In R. Griffith & L. F. Thompson (Eds.), The age of internationalization: Developing an international organizational psychology curriculum. Pringer Publishing."
];
let articles = [
    "The X-CULTURE TEXTBOOK OF GLOBAL VIRTUAL COLLABORATION",
    "The Effects Of Lingua Franca Fluency On The Choice Of Communication Media",
    "Does National Culture Influence Peer Evaluations?",
    "The Effects of Cultural Value Alignment on Interpersonal Dynamics: The Similarity-Attraction Theory vs. The Attraction of the Opposites Theory",
    "An Examination Of The Impact Of Study Abroad On Global Virtual Teams",
    "The Clash Of Different Conflict Management Styles In Multinational Teams",
    "Seeing Status Through Different Lenses: Status Disagreement In Culturally Diverse Teams",
    "The Clash Of Different Conflict Management Styles In Multinational Teams",
    "A Much Richer Picture of the GVT Dynamics: A Qualitative Multi-Study Research Stream",
    "The Complicated Story Of Trust In Global Virtual Teams",
    "Multiple Intelligence and Conflict in Multicultural Teams",
    "Peak Performance Alignment",
    "National Culture’s Influence on the Development of Cultural Intelligence",
    "What matters more in multicultural teams – CQ or EQ?",
    "Member Satisfaction in Virtual Teams",
    "Positive Effects of Free-Riders on GVT performance",
    "Gender roles in GVTs",
    "Does it Pay to Spend Time on Getting to Know your Team Members? The Effects of Inter-Member Acquaintanceship Level in GVTs.",
    "The Role Of Previous Foreign Culture Experience And Cultural Intelligence For Creative Performance In Multcultural Teams",
    "Contextualizing the Influence that Cultural Diversity Exerts on Team Processes and Team Performance: A Cultural Intelligence and Media Richness Perspective",
    "Predictors and Consequences of Differences in Supervisor Evaluations and Feedback",
    "Leadership and conflict: The impact of leadership on conflict level in multicultural and homogenous virtual teams",
    "Creativity in Global Virtual Teams: The impact of different online communication tools on creativity",
    "Do bicultural / multicultural team members influence team outcomes?",
    "Free-riding: Antecedents, Consequences, Ways to minimize free-riding in GVTs",
    "Development of a better way to measure Cultural Intelligence",
    "Expectation Versus Experience Congruence (EVOC) In GVTs",
    "Emotional Intelligence in GVTs",
    "Proactive Personality and GVT dynamics and performance",
    "Comparative analysis of various forms of team diversity and inter-member distance in GVTs",
    "Students at Better Schools Do Better, or Do They? A Longitudinal Multi-University, Multi-Country Study Into Predictive Power of the University Prestige in Student Performance.",
    "Negotiating Gender Roles In Global Virtual Teams: Middleastern Executives At The Crossroads",
    "Goal Setting, Competitiveness, and GVT Performance",
    "The Relationship between Team Cultural Values and Emergent Leadership Style In Self-Managed Global Virtual Teams",
    "The Effects of the Team Leadership Structure on Team Dynamics and Performance in GVT Context",
    "Contextual Conditionalities For Global Virtual Team Leadership Performance From A Middle Eastern Perspective",
    "The Role of Team Cohisiveness in GVT Performance",
    "Email, Skype, or Facebook: The Effects of the Communication Tool Choices on Team Dynamics and Performance in GVTs",
    "The Different Antecedents (at the Macro, Team, and Individual Levels) of Psychic Distance",
    "Predictors of Perceived Differences and Distances",
    "Cross-Cultural Differences in Peer Evaluation Styles",
    "Size Matters: The Effects of the Class Size on Student Performance",
    "The Role of Team Cohisiveness in GVT Performance",
    "Trajectories of Interpersonal Conflict in Teams",
    "Socio-economic Bias: A study of perceived strengths and weaknesses based on socio-economic status",
    "Cross-Cultural Differences In Self-Promotion",
    "Predictors Of Team Member Roles In GVT’s",
    "The Effect of the Choice Collaboration Tools on GVT Dynamics and Performance: The Role of Parallelism",
    "Cross-cultural differences in the effects of perceived social exchange gaps in GVTs",
    "Social Network Analysis: Mining the X-Culture Data from a Social Networks Analysis Perspective",
    "The demanded skills of local companies to work in a Global Virtual Team"
];
let headingArticles = 'External researchers are most welcome and strongly encouraged to use X-Culture data in their studies. Note, however, that our team is already working on dozens of studies, so please review the list of our ongoing and published studies to preclude duplication and redundancies.'
let dataNotaBene = '<strong>Important notice:</strong> All X-Culture data collections are conducted in accordance with academic research ethics standards. Our procedures have been reviewed by the Institutional Review Board and Research Ethics Board at several universities in the U.S. and Canada. The study review and approval notices, consent forms, and other documentation can be <a href="https://www.dropbox.com/sh/y4mj1tilvyts8ns/AAD6dSCsHsyDny1FNh_5fY32a?dl=0" >accesseded here</a>.'
let dataHeading = 'X-Culture was originally envisioned purely as an experiential learning project. Accordingly, we were first collecting only data on student performance that we needed for grading/marking purposes. However, in an attempt to better understand processes and outcomes in global virtual teams to develop better pre-project training programs for our students, we gradually started collecting more data that are not directly used for student evaluation purposes. Additionally, we started experimenting with different learning conditions, team composition, assignments and evaluation systems to see which teaching approach gives the best learning outcome and student satisfaction. Our database contains over 1,300 individual-level, 500 team-level, 200 instructor-level and 100 country-level variables. X-Culture data are multi-source, multi-level and longitudinal in nature:'
let basicPrinciples = [
    "The overarching goal of the X-Culture project is a sustained creation of new knowledge.",
    "We deliberately keep the rules flexible. Each research project is different and the different approaches may work best for different research teams.",
    "As projects progress, changes in research team composition, workload distribution, and relative contributions of the different team members change. We act in good faith, give credit to those who deserve it and don’t claim credit when it is not deserved."
];
let weRecognise = [
    "Researchers, members of the X-Culture team or external, have certain preferences and need autonomy with respect to how they conduct their study, how the workload is distributed, and who is on their co-author team.",
    "Researchers engage in research not only because they are genuinely interested in answering their research questions, but also because this is part of their job, and their research productivity, to a large extent, determines their job and promotion options and recognition in the field.",
    "Researchers expect that their investment in a particular study will be properly recognized, including in a form of authorship of any resulting publications and presentations.",
    "We also recognized that the authorship order matters, as well as that the general perception still is that the greater the number of co-authors, the less credit goes to the individual co-authors.",
    "Researchers want protection of their intellectual property.",
    "Thus, Researchers, internal or external to the X-Culture team, likely want to use X-Culture data as they see fit, receive help from the X-Culture team with paper development if further expertise is needed but not to be bothered otherwise, be listed as the first, and possibly sole author of any resulting publication, and be assured that the research ideas they put forth will not be “stolen” by others.",
    "As much as we can, we will honor these wishes, not only for ethical reasons, but also because this is a foundation for interest and motivation to work with the X-Culture team. Nothing kills motivation more than free-riding and unfair treatment."
];
let weHopeYouRecognize = [
    "Many members of the X-Culture team invest immense amounts of time and effort into making the X-Culture project possible, including in collecting the data. They too want their input to be recognized, both because it feels good to be recognized, but also because they too live in a publish-or-perish world.",
    "Every data point in the X-Culture dataset is there because someone thought it could be used in future research, and took the time to design the survey, send out the invites and reminders, collect the data, build the database, prepare the supporting code books and other documentation, all while following proper data collection and management and research ethics guidelines. That is hundreds and even thousands of hours of work invested by some of the researchers on the X-Culture admin team to collect and make these data available for you.",
    "There are many talented and experienced researchers on the X-Culture team who can make valuable contributions to many studies conducted based on the X-Culture data. Many of them will be genuinely interested and, most importantly, have the necessary skills and knowledge to make a truly valuable and meaningful contribution to a study proposed by external researchers. If not given an opportunity to participate, not only that may lead to reduced morale and motivation on our team, but also to beliefs, often justifiable, that the data should not be shared externally as the research ideas and expertise to conduct the study in question has been on the X-Culture team all along, we just didn’t have the time to get it yet."
];
let requestDataPrinciple = [
    "We ask for a study description first to determine that the idea is indeed new and nobody is working on the same study already. This is necessary to ensure that we do not end up with multiple people working on the same paper, one publishing the paper earlier thereby making it impossible for the others to submit their work as it will no longer be original.",
    "We maintain a list of ongoing studies so that researchers interested in starting a new study could quickly check if their idea is indeed new.",
    "Once a new study proposal is approved, the study description will be added to the list, thereby allowing the researcher to claim lead authorship on the project.",
    "Once it is determined the study idea is new and the study is tentatively approved, we share the proposal with the X-Culture network. On the one hand, we want to make certain all people who are helping with the data collection are aware of how the data are used and can express their concerns and suggestions, if any.",
    "On the other hand, if the Author of the new study feels he/she may need help with conducting the study, we encourage that the study proposal contains a general list of functions or task that must be performed to complete the study, preferably with notes as to what functions or tasks the researcher who is submitting the proposal has covered and where further help may be needed.",
    "In response, members of the X-Culture team who have the necessary expertise and time to perform those functions can apply to co-author the study.",
    "It is up to the researcher(s) who submit the study proposal to decide how to handle those applications: all or none of the applications can be accepted. That is, the researcher(s) who initiated the study can choose to work as the sole author and reject all applications for co-authorship, or if the applicant(s) seem to be able to make a valuable contribution to the proposed paper, they may be invited as co-authors.",
    "It is recommended that if there is interest among the X-Culture team members to co-author the study, and the applicants have the necessary expertise, they be allowed to join the co-author team. The reason is not because we want a free ride, but because many members of the X-Culture team are indeed expert researchers, they know the X-Culture data and research design like no one else, have very strong work ethics and are likely to make a valuable and meaningful contribution and improve the quality of the final product.",
    "The X-Culture project is uniquely positioned to provide peer-to-peer learning and networking opportunities and we encourage mentorship and expertise sharing. While it is generally expected that co-authors are experts in the area of the study, when feasible, less experienced colleagues can be invited to perform routine task that do not require special skills or knowledge."
];
let autorShip=[
    "To (co)author a paper, one can either propose a new paper (and lead-author it), or respond to a call for co-authors from other researchers.",
    "Signing up to co-author a project does not guarantee co-authorship on any of the resulting publications.",
    "The lead author has the right to reject applications if there is a doubt the applicant can make a truly meaningful contribution to the paper.",
    "Only researchers who actively participate in development of a particular paper can be co-authors of that paper.",
    "Limited input such as providing occasional advice or reading the paper draft and providing comments on it is not sufficient to be listed as a co-author of the paper.",
    "However, researchers who provide substantial input with theory development, data preparation and management for this particular study, data analysis, paper write up, or provide valuable insights and help otherwise are expected to be listed as co-authors.",
    "Generally, the researcher who submits the original proposal for a paper gets to be the first author, provided that the researcher takes on the leading role, coordinates efforts of the co-author team, and does otherwise most of the work or makes the most significant contribution to the study. Other lead-author arrangements are possible, and the decision is up to the co-authors of that particular paper.",
    "The co-authors will be listed in the order of their individual contributions or alphabetically if the contribution level is approximately equal.",
    "Unless otherwise agreed by the team of co-authors, it is the right and responsibility of the lead author to coordinate task and workload distribution among the participating co-authors, make certain that the tasks are completed on schedule, facilitate discussion among the members of the co-author team, and make other important decisions related to coordination and management of paper development.",
    "The lead author must consult the co-authors on all important issues, such as adding or excluding co-authors, author order, and the like, but in the interest of efficiency, the lead author can make unilateral decisions about routine issues such as workload distribution and the like.",
    "While these decisions are often not easy, in the interest of the success of the research efforts of the co-author team, it is the obligation of the lead author to not only keep track of performance of the co-authors, but also to initiate exclusion from the co-author team of the individuals who are not meeting the input expectations."
];
let studyPaperOwnership= [
    "As long as a research proposal for a study that uses X-Culture data has been approved, any researchers interested in conducting the same or similar studies can only work in collaboration with the original research team. The original research team and any new researchers are expected to work together to ensure that intellectual rights of the researcher(s) who originally came up with the idea are protected, as well as that all researchers who can make a valuable contribution to the study are given a chance.",
    "To ensure that no research ideas are dropped due to inability of the lead author or co-author team to complete the study, the X-Culture team, and not individual internal or external researchers, retains ownership of any study or paper being developed using X-Culture data, from the moment the research proposal is approved. That means that in the cases when a researcher or a team of researchers suggest a study idea and start working on a paper, but for any reason cannot complete it in a reasonable time, the X-Culture team has the right to recompose the co-author team, finish the study and publish the paper. The new co-author team may not contain any or all of the original co-authors, including the researcher who originally came with the idea for the study.",
    "Given the sensitivity of the issue, any decisions of this nature must be made in good faith and as much as possible in consultation with the members of the X-Culture team. As long as there is evidence that the original co-author team is actively working on the study, the team should be given no less than two years to produce the first complete draft of the paper, and no less than another two years to try to publish the paper.",
    "However, if there is evidence that the co-author team is making no progress on the study, inquiry into the feasibility of allowing a new team of researchers to work on it is recommended even if the team has been working on the study for less than two years. The original members of the co-author team should be encouraged and allowed to continue working on the study, provided they are interested and capable of making a contribution to the study.",
    "If it is determined that the original co-author team is incapable of publishing the study in a reasonable amount time and a new co-author team starts working on the study, the original and new co-authors are expected to work out the authorship issues so that the final list of co-authors on any resulting publications reflects individual contributions of all involved parties."
];
let dataOwnership = [
    "While we believe in open data sharing, we must impose certain restrictions on ownership and sharing of our data.",
    "X-Culture is team effort and it is our obligation to ensure that the X-Culture team members who directly contribute to data collection are given priority to develop papers based on the data. Also, we must protect intellectual rights of the internal and external researchers who approach us first with their research ideas. Finally, we must ensure that data are handled in accordance with the Research Ethics guidelines.",
    "Therefore, the X-Culture team remains the sole owner and manager of the X-Culture data and retains the right to deny access to data or revoke access to the data at any time.",
    "The data will be shared only after the research proposal is reviewed and approved by the X-Culture team and only a portion of the data pertaining to a given study will be shared with the research team.",
    "When a new paper development proposal is approved and the author(s) obtained the data, they can only use the data for developing the approved paper and not use or share the data otherwise.",
    "The X-Culture data can only be used for studies or purposes approved in advance and in writing by the X-Culture admin.",
    "That is: if you want to use the X-Culture data, you must send in a study/paper proposal. If it is approved, you can use the data only for this study/paper. If you see more possibly studies/papers based on the data you already have must submit a new study/paper proposal.",
    "This is extremely important. A failure to inform the X-Culture admin about any new studies can create duplicate research streams and conflicts.",
    "X-Culture reserves the right to revoke the data and inform the editors of the journals that the study was conducted without the permission for the data use."
];
let conflictResolution= [
    "In the publish-or-perish environment, research is a high-stakes game with a lot to gain and a lot to lose.",
    "Although we haven’t had conflicts within the X-Culture team before, have no illusions – in a project of this scale and complexity, conflicts will happen.",
    "When they do, the X-Culture team reserves the right to be the final authority in any disputes that may arise.",
    "We don’t have the time or interest to compose long legal contracts and then fight about specific wording of the contact points. We simply do our best and act in good faith.",
    "Join us only if you accept that if an argument cannot be resolved to a satisfaction of all involved parties, the X-Culture team, as represented by the Project Coordinator who consults all members of the X-Culture team, makes the final decision.",
    "By joining us (using our data, writing papers with us, etc.) you agree, in a case of a dispute, to accept our decision as the final one."
];

let multiSource= [
    "Individual and team-consensus responses (various self-report surveys)",
    "Instructor evaluations",
    "Peer evaluations",
    "Deadline and other objective performance records",
    "Administrative records on participant background (e.g., country of studies, gender, etc.), team composition and the the like",
    "Data from external sources (e.g., time zone information, characteristics of the economic, cultural and institutional environment of each country, etc).[/servicebox]"
];
let multiLevel=[
    "Individual",
    "Team",
    "Instructor",
    "National"
];
let longtitudinal = [
    "12 waves of survey",
    "Starting with the pre-project survey of the student and instructors",
    "Weekly surveys and data records during the project",
    "Post-project surveys and evaluations"
];
let specificMeasures=[
    "Pre-project training and test performance.",
    "Team member background (demographics, international background, international experience, etc.).",
    "Knowledge and skills (cultural intelligence, skills with international virtual collaboration tools, etc.).",
    "Attitudes (values, various attitudes, beliefs, preferences, perceptions and biases, most measured before and then again after the project).",
    "Team composition and characteristics, including size, national, demographic, and skill composition, various inter-member distances, including time-zone, cultural, economic, perceptual and the like.",
    "Expectations about project challenges, communication mode, group interactions, dynamics and performance, measured before project start, and after the project end.",
    "Observations of project challenges, communication mode, group interaction, dynamics and performance, measured after project finish.",
    "Conflicts.",
    "Status and leadership.",
    "Open-ended question comments, feedback, suggestions, and other qualitative data.",
    "Various measures of team dynamics, including satisfaction, commitment, conflict, self-efficacy, etc.",
    "Various measures of team processes, including communication frequency and mode, workload distribution, coordination, leadership and more.",
    "Various measures of individual and team performance and outcomes, including multi-dimensional multi-rater assessment of the team report quality, ability to meet deadlines, satisfaction, peer evaluations and the like.",
    "Original team reports and other records suitable for qualitative and content analysis.",
    "Characteristics of the experimental conditions, including the specific task the teams have to complete, allocated time, deadlines, etc.",
    "Information about the participating instructors, their courses and universities, as well as the information course delivery mode (online/face-to-face), level of studies (UG, MBA, EMBA, etc.).",
    "Information about various experimental conditions."
];
let requestData=[
    "Research question(s) of the proposed study, no problem if specific hypotheses have not been developed yet, just a general research question or purpose of the study is sufficient at this stage. If available, it would also help to briefly describe the theoretical foundation of the study.",
    "Constructs: A bullet-list of constructs/variables that you would need from our existing database or additional measures that we need to add to our research design to collect new data. Please see the X-Culture Data webpage for what’s already measured.",
    "If requesting new data to be collected, please attach a complete list of items, as well as detailes on the timing (when need to be measured) and other information on how the data should be collected.",
    "Expected research outcomes: A brief review of the goals and results of the study, expected publications, etc.",
    "Expected timing: Expected research project schedule and other timing information that can give us information as to how long it is likely to take to complete the project – very general information would be sufficient at this stage.",
    "Preferred Collaboration Mode: A summary of the researcher’s preferences as to collaboration with the X-Culture team, what resources are at the researcher’s disposal, what tasks or functions the researcher prefers to complete on his/her own and what tasks or functions the researcher prefers to be completed by collaborators from the X-Culture team, any other preferences with respect to communication, workload distribution, timing, co-author team composition, etc.",
    "CV of the researcher(s) submitting the proposal.",
    "Other: Any other information you feel would be relevant."
];
let weCanOffer = [
    "Share existing data: Researchers can request the existing data that have already been collected (please see our Data web page for more information on what kind of data are currently collected).",
    "Collect new data: If interesting ideas are presented, we will also consider collecting new data, that is measuring variables or creating experimental conditions that are currently not integrated in our project design.",
    "Work on developing research papers with you: Our team includes some of the world’s leading researchers. We would be happy to work with you and provide help with theory development, literature review, data analysis, and paper write up. Please see our Research Collaboration Principles page for the details on the coordination, workload distribution and authorship issues."
];
let weCannotOffer = [
    "We cannot help you with collecting data for “your” study. We are often approached with request to distribute surveys among our students by researchers who have difficulty collecting data for their studies. We are not in a business of collecting data and we will generally turn down those requests.",
    "Our students and the educational value of the X-Culture project are our main concerns. We will never jeopardize the quality of our teaching by overloading our students with unnecessary surveys. We collect only data that can help us generate knowledge that can directly benefit our students. So, generally, if it’s not about culturally diverse workplace, virtual collaboration or teamwork, we probably won’t be able to help you.",
    "We cannot accommodate every data request. We turn down the vast majority of requests for data collection. We are at a point when our students have “almost too many” surveys and adding new  survey items requires that something is dropped in exchange.",
    "Therefore, we must be very selective and can afford to consider only the most interesting and promising research proposals. Needless to say, any request that do not meet research ethics standard will not be considered.",
    "Please note that while adding new items to our student survey may be close to impossible, requests to add new observational variables, or taking measures that do no require anything of our students would be easier to accommodate.",
    "We cannot share with you our student database.  The privacy of our students is our major concern and under no circumstance will we share their names, emails, or other personal information.",
    "We will not work “for you”, only “with you”. We are not not selling our services and do not seek clients, only partners. We will be happy to share our data and resources with researchers who put forth interesting research ideas, but we will not have the resources to accommodate unreasonable requests for data preparation, analysis, and the like. We share with you what we have and we work together from there on."
];

const Publications = (props) => {
    return (
        <section id={props.id} >
            <h4>Secelted publications</h4>
            {props.list.map((e, index) => { return <li key={index} >{e}</li> })}
        </section>
    )
}
const ResearchProjects = (props) => {
    return (
        <section id={props.id}>
            <p style={{ margin: '0 auto 3vw auto' }}>{props.heading}</p>
            {props.list.map((e, index) => { return <a key={index} href='/research'><li>{e}</li></a> })}
        </section>
    )
}

const Data = (props) => {
    return (
        <section id={props.id}>
            <p dangerouslySetInnerHTML={{__html: props.innerHtml}}></p>
            <p >{props.heading}</p>
            <CreatingListCard h4='Multi-Source:' listItems={multiSource}/>
            <CreatingListCard h4='Multi-Level:' listItems={multiLevel}/>
            <CreatingListCard h4='Longitudinal:' listItems={longtitudinal}/>
            <CreatingListCard h4=' In Terms Of The Specific Measures, We Have Information About:' listItems={specificMeasures}/>
            <p>Most variables are deliberately manipulated (e.g., team size, cultural diversity, time allocated to complete each task, etc.) to create enough variation along each variable needed for a meaningful analysis. Many factors vary naturally (different teams choose different communication modes, leadership structures, etc.).
            <br/><br/> We are constantly searching for better ways to evaluate the effects and effectiveness of project, as well as to further explore what shapes cross-cultural interactions and group dynamics. If interesting research ideas are put forth, we would also be happy to consider incorporating new measures and experimental conditions into our project for studies that may not be directly related to global virtual teams.</p>
            <h4 style={{margin: '3vw 0 2vw 0'}}>How to Request Data</h4>
            <p>Please first read our <a href='#'  onClick={(event) => { event.preventDefault(); document.getElementById('5').className='active'; document.getElementById('principles').style.display='block'; document.getElementById('3').className='';document.getElementById('data').style.display='none' }}>Collaboration Principles.</a> 
            <br/><br/>
            To request existing data or collection of new data, please <a href="mailto:v_taras@uncg.edu;" >email us</a> your research proposal.

            There are no submission deadlines and no fixed research proposal formatting requirements, but the proposal must contain the following information:</p>
            <CreatingListCard listItems={requestData} />
        </section>
        
    )
}
const Crowdsourcing = (props) => {
    return (
        <section id={props.id} >
            <h4>Crowdsourcing, Open Data Sharing, And Large-Scale Collaboration</h4>
            <p dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}></p>
        </section>
    )
}


class Research extends React.Component {

    switch = (e) => {
        let but = document.getElementsByTagName('button')
        console.log(but);
        let cont = document.getElementsByTagName('section')

        for (let i = 0; i < but.length; i++) {
            if (e.target.id === but[i].id) {
                e.target.className = 'active'
                let j = i + 1;
                cont[j].style.display = 'block'
            }
            else {
                let j = i + 1;
                but[i].className = ''
                cont[j].style.display = 'none'
                cont[0].style.display ='none'
            }
        }

    }

    render() {


        return (
            <main>
                <h1 style={{
                    font: '600 4.43vw Roboto',
                    width: '44.52vw',
                    textAlign: 'center',
                    margin: '5% auto 0 auto'
                }}>RESEARCH</h1>
                <p style={{
                    width: '57.35vw',
                    font: '400 1.82vw Roboto',
                    margin: '5% auto 2% auto',
                    textAlign: 'justify'
                }}>Our research questions are not limited to the field of International Business.
                    The data we are collecting is suitable for addressing research questions in the
                fields of Management, Psychology, Marketing, Economics, Sociology, and other disciplines.</p>

                <div id='button-row'>
                    <button id='1' className='' onClick={e => this.switch(e)}>
                        PUBLICATIONS
                    </button>
                    <button id='2' className='' onClick={e => this.switch(e)}>
                        RESEARCH PROJECTS
                    </button>
                    <button id='3' className='' onClick={e => this.switch(e)}>
                        DATA
                    </button>
                    <button id='4' className='' onClick={e => this.switch(e)}>
                        CROWDSOURCING
                    </button>
                    <button id='5' className='' onClick={e => this.switch(e)}>
                        PRINCIPLES
                    </button>
                </div>
                <div id='button-row' >
                    <button id='6' className='' onClick={e => this.switch(e)}>
                        JOIN
                    </button>
                </div>

                <section id='main' style={{ width: '55vw', display: 'block', margin: '5vw auto 0 auto' }}>
                    <p style={{ font: '400 1.3vw Roboto' }}>
                        X-Culture was originally envisioned as a purely educational project. Preparing students for global careers and effective performance in the multi-culture workplace remains our main purpose.
                        However, X-Culture has also emerged as a unique and versatile research platform.<br/><br/>

                        We primarily focus on exploring the nature and challenges of cross-cultural collaboration, as well as studying the processes and performance in global virtual teams.

                        What helps and what hurts international workgroup dynamics? Why? What can be done to improve performance in the global workplace?
                        <br/><br/>
                        Furthermore, we research the effects and effectiveness of experiential learning in general, and in  International Business education in particular.

                        We are also experimenting with different crowdsourcing models hoping to develop one that will do to the business consulting industry what Wikipedia did to the encyclopedia industry.

                        The research results are shared with our students to further inform them about the nature, challenges and best practices of global virtual collaboration.
                        <br/><br/>
                        Our research questions are not limited to the field of International Business. The data we are collecting is suitable for addressing research questions in the fields of Management, Psychology, Marketing, Economics, Sociology, and other disciplines.

                        The X-Culture research initiatives have been approved by the Institutional Review Board (approvals independently received at multiple universities).


                    </p>
                </section>

                <Publications list={publications} id='publications' />
                <ResearchProjects list={articles} id='research-projects' heading={headingArticles} />
                <Data id='data' innerHtml={dataNotaBene} heading={dataHeading} />
                <section id='crowdsourcing' style={{ width: '55vw', display: 'none', margin: '5vw auto 0 auto'}}>
                    <h4 style={{textAlign:'center', margin:'2vw 0 2vw 0'}}>Crowdsourcing, Open Data Sharing, And Large-Scale Collaboration</h4>
                    <p style={{ font: '400 1.3vw Roboto', textAlign:'justify' }}>
                    Data sharing and open collaboration are the latest revolutionary developments in sciences.

                    Natural sciences and technology sectors (particularly genetics, astronomy biology, and engineering) are the crowdsourcing leaders with very remarkable achievements.
                    <br/><br/>
                    Open data sharing is not only becoming more common, it is mandated in some fields. For example, following the Bermuda Agreement human genome data sharing mandate led to e
                    xplosion of discoveries in the field. The GalaxyZoo data sharing and crowdsourcing project led to countless discoveries in astronomy.

                    Unfortunately, data sharing, open collaboration, and research crowdsourcing are still a rarity in International Business research.
                    <br/><br/>
                    The X-Culture team believes in <strong>open research collaboration.</strong>
                        <ul>
                            <li> We believe data should be freely shared to facilitate knowledge creation.</li>

                            <li>We are currently working on developing a platform for data sharing and research crowdsourcing, a platform that would not be limited to one project or one field of discovery.
                    </li>
                            <li>While that is in development, for now we offer our own huge database to the world.
                    </li>
                        </ul>
                    There are many discoveries hidden in our data – and we invite everyone to join us on the knowledge treasure hunt.

                    There are many experienced and talented researchers on the X-Culture team, some are well-known internationally, others are rising stars. However, we believe there is never too much
                    brainpower: more researchers means more, better ideas and studies.
                    <br/><br/>
                    We recognize that many researchers outside the X-Culture team who can provide input on the research side of our project, but not everyone can participate as an instructor: some may
                    not be teaching suitable courses, others cannot participate due to academic schedule differences.

                    Therefore, we invite everyone to take a look at our data and see if any interesting stories are hidden there, or perhaps request collection of new data based on our project.</p>
                </section>
                <section id='principles' style={{ width: '55vw', display: 'none', margin: '5vw auto 0 auto' }}>
                    <p>In the interest of advancing science and creating new knowledge, we are happy to share the X-Culture© data with external researchers.</p>
                    <AccordeonCard menuButtonTitle='Basic Principles' listItems={basicPrinciples} />
                    <AccordeonCard menuButtonTitle='We Recognize That' listItems={weRecognise} />
                    <AccordeonCard menuButtonTitle='We Hope You Also Recognize' listItems={weHopeYouRecognize} />
                    <AccordeonCard menuButtonTitle='Requesting Data for a New Study' listItems={requestDataPrinciple} />
                    <AccordeonCard menuButtonTitle='Autorship' listItems={autorShip} />
                    <AccordeonCard menuButtonTitle='Study/Paper Ownership' listItems={studyPaperOwnership} />
                    <AccordeonCard menuButtonTitle='Data Ownership' listItems={dataOwnership} />
                    <AccordeonCard menuButtonTitle='Conflict Resolution' listItems={conflictResolution} />
                </section>
                <section id='join' style={{ width: '55vw', display: 'none', margin: '5vw auto 0 auto' }}>
                    <AccordeonCard menuButtonTitle='We CAN Offer: ' listItems={weCanOffer} />
                    <AccordeonCard menuButtonTitle='We CANNOT Offer: ' listItems={weCannotOffer}/>
                </section>
            </main>
        )
    }

}

export default Research;