/**
 * Blog
 *
 * Main export of @ouroboros/blog module
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright Ouroboros Coding Inc.
 * @created 2023-12-02
 */

// Ouroboros modules
import { Service } from '@ouroboros/body';

// Import and re-export module files
export * as errors from './errors';

// Create an instance of Service and export it as default
const blog = new Service('blog');
export default blog;