---
draft: true
title: "The Art of Coding: A Developer's Guide"
description: "How I approach writing code to accomplish specific goals—from personal projects to client work, fast prototypes to production systems."
date: 2025-02-12T10:00:00-05:00
author: EJ Fox
authorEmail: ejfox@room302.studio
tags: [process, programming, philosophy]
category: process
---

# The Art of Coding: A Developer's Guide

The shape of a project changes depending on context: Personal vs collaborative. Paid vs passion project. Fast vs methodical. Public vs private.

After years of writing code across all these contexts, I've developed principles that apply regardless of the constraints.

## Start With Clear Goals

Sometimes the goal boils down to: **"Who are we trying to make happy?"**

That could be a specific user, a stakeholder, or the person commissioning the work. Understanding who controls the project's future and what they need from it guides every technical decision.

On personal projects, the goals might not be obvious. It's worth articulating why something interests you. Treat yourself as your own client—write a clear brief you can return to when motivation wavers.

Personal projects serve different purposes:
- Explore curiosities
- Learn new technologies
- Collaborate with interesting people
- Create promotional material
- Generate work you want to do more of

You can usually only accomplish a few of these. Knowing your motivation helps you avoid diving deep into the wrong areas and burning out.

## Write User Stories

User stories describe functionality from the user's perspective:

> "As a [type of user], I want [goal] so that [reason]."

Example: "As a data analyst, I want to export my visualization as SVG so that I can edit it in Illustrator."

This format forces you to think about:
- **Who** is using this feature
- **What** they want to accomplish
- **Why** it matters to them

Even on solo projects, writing user stories clarifies priorities and catches edge cases early.

## Define Acceptance Criteria

Acceptance criteria are pass/fail statements that determine whether a feature works as intended. They create shared understanding about what "done" means.

Good acceptance criteria are:
- **Clear**: No ambiguity about what's being tested
- **Specific**: Concrete, not vague
- **Measurable**: You can objectively verify success
- **Testable**: Someone else could validate it

I often frame acceptance criteria as user stories:
- "A user can upload a CSV file under 10MB"
- "Visualizations render in under 2 seconds on a mid-range laptop"
- "Error messages explain what went wrong and how to fix it"

## Set Real Deadlines

Deadlines aren't arbitrary—they provide necessary structure. A clearly defined deadline:
- Creates urgency that focuses work
- Forces scope decisions
- Establishes shared expectations
- Prevents perfectionism paralysis

One rule: **Do not break deadlines.**

If you're going to miss a deadline, communicate early and reset expectations. Trust erodes fast when deadlines become suggestions.

## Gather Context

Before writing code, understand:

### Stakeholder Needs
What do they expect? Timeline, budget, technical requirements, business impact.

### Project Goals
What problem are you solving? Why does this matter?

### Technical Infrastructure
What tools, platforms, and systems will you use? What constraints exist?

### User Expectations
If there's a user base, what do they need? What will frustrate them?

### Market Trends
What else exists in this space? What can you learn from competition or adjacent projects?

### Prior Work
What's already been done? Learn from existing solutions to avoid duplicate effort and repeated mistakes.

## Core Principle: Joy-Driven Development

The best work happens when you're energized by what you're building.

This doesn't mean only working on fun projects—it means finding the aspects of any project that spark curiosity, challenge you to grow, or let you collaborate with interesting people.

When the work feels like a slog, step back and ask: "What would make this interesting again?"

Sometimes it's refactoring ugly code. Sometimes it's trying a new technique. Sometimes it's just talking through the problem with someone smart.

Joy is a renewable resource, but you have to actively cultivate it.

## The Meta-Principle: Make It Work, Make It Right, Make It Fast

1. **Make it work**: Get something functional, even if it's ugly
2. **Make it right**: Refactor for clarity and maintainability
3. **Make it fast**: Optimize only when you have evidence it's needed

Most projects die in step 1 because people skip straight to optimizing code that doesn't work yet.

Ship something functional. Then make it better.

---

**Want to see this approach in action?** Check out our [livestreams](/blog/livestreaming-our-process) where I code and talk through decisions in real-time.
