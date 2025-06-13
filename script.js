        // Animate tags
        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => {
            tag.addEventListener('mouseover', () => {
                tag.classList.add('tag-hover');
            });

            tag.addEventListener('mouseout', () => {
                tag.classList.remove('tag-hover');
            });
        });

        // Animate section titles
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            title.addEventListener('mouseover', () => {
                title.classList.add('section-title-hover');
            });

            title.addEventListener('mouseout', () => {
                title.classList.remove('section-title-hover');
            });
        });

        // Add terminal typing effect
        setTimeout(() => {
            const status = document.querySelector('.status-bar div:last-child');
            status.innerHTML = 'RETRO MODE <span class="cursor"></span>';
        }, 1000);

        // Apply vintage filter to profile photo
        const profileImage = document.getElementById('profileImage');
        profileImage.onload = function() {
            this.style.filter = 'sepia(0.6) contrast(1.2) brightness(0.9) saturate(0.8)';
        };

        // Make content container scroll smoothly
        const contentContainer = document.querySelector('.content-container');
        contentContainer.addEventListener('wheel', function(e) {
            if (e.deltaY > 0) {
                this.scrollTop += 50;
            } else {
                this.scrollTop -= 50;
            }
            e.preventDefault();
        });

function fetchAndDisplayRepos() {
    const username = 'tdakanalis';
    // Fetch 4 repos, sorted by last pushed (most recent activity first)
    const container = document.getElementById('github-repos-container');
    if (!container) {
        console.error('GitHub repos container not found.');
        return;
    }

    // Clear loading message
    container.innerHTML = '';

    try {
        const repos = [
            {
                url: "https://github.com/cytechmobile/buddymeet",
                name: "BuddyMeet",
                description: "BuddyMeet is a Wordpress plugin that uses Jitsi Meet to add video and audio conferencing rooms to BuddyPress.",
                languages: ["PHP", "JavaScript", "CSS"],
                stargazers_count: 12
            },
            {
                url: "https://github.com/cytechmobile/radicle-migration-tool",
                name: "Radicle Migration Tool",
                description: "A command line tool for migrating your project to Radicle.",
                languages: ["JAVA"],
                stargazers_count: 10
            },
            {
                url: "https://github.com/tdakanalis/tor2e-theme",
                name: "TOR2E - Theme",
                description: "A Foundry VTT theme for The One Ring 2nd Edition RPG.",
                languages: ["CSS"],
                stargazers_count: 3
            },
            {
                url: "https://github.com/cytechmobile/buddytask",
                name: "BuddyTask",
                description: "BuddyTask is a Wordpress plugin that serves as task management tool for BuddyPress groups.",
                languages: ["PHP", "JavaScript", "CSS"],
                stargazers_count: 2
            },
            {
                url: "https://github.com/tdakanalis/token-action-hud-tor2e",
                name: "TOR2E - Token Action HUD",
                description: "A Foundry VTT module that presents TOR2E PC and NPC character sheets as an action menu",
                languages: ["JavaScript", "Less", "CSS"],
                stargazers_count: 0
            },
            ];

        if (repos.length === 0) {
            container.innerHTML = '<p>No public repositories found or user has no repositories.</p>';
            return;
        }

        for (const repo of repos) {
            const repoCard = document.createElement('div');
            repoCard.classList.add('pixel-card'); // Reuse existing .pixel-card styling
            //repoCard.classList.add('floating'); // Reuse existing .pixel-card styling

            // Sanitize description to prevent HTML injection if description contains HTML
            const description = repo.description ? repo.description.replace(/</g, "&lt;").replace(/>/g, "&gt;") : 'No description available.';
            let languages = '';
            for (const lang of repo.languages) {
                languages += `<span class="tag">${lang}</span>`;
            }

            // Star icon (simple SVG)
            const starSVG = `
                <svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" style="vertical-align: -0.125em;">
                    <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
                </svg>`;

            repoCard.innerHTML = `
                <div class="pixel-title" style="margin-bottom: 8px;">
                    <a href="${repo.url}" target="_blank" rel="noopener noreferrer" class="link">${repo.name}</a>
                </div>
                <div class="repo-body">
                    ${description}
                </div>
                <div class="repo-card-footer">
                    <div>
                        ${languages}
                    </div>
                    <span class="repo-stats">
                        ${starSVG} <span class="repo-stars">${repo.stargazers_count}</span>
                    </span>
                </div>
            `;
            container.appendChild(repoCard);
        }

    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
        container.innerHTML = '<p>Could not load projects. Please try again later.</p>';
    }
}

// Call the function when the DOM is loaded
if (document.readyState === 'loading') { // DOM still loading
    document.addEventListener('DOMContentLoaded', fetchAndDisplayRepos);
} else { // DOM already loaded
    fetchAndDisplayRepos();
}

document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profileImage');
    const themes = ['green', 'amber', 'blue'];
    let currentThemeIndex = 0;

    if (profileImage) {
        profileImage.addEventListener('click', () => {
            // Update currentThemeIndex to the next theme, cycling through the array
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
            const nextThemeName = themes[currentThemeIndex];

            // Remove existing theme classes
            document.body.classList.remove('theme-amber', 'theme-blue');

            // Add the new theme class (if not green, which is default)
            if (nextThemeName !== 'green') {
                document.body.classList.add('theme-' + nextThemeName);
            }
            // If nextThemeName is 'green', no class is added,
            // reverting to the default styles defined in :root
        });
    }
});
