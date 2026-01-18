import asyncio
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None
    
    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()
        
        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )
        
        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)
        
        # Open a new page in the browser context
        page = await context.new_page()
        
        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:8080", wait_until="commit", timeout=10000)
        
        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass
        
        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass
        
        # Interact with the page elements to simulate user flow
        # --> Assertions to verify final state
        frame = context.pages[-1]
        await expect(frame.locator('text=Ship faster, decide smarter').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ProductFlow Studio cuts through the noise. Get your team aligned, your data clear, and your next move obvious.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Three tools built for teams that move fast').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Real-time collaboration without the meeting overhead').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Dashboards that show you what matters, not noise').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Turn decisions into action').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ProductFlow Studio transforms raw information into clarity. Watch patterns emerge that matter, cut through the static, and know exactly what to do next.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Your team stays connected without drowning in messages. Everyone knows the plan, sees the progress, and moves in the same direction.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Stop guessing. ProductFlow Studio gives you the facts you need to ship with certainty. Your decisions rest on solid ground, not hunches.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Priorities become clear. Distractions fade. You launch faster because you focus on what actually moves the needle for your users.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=From teams who ship faster').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=ProductFlow Studio killed our status meetings. We just check the dashboard and move on.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=We cut our decision cycle in half. The data is always there, always current, always honest.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Our team finally speaks the same language. No more guessing what anyone meant.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=No setup headaches, no learning curve that kills momentum').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Plug in your tools and data sources').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Your team sees the same picture').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Turn insight into action without the friction').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Simple pricing').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Starter plan').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=$19/mo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Professional plan').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=$29/mo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Enterprise plan').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=$49/mo').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Join teams that ship with clarity and confidence every day').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Stay in the loop').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Subscribe').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Everything you need to know about ProductFlow Studio').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Most teams are up and running in under an hour. Connect your tools, invite your people, and start seeing your data in one place. No engineering required.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Yes. Start with our Starter plan and see if it fits. No credit card needed, no tricks. If it\'s not for you, walk away clean.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Our Enterprise plan includes custom integrations and a dedicated account manager who works with your team. Reach out and we\'ll talk through what you need.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=We encrypt everything in transit and at rest. We\'re SOC 2 compliant and audit regularly. Your data is yours, and we treat it that way.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Yes. Starter plans get email support. Professional and Enterprise get priority support and direct access to our team. We\'re here when you need us.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Get in touch').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=hello@productflowstudio.com').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=+1 (415) 555-0100').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=415 Mission Street, San Francisco CA 94105').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Level 2, 50 Bridge Street, Sydney NSW 2000').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=1800 567 890').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=hello@productflow.com').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=© 2025 ProductFlow Studio. All rights reserved.').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Privacy policy').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Terms of service').first).to_be_visible(timeout=30000)
        await expect(frame.locator('text=Cookie settings').first).to_be_visible(timeout=30000)
        await asyncio.sleep(5)
    
    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()
            
asyncio.run(run_test())
    