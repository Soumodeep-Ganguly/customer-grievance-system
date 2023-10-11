import { AcademicCap, BookOpen, Briefcase, BuildingOffice, CheckBadge, FolderOpen, Gift, Identification, Language, LightBulb, ListBullet, MusicalNote, Pencil, Share } from "../../components/icons/resume";

export const contents = [
    {
        id: "profile",
        label: "Profile",
        description: "Introduce yourself in a few sentences to make a great first impression.",
        icon: <Identification />
    },
    {
        id: "education",
        label: "Education",
        description: "Display your primary education, college degree, and any exchange semesters.",
        icon: <AcademicCap />
    },
    {
        id: "professional_experience",
        label: "Professional Experience",
        description: "Highlight your work experience, including internships.",
        icon: <Briefcase />
    },
    {
        id: "skill",
        label: "Skill",
        description: "List your technical, managerial, or soft skills in this section.",
        icon: <LightBulb />
    },
    {
        id: "languages",
        label: "Languages",
        description: "Show your proficiency in multiple languages, if applicable.",
        icon: <Language />
    },
    {
        id: "certificate",
        label: "Certificate",
        description: "Include driver's licenses and industry-specific certificates here.",
        icon: <CheckBadge />
    },
    {
        id: "interest",
        label: "Interest",
        description: "Share your hobbies and interests that align with your career aspirations.",
        icon: <MusicalNote />
    },
    {
        id: "project",
        label: "Project",
        description: "Highlight challenging projects you've worked on in the past.",
        icon: <FolderOpen />
    },
    {
        id: "course",
        label: "Course",
        description: "Showcase MOOCs (Massive Open Online Courses) or evening courses you've completed.",
        icon: <ListBullet />
    },
    {
        id: "award",
        label: "Award",
        description: "Display awards, such as student competition victories or industry accolades.",
        icon: <Gift />
    },
    {
        id: "organization",
        label: "Organization",
        description: "List volunteer work or participation in charitable causes.",
        icon: <BuildingOffice />
    },
    {
        id: "publication",
        label: "Publication",
        description: "Highlight academic publications or book releases.",
        icon: <BookOpen />
    },
    {
        id: "reference",
        label: "Reference",
        description: "Include former colleagues or supervisors who can vouch for you.",
        icon: <Share />
    },
    // {
    //     id: "declaration",
    //     label: "Declaration",
    //     description: "If you need a signed declaration, you can add it here.",
    //     icon: <Pencil />
    // }
]