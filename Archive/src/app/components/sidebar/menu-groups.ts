
class MenuGroup {
    name: string;
    icon: string;
    expanded: boolean;
    items: MenuGroupItem [];
}

class MenuGroupItem {
    name: string;
    icon: string;
}

export const MenuGroups: MenuGroup[] = [
    {
        name: 'Recommendations',
        icon: 'check',
        expanded: false,
        items: [
            {
                name: 'Review',
                icon: 'check'
            },
            {
                name: 'sub menu 2',
                icon: 'check'
            },
            {
                name: 'sub menu 3',
                icon: 'check'
            }
        ]
    },
    {
        name: 'Configurations',
        icon: 'dashboard',
        expanded: false,
        items: [
            {
                name: 'sub menu 1',
                icon: 'check'
            },
            {
                name: 'sub menu 2',
                icon: 'check'
            },
            {
                name: 'sub menu 3',
                icon: 'check'
            }
        ]
    },
    {
        name: 'Menu Group 3',
        icon: 'extension',
        expanded: false,
        items: [
            {
                name: 'sub menu 1',
                icon: 'check'
            },
            {
                name: 'sub menu 2',
                icon: 'check'
            },
            {
                name: 'sub menu 3',
                icon: 'check'
            }
        ]
    },
    {
        name: 'Support',
        icon: 'question_answer',
        expanded: false,
        items: [
            {
                name: 'sub menu 1',
                icon: 'check'
            },
            {
                name: 'sub menu 2',
                icon: 'check'
            },
            {
                name: 'sub menu 3',
                icon: 'check'
            }
        ]
    },
    {
        name: 'Menu Group 5',
        icon: 'equalizer',
        expanded: false,
        items: [
            {
                name: 'sub menu 1',
                icon: 'check'
            },
            {
                name: 'sub menu 2',
                icon: 'check'
            },
            {
                name: 'sub menu 3',
                icon: 'check'
            }
        ]
    },
];
