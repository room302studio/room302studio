---
title: "Election 2025"
client: "Decision Desk HQ"
brief: "Broadcast election graphics and live prediction market visualizations"
description: "We built on Decision Desk HQ's Election View System through the autumn of 2025 — the broadcast side of their election coverage, including interactive NYC mayoral results and live prediction market data."
role: 'Data Visualization Development'
date: "2025-11-01"
technology: 'Vue, D3, WebSockets'
tags: ["dataviz", "interactive", "mapping", "news", "elections", "broadcast"]
url: "https://decisiondeskhq.com"
---

We spent the autumn of 2025 building on Decision Desk HQ's Election View System — the broadcast side of their election coverage, where an operator-facing controller drives the graphics going out on air. Most of the work was the interactive New York City mayoral results: real borough shapefiles, drill-down by borough, and live Polymarket and Kalshi prediction market data pushed to the display, alongside governor, US House, and California's Proposition 50.

Broadcast has its own constraints — colors that survive a TV signal, legends that stay readable, no layout shifts on air, and graceful behavior when a data feed stalls mid-broadcast.
