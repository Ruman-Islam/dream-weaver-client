const packages = [
    {
        "id": 1,
        "name": "SUPER SAVER 1",
        "price": 12500,
        "features": [
            "1 Top Photographer.",
            "Event Duration: 4 Hours",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 100 copies",
            "Print: 4R (4”x6″) Matte Prints: 100 copies",
            "* All soft copy of photos will be delivered in Dream Weaver's Signature Pen Drive"
        ]
    },
    {
        "id": 2,
        "name": "SUPER SAVER 2",
        "price": 15000,
        "features": [
            "1 Top Photographer + 1 Top Associate Photographer.",
            "Event Duration: 4 Hours",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 100 copies",
            "Print: 4R (4”x6″) Matte Prints: 100 copies",
            "* All soft copy of photos will be delivered in Dream Weaver's Signature Pen Drive"
        ]
    },
    {
        "id": 3,
        "name": "SUPER SAVER 3",
        "price": 20000,
        "features": [
            "1 Senior Photographer + 1 Top Associate Photographer.",
            "Event Duration: 4 Hours",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 100 copies",
            "Print: 12L (12”x 18″) Matte Print: 1 copy",
            "Print: 5L (5”x7.5″) Matte Prints: 100 copies",
            "* All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive"
        ]
    },
    {
        "id": 4,
        "name": "SUPER SAVER 4",
        "price": 30000,
        "features": [
            "1 Senior Photographer + 1 Top Photographer + 1 Top Associate Photographer",
            "Event Duration: 5 Hours",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 150 copies",
            "Print: 20L (20”x30″) Matte Print: 1 copy",
            "Print: 12L (12”x 18″) Matte Print: 1 copy",
            "Print: 5L (5”x7.5″) Matte Prints: 125 copies",
            "* All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive"
        ]
    },
    {
        "id": 5,
        "name": "ELEGANT 1",
        "price": 40000,
        "features": [
            "Core Photographer Rifat Shakhawat Hossain / Ishrat Amin + 1 Top Photographer + 1 Top Associate photographer.",
            "DW  Team  Shooting  Duration : 5 Hours",
            "Conceptual Photographs & Family Shoot by our Core Photographer",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 100 copies",
            "Print: 20L (20”x30″) Matte Print: 1 copy",
            "Print: 12L (12”x 18″) Matte Print: 2 copies",
            "Print: 5L (5”x7.5″) Matte Prints: 125 copies",
            "*All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive."
        ]
    },
    {
        "id": 6,
        "name": "ELEGANT 2",
        "price": 50000,
        "features": [
            "Core Photographer Rifat Shakhawat Hossain / Ishrat Amin + 1 Top Photographer + 1 Top Associate photographer.",
            "3 Hour  Exclusive session from Core Photographer",
            "DW  Team  Shooting  Duration : 5 Hours",
            "Conceptual Photographs & Family Shoot by our Core Photographer",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 150 copies",
            "Print: 20L (20”x30″) Matte Print: 1 copy",
            "Print: 12L (12”x 18″) Matte Print: 2 copies",
            "Print: 5L (5”x7.5″) Matte Prints: 125 copies",
            "*All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive."
        ]
    },
    {
        "id": 7,
        "name": "ELEGANT 3",
        "price": 70000,
        "features": [
            "Core Photographer Rifat Shakhawat Hossain / Ishrat Amin + 2 Top Photographer + 1 Top Associate photographer.",
            "5 Hour  Exclusive session from Core Photographer",
            "DW  Team  Shooting  Duration : 6 Hours",
            "Conceptual Photographs & Family Shoot by our Core Photographer",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 150 copies",
            "Print: 20L (20”x30″) Matte Print: 2 copies",
            "Print: 12L (12”x 18″) Matte Print: 3 copies",
            "Print: 5L (5”x7.5″) Matte Prints: 150 copies",
            "*All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive."
        ]
    },
    {
        "id": 8,
        "name": "ELEGANT 4",
        "price": 100000,
        "features": [
            "Core Photographer Rifat Shakhawat Hossain / Ishrat Amin + 2 Top Photographer + 1 Top Associate photographer.",
            "Unlimited  Exclusive session from Core Photographer",
            "DW  Team  Shooting  Duration : 7 Hours",
            "* * Pre / Post Wedding shoot (2 Hr) by our Core Photographer Rifat Shakhawat Hossain / Ishrat Amin (Inside Dhaka Metropolitan City)",
            "Conceptual Photographs & Family Shoot by our Core Photographer",
            "Number of Pictures: Unlimited (All post processed)",
            "Specially Edited Photos: 200 copies",
            "Print: 20L (20”x30″) Matte Print: 2 copies",
            "Print: 12L (12”x 18″) Matte Print: 3 copies",
            "Print: 5L (5”x7.5″) Matte Prints: 150 copies",
            "* All soft copy of photos will be delivered in Dream Weaver’s Signature Pen drive."
        ]
    }
]



export const getPackage = id => packages.find(pg => {
    const packageId = parseInt(id);
    return pg.id === packageId;
});