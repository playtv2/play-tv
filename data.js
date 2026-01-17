const seriesData = [
    // --- סדרה 1 ---
    {
        id: "tsaiamearot",
        type: "series", 
        category: "סדרות", 
        genre: "דרמות ישראליות", // <-- הוספתי את זה! זו תהיה הכותרת של השורה
        title: "צייר המערות",
        description: "בדיקה.",
        image: "https://i.ytimg.com/vi/VaFdaHs3isc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBE65d-3PGwO9UtTaTya5fIXmgOlA",
        episodes: [
            { number: "1", desc: "פרק ראשון", image: "https://i.ytimg.com/vi/VaFdaHs3isc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBE65d-3PGwO9UtTaTya5fIXmgOlA", driveId: "1-TJDR-bjqha_x-DHndKd-uvGIuQU3Lz0" },
            { number: "2", desc: "פרק שני", image: "", driveId: "10Flj4VBaJ4ANqWfy8Lt0BRTPwsrITPHZ" }
        ]
    },

    // --- סדרה 2 ---
    {
        id: "al-atzmi",
        type: "series", 
        category: "ילדים", 
        genre: "הפקות המקור של HOT", // <-- כותרת שורה חדשה בפרופיל ילדים
        title: "אל עצמי",
        description: "סיפורו המרגש של ציון.",
        image: "https://www.yes.co.il/media/ux0f43ln/vp004414285.jpg?quality=80",
        episodes: [
            { number: "1", desc: "פרק ראשון", image: "", driveId: "1-TJDR-bjqha_x-DHndKd-uvGIuQU3Lz0" },
            { number: "2", desc: "פרק שני", image: "", driveId: "10Flj4VBaJ4ANqWfy8Lt0BRTPwsrITPHZ" }
        ]
    },

    // --- סרט לילדים ---
    {
        id: "zootopia2",
        type: "movie",
        category: "ילדים",
        genre: "סרטים מצוירים", // <-- כותרת שורה לסרטים
        title: "זוטרופוליס 2",
        description: "כאן יופיע תקציר הסרט.",
        image: "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        driveId: "1Dp6najRAF8hvYKYEKLNMXyO7bZjQhDnU"
    },

    // -----------------------------------------------------------
    // --- תבניות מוכנות לשכפול (Copy-Paste) להוספת תוכן חדש ---
    // -----------------------------------------------------------

    // תבנית לסדרה חדשה (להעתיק מכאן)
    {
        id: "new-series-id", 
        type: "series", 
        category: "סדרות", 
        genre: "שם הקטגוריה (למשל: מתח ופעולה)", 
        title: "שם הסדרה",
        description: "תקציר",
        image: "קישור_לתמונה_רחבה",
        episodes: [
            { number: "1", desc: "פרק 1", image: "תמונה", driveId: "ID" }
        ]
    },

    // תבנית לסרט חדש (להעתיק מכאן)
    {
        id: "new-movie-id",
        type: "movie", 
        category: "סרטים",
        genre: "שם הקטגוריה (למשל: שוברי קופות)",
        title: "שם הסרט",
        description: "תקציר",
        image: "קישור_לתמונה_גבוהה",
        driveId: "ID"
    }
];
