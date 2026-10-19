import fs from 'node:fs';

const CONST = {
    username: 'andrei0x309',
    repo: 'clear-2fa-authenticator',
}


export const createMDHeader = (
    {title,description,}:
    {title: string, description: string}
) => {
return `---
title: ${title}
description: ${description}
---\n\n`
}

 
export const base64Decode = (str: string) => {
    return Buffer.from(str, 'base64').toString('utf-8');
}

export const getGithubFile = async ({
    username,
    repo,
    path,
    retry = 0
}: {
    username: string;
    repo: string;
    path: string;
    retry?: number
}): Promise<string> => {
    const url = `https://api.github.com/repos/${username}/${repo}/contents/${path}`
    const response = await fetch(url);
    const data = await response.text();
    const { content } = JSON.parse(data);
    let decodedContent;
    try {
        decodedContent = base64Decode(content);
    } catch {
        if (retry < 3) {
            await new Promise(resolve => setTimeout(resolve, 1000));
            return getGithubFile({ username, repo, path, retry: retry + 1 });
        } else {
            console.error('Error decoding content from GitHub, retry limit exceeded');
        }
    }

    return decodedContent || '';
}

// title: FAQ
// group: getting-started
// description: Frequently asked questions
// templateEngine: njk,md
// type: docs
// pageOrder: 3

export const createChangeLog = async () => {
    const header = createMDHeader({
        title: '""',
        description: 'Change Log for Clear 2FA Authenticator',
    })

    const content = await getGithubFile({
        username: CONST.username,
        repo: CONST.repo,
        path: 'CHANGELOG.md'
    }) 

    return `${header}\n${content}`
}

export const writeChangeLog = async () => {
    const changeLog = await createChangeLog();
    fs.writeFileSync('./src/content/docs/changelog/index.md', changeLog, {encoding: 'utf-8', flag: 'w+'});
}