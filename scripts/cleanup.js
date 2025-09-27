import fs from 'fs';
import path from 'path';

// This script is executed after the build process to clean up unwanted files.

const wranglerConfigFile = path.join('dist', 'wrangler.json');

console.log('--- Running Post-Build Cleanup Script ---');

if (fs.existsSync(wranglerConfigFile)) {
  try {
    fs.unlinkSync(wranglerConfigFile);
    console.log(`[SUCCESS] Successfully deleted: ${wranglerConfigFile}`);
  } catch (err) {
    console.error(`[ERROR] Failed to delete ${wranglerConfigFile}:`, err);
    process.exit(1); // Exit with error code to fail the build if cleanup fails
  }
} else {
  console.log(`[INFO] File not found, skipping deletion: ${wranglerConfigFile}`);
}

console.log('--- Cleanup Script Finished ---');
