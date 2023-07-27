import './signup.scss';
import Component from '@/plugins/component';

export default class SignUp extends Component {
  render() {
    return `
            <div class="signup-page">
                <h2>Welcome to Sign Up Page</h2>
                    <form>
                        <input type="text" name="username" placeholder="Username" required>
                        <input type="email" name="email" placeholder="Email" required>
                        <input type="password" name="password" placeholder="Password" required>
                        <button type="submit">Sign Up</button>
                    </form>
            </div>
        `;
  }
}
