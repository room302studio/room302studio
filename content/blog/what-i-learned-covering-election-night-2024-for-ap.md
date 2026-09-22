---
draft: true
title: "What I Learned Covering Election Night 2024 for AP"
description: "Lessons from building real-time data visualizations for millions of viewers under extreme pressure, processing 120,000+ survey responses on election night."
date: 2025-02-28T10:00:00-05:00
author: EJ Fox
authorEmail: ejfox@room302.studio
tags: [case-study, dataviz, news]
category: case-study
---

# What I Learned Covering Election Night 2024 for AP

On November 5th, 2024, I was part of the Associated Press team visualizing VoteCast data—survey responses from over 120,000 voters—for millions of people trying to understand election results as they came in.

This was my second election cycle with AP, and it taught me things about real-time data visualization that you can't learn anywhere else.

## The Scale

Election night is unlike any other data viz project:

- **Millions of concurrent users**: Your visualization needs to handle traffic spikes that would crash most systems
- **Real-time updates**: Data changes every few minutes, visualizations need to update instantly
- **Zero room for error**: A bug at 8pm EST when polls close? You've just failed in front of the entire country
- **Impossible deadlines**: "We need this by 6pm" means 6pm, not 6:05pm

The AP VoteCast team processes surveys from 120,000+ respondents in real-time, breaking down voter demographics, issue priorities, and electoral patterns as results come in.

My role was integrating with the existing team, helping develop visualizations that could handle this scale and pressure.

## Lesson 1: The Data Will Break

No matter how much you plan, election night data will surprise you.

A county reports 150% turnout because of a data entry error. A demographic category you didn't account for appears in the live feed. Network latency causes updates to arrive out of order.

The solution isn't to prevent all edge cases—it's to build systems that degrade gracefully:

- **Default to showing something**: Better to show slightly stale data than a blank screen
- **Validate aggressively**: If the data looks impossible, it probably is
- **Log everything**: When something breaks at 9pm, you need to debug it in real-time
- **Build manual overrides**: Sometimes a human needs to step in and fix bad data

## Lesson 2: Performance Is Features

On election night, a slow visualization is a broken visualization.

When millions of people are refreshing your page simultaneously, every millisecond matters. We obsessed over:

- **Reducing bundle size**: Code-splitting, tree-shaking, lazy loading
- **Optimizing renders**: Memoization, virtual scrolling, debouncing
- **Caching strategically**: CDNs, service workers, aggressive HTTP caching
- **Minimizing API calls**: Batching requests, WebSockets for live updates

The goal: Under 2 seconds from click to fully rendered visualization, even on mid-range laptops.

## Lesson 3: Work With Existing Systems

AP has decades of election coverage infrastructure. My job wasn't to rebuild it—it was to integrate with it.

This meant:
- Learning their data pipeline and formats
- Adapting to their deployment process
- Following their code review standards
- Working within their CMS constraints

The best collaborators don't impose their preferred tech stack. They adapt to what works for the organization.

## Lesson 4: Clear Communication Under Pressure

At 7pm, when you discover a critical bug and polls are closing in an hour, clear communication is everything.

What worked:
- **Dedicated Slack channels**: Separate channels for bugs, deployment, and general chat
- **Status updates**: "Working on it" every 15 minutes so people know you're on it
- **Specific asks**: "I need someone to verify this data" not "something's wrong"
- **No blame culture**: We're all trying to ship under impossible deadlines

What didn't work:
- Long messages (no one reads them under pressure)
- Assumptions about who's handling what
- Waiting to share bad news

## Lesson 5: Practice Makes Possible

The VoteCast team ran dress rehearsals for weeks before election night. We practiced:
- Deployment procedures
- Rollback processes
- Communication protocols
- Incident response

When real problems hit on election night, we'd already solved them in practice.

The boring preparation is what makes the impossible possible.

## The Aftermath

By midnight, we'd served visualizations to millions of people, processing updates from 120,000+ respondents without major incidents.

The work was nominated for awards. But the real reward was knowing that when it mattered most, the systems held up.

## What This Means for Other Projects

Election night is an extreme case, but the lessons transfer:

**Build for failure**: Your system will break. Plan for graceful degradation.

**Performance is non-negotiable**: Users won't wait for slow interfaces.

**Communicate relentlessly**: Especially under pressure, overcommunicate.

**Practice the hard parts**: Run drills for your worst-case scenarios.

**Integrate, don't rebuild**: Work with existing systems rather than fighting them.

## Would I Do It Again?

Absolutely.

There's something uniquely energizing about working on something millions of people will use, where the stakes are real, and there's no room for "we'll fix it later."

It's the kind of pressure that makes you a better developer.

---

**Want to work on high-stakes projects?** [Get in touch](/contact) about consulting work where deadlines actually matter.
