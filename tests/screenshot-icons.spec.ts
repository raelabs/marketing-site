import { test, expect } from '@playwright/test';

// These tests are skipped because the ContactForm modal has been removed from the homepage
// as part of the product launch redesign. The homepage now has a Product Preview CTA instead.
test.describe('Contact Form Icons', () => {
  test.skip('all agent icons render correctly', async ({ page, context }) => {
    // Clear cache
    await context.clearCookies();

    await page.goto('/', { waitUntil: 'networkidle' });

    // Click Contact button to open modal
    await page.click('button:has-text("Contact")');
    await page.waitForTimeout(500);

    // Verify the form is visible
    await expect(page.locator('text=Which coding agent')).toBeVisible();

    // Get all agent icon images
    const icons = page.locator('button[type="button"] img[src*="agents"]');
    const count = await icons.count();

    // Should have at least 11 agent icons + 1 "Other" icon = 12
    expect(count).toBeGreaterThanOrEqual(12);

    // Verify each icon is visible and has dimensions
    for (let i = 0; i < count; i++) {
      const icon = icons.nth(i);
      await expect(icon).toBeVisible();
      const box = await icon.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.width).toBeGreaterThan(0);
      expect(box!.height).toBeGreaterThan(0);
    }
  });

  test.skip('captures visual screenshots', async ({ page, context }) => {
    // Clear cache
    await context.clearCookies();

    await page.goto('/', { waitUntil: 'networkidle' });

    // Click Contact button to open modal
    await page.click('button:has-text("Contact")');
    await page.waitForTimeout(500);

    // Take screenshot of the modal
    await page.screenshot({
      path: 'tests/screenshots/contact-form-light.png',
      fullPage: false
    });

    // Also take a zoomed screenshot of just the coding agents section
    const agentsSection = page.locator('text=Which coding agent');
    if (await agentsSection.isVisible()) {
      await agentsSection.screenshot({
        path: 'tests/screenshots/agents-section.png'
      });
    }
  });
});
