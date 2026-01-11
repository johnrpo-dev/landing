tailwind.config = {
    theme: {
        extend: {
            colors: {
                void: '#050B14',
                tactical: '#06B6D4', // Cyan
                slate: {
                    850: '#151e2e',
                    900: '#0f172a'
                },
                safety: '#F43F5E', // Red
                success: '#34D399', // Green
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
            }
        }
    }
}

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});
