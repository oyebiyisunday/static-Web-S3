// Secure GitHub API integration with input validation and error handling
const username = "oyebiyisunday";

// Input validation function
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                .replace(/[<>&"']/g, function(match) {
                    const escape = {
                        '<': '&lt;',
                        '>': '&gt;',
                        '&': '&amp;',
                        '"': '&quot;',
                        "'": '&#x27;'
                    };
                    return escape[match];
                });
}

// Validate username format (GitHub username rules)
function validateUsername(username) {
    const githubUsernameRegex = /^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$/;
    return githubUsernameRegex.test(username);
}

// Secure fetch with timeout and error handling
function secureGitHubFetch(username) {
    if (!validateUsername(username)) {
        console.error("Invalid GitHub username format");
        return Promise.reject(new Error("Invalid username"));
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    return fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/vnd.github.v3+json',
        },
        signal: controller.signal
    })
    .then(response => {
        clearTimeout(timeoutId);
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => {
        clearTimeout(timeoutId);
        throw error;
    });
}

// Fetch profile info with security measures
secureGitHubFetch(username)
    .then(profile => {
        // Validate and sanitize profile data
        if (profile && typeof profile === 'object') {
            const avatarElement = document.getElementById('avatar');
            const nameElement = document.getElementById('name');
            const linkElement = document.getElementById('github-link');
            
            if (avatarElement && profile.avatar_url) {
                // Validate avatar URL
                try {
                    const avatarUrl = new URL(profile.avatar_url);
                    if (avatarUrl.protocol === 'https:' && avatarUrl.hostname.includes('github')) {
                        avatarElement.src = profile.avatar_url;
                    }
                } catch (e) {
                    console.error("Invalid avatar URL");
                }
            }
            
            if (nameElement) {
                const displayName = sanitizeInput(profile.name || profile.login || '');
                nameElement.textContent = displayName;
            }
            
            if (linkElement && profile.html_url) {
                // Validate GitHub profile URL
                try {
                    const profileUrl = new URL(profile.html_url);
                    if (profileUrl.protocol === 'https:' && profileUrl.hostname === 'github.com') {
                        linkElement.href = profile.html_url;
                        linkElement.rel = 'noopener noreferrer'; // Security attribute
                    }
                } catch (e) {
                    console.error("Invalid profile URL");
                }
            }
        }
    })
    .catch(error => {
        console.error("Error fetching GitHub profile:", error);
        // Fallback handling - don't expose error details to user
        const nameElement = document.getElementById('name');
        if (nameElement && !nameElement.textContent) {
            nameElement.textContent = 'Sunday Oyebiyi';
        }
    });