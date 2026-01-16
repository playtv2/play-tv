const seriesData = [
    // --- סדרות (אל עצמי - כבר מוכן עבורך) ---
    {
        id: "al-atzmi",
        type: "series", 
        category: "סדרות", 
        title: "אל עצמי",
        description: "סיפורו המרגש של ציון המנסה למצוא את מקומו בעולם ועובר לגור עם משפחה אומנת בחיפה.",
        image: "https://images.maariv.co.il/image/upload/f_auto,q_auto/586339",
        episodes: [
            { number: "1", desc: "ציון מגיע למשפחת שרוני.", image: "", driveId: "1-TJDR-bjqha_x-DHndKd-uvGIuQU3Lz0" },
            { number: "2", desc: "ההתאקלמות בבית הספר.", image: "", driveId: "10Flj4VBaJ4ANqWfy8Lt0BRTPwsrITPHZ" },
            { number: "3", desc: "חברים חדשים ואתגרים.", image: "", driveId: "16Uy_zP90R2V8wI8f5PcQYer3kmfZon7M" },
            { number: "4", desc: "המשך העלילה...", image: "", driveId: "1BT6x7j_59ptqyVyoIbBaZbzeHwrBAq0b" },
            { number: "5", desc: "המשך העלילה...", image: "", driveId: "1DXLtQqtwL44GsS3Gr70sJDuIxjjhrQ0b" },
            { number: "6", desc: "המשך העלילה...", image: "", driveId: "1Kmwm0nDrLFPBcndl9vwr1WNhg_Pe1vxA" },
            { number: "7", desc: "המשך העלילה...", image: "", driveId: "1QACnT01BTBwxeQFgEtgO0HJ2jKMuN94K" },
            { number: "8", desc: "המשך העלילה...", image: "", driveId: "1Rg-WeOCT-Daba-IzGy919JHTnl2BivEy" },
            { number: "9", desc: "המשך העלילה...", image: "", driveId: "1SGOImupPoUKNaR89lRXhaRLWhteyLZwa" },
            { number: "10", desc: "המשך העלילה...", image: "", driveId: "1ThXyiGhyJ6-FQkLHh_ERzePmxp1LPm8V" },
            { number: "11", desc: "המשך העלילה...", image: "", driveId: "1g6-62xZO3gXPQniuaqzMfztolZkuBGlx" },
            { number: "12", desc: "המשך העלילה...", image: "", driveId: "1nWL_FVXbI1gCi5_rJPfdVmstn8bTJr4p" },
            { number: "13", desc: "המשך העלילה...", image: "", driveId: "1pCWPvXCeWlnEwjB56-qbr2OrpZZaZp5I" },
            { number: "14", desc: "המשך העלילה...", image: "", driveId: "1tkKSN3c_axX-hXTUPIC3iHAFlO9j_rA3" },
            { number: "15", desc: "המשך העלילה...", image: "", driveId: "1vljlNJ-49LiQgdGFS_Yt6YPptlhxt5q_" },
            { number: "16", desc: "המשך העלילה...", image: "", driveId: "1w9AXhr23xKRme5GxiWgFUkU5qVqAbLX3" }
        ]
    },


{
    id: "tsair_mearot", // שם ייחודי באנגלית (בלי רווחים)
    type: "series", 
    category: "סדרות", // הקטגוריה שבה זה יופיע בתפריט
    title: "צייר המערות",
    description: "בדיקה.",
    image: "https://i.ytimg.com/vi/VaFdaHs3isc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBE65d-3PGwO9UtTaTya5fIXmgOlA", // תמונת הפוסטר הראשית
    episodes: [
        { 
            number: "1", 
            desc: "תקציר פרק 1", 
            image: "https://i.ytimg.com/vi/VaFdaHs3isc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBE65d-3PGwO9UtTaTya5fIXmgOlA", 
            driveId: "כאן_שמים_רק_את_הID_מהדרייב" 
        },
        { 
            number: "2", 
            desc: "תקציר פרק 2", 
            image: "קישור_לתמונת_הפרק", 
            driveId: "כאן_שמים_רק_את_הID_מהדרייב" 
        },
        // אפשר להוסיף עוד פרקים באותו מבנה...
    ]
}
    

    // --- מקום לסדרה חדשה (להעתקה) ---
    {
        id: "new-series-id", // שם באנגלית בלי רווחים
        type: "series", 
        category: "סדרות", // אפשר לשנות ל"ילדים" או "דרמה"
        title: "שם הסדרה",
        description: "תיאור הסדרה כאן",
        image: "קישור_מ_ImgBB",
        episodes: [
            { number: "1", desc: "תקציר פרק 1", image: "קישור_מ_ImgBB", driveId: "ID_מדרייב" }
        ]
    },

    // --- מקום לסרט חדש (להעתקה - דף רקע מלא) ---
    {
        id: "new-movie-id",
        type: "movie", 
        category: "סרטים",
        title: "שם הסרט",
        description: "תיאור הסרט שיופיע על הרקע המלא",
        image: "קישור_לתמונה_איכותית_מ_ImgBB", // תמונה זו תהיה הרקע של כל הדף
        driveId: "ID_מדרייב"
    }
];
