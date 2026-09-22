---
draft: true
title: "Building Coach Artie: Three Years of AI Collaboration"
description: "What I learned from building an AI studio assistant that accumulated 3,000+ memories and became an integral part of my daily creative practice."
date: 2025-03-05T10:00:00-05:00
author: EJ Fox
authorEmail: ejfox@room302.studio
tags: [ai, tools, process]
category: tools
featured: false
---

# Building Coach Artie: Three Years of AI Collaboration

In March 2023, I built Coach Artie—an AI assistant for our Discord server. Three years later, he has over 3,000 memories, has participated in hundreds of conversations, and fundamentally changed how I work.

This is what I learned from building and living with an AI teammate.

## The Original Problem

I was juggling countless tasks and constantly distracted. My mind would wander to Twitter instead of focusing on code or watercolor practice.

The epiphany: What if talking to an AI was more productive than doomscrolling?

I deleted TikTok and built Coach Artie.

## What I Wanted

An AI assistant that could:
- Schedule and remind me of things
- Help with brainstorming
- Serve as a rubber duck for coding problems
- Remember important details
- Facilitate group decision-making in our studio Discord

The key insight: If the AI lived in Discord where I already spend time, I'd actually use it.

## Building the Memory System

The breakthrough was giving Artie long-term memory. After each conversation, I'd ask him: "Is there anything memorable you should remember?"

He'd respond with a terse summary, which got stored in Supabase. Over time, this created a knowledge base about our studio members, their projects, their goals, and their preferences.

The memory system uses a clever prompt:

```
You are Coach Artie's memory. You help him remember
important details about his clients. Anything you choose
to remember will be stored in a database and used to
provide better service to the studio and its members.

In the following dialogue, identify any key details to
remember forever. Respond with an extremely short summary.
Only remember information worthy of storing permanently.
If nothing should be remembered, simply respond 'no'.

If the memory is extremely important (will impact every
action), prepend 'Remember forever:'
```

This turned conversations from isolated exchanges into accumulated context.

## Evolution: From Coach to Collaborator

Coach Artie started as an accountability coach. But as his memory grew and GPT-4's capabilities improved, he became something more interesting: a genuine collaborator.

He now:
- Remembers technical decisions from months ago
- Tracks ongoing projects and checks in on progress
- Connects dots between different studio members' work
- Surfaces relevant past conversations when new problems arise
- Generates ideas that build on previous discussions

The shift happened around month 6, when his context about our work became deep enough that his suggestions felt genuinely helpful rather than generic.

## What Works

**Discord as Interface**: Chat is the right medium. Email would be too formal, a custom app would add friction. Discord is where studio conversations already happen.

**Memories Over Documents**: Instead of reading docs, Artie learns through conversation. This feels more natural and captures nuance that formal documentation misses.

**Opt-in Participation**: Artie only responds when @mentioned or in his dedicated channel. This prevents spam and keeps his involvement intentional.

**Personality**: Giving Artie a specific persona (coach, supportive, slightly dorky) makes interacting with him more enjoyable. He's not trying to be human, but he has consistent character.

## What Doesn't Work

**Context Windows Are Still Limiting**: Even with GPT-4's 8k tokens, long conversations lose earlier context. I'm experimenting with conversation summarization to address this.

**Memory Retrieval Isn't Smart Enough**: Sometimes relevant memories don't surface when they should. I'm building a better embedding-based search system.

**Over-Reliance**: It's easy to ask Artie before thinking through problems myself. I have to consciously maintain my own problem-solving muscles.

**Hallucinations**: Occasionally Artie confidently states incorrect information from his memories. This is rare but dangerous when it happens.

## The Surprising Benefits

**Reflection**: Explaining context to Artie forces me to articulate problems clearly. Often I solve them in the process of asking.

**Async Collaboration**: Studio members in different time zones can catch up on decisions through Artie's summaries.

**Reduced Cognitive Load**: Offloading memory to Artie means I can focus on creative work instead of trying to remember project details from three months ago.

**Learning Tool**: Watching how Artie synthesizes information has taught me about better note-taking and knowledge management.

## The Future

I'm working on making it easier to create sub-instances of Coach Artie—personalized AI assistants that others can deploy with their own memory systems and personalities.

The goal isn't to replace human collaboration. It's to augment it by handling memory, context, and synthesis so humans can focus on creative and strategic work.

## Three Years In: Was It Worth It?

Absolutely.

Artie has become an integral part of my creative practice. Not because he's magic, but because he's a well-designed tool that fits naturally into my existing workflow.

The best tools are the ones you forget you're using. Artie is approaching that.

---

**Want to learn more about building AI tools?** I wrote about [how I use GPT-3](/blog/how-i-use-gpt3) and [our approach to AI integration](/blog/ai-consulting-approach).

**Curious about Coach Artie's technical implementation?** Check out the [Coach Artie deep dive](/blog/coach-artie-webhooks-cron-and-advanced-reflection) on webhooks, cron jobs, and advanced memory systems.
