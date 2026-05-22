# ShubertUsIndex

![GitHub Repo Size](https://img.shields.io/github/repo-size/shubes101/ShubertUsIndex)
![GitHub Issues](https://img.shields.io/github/issues/shubes101/ShubertUsIndex)
![GitHub Stars](https://img.shields.io/github/stars/shubes101/ShubertUsIndex)
![GitHub Forks](https://img.shields.io/github/forks/shubes101/ShubertUsIndex)

ShubertUsIndex is a personalized link board — a single page to collect and share your important links, similar to a bulletin board. It's a simple and customizable way to showcase your online presence.

## Features

- **Customizable**: Tailor the board to your preferences with a variety of options.
- **Responsive**: Designed to work seamlessly on all screen sizes and devices.
- **Beautiful Design**: An attractive, user-friendly layout.
- **Easy to Use**: Setting up and managing the board is straightforward.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/shubes101/ShubertUsIndex.git
cd ShubertUsIndex
```

2. Install the necessary dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Visit `http://localhost:3000` in your web browser to see the board in action.

## Usage

1. Customize the board by editing `config.ts` to include your name, description, and social links.

2. Customize the visual theme by modifying `themes/themes.ts`. You can change the colors and fonts to suit your preferences, then set the `theme` property in `config.ts` to your theme name.

3. Add your profile picture by replacing the existing image at `/public/profile.png`.

4. Add a background image by replacing the existing image at `/public/background.webp`.

5. Add links in `config.ts`. You can include the name, URL, and an optional icon.

6. Customize the app's title in `config.ts`.

7. Deploy to a hosting service of your choice.

Additionally, there are some animations you can toggle in `config.ts`, and you can choose to sort the links by their length to make the board look more organized.

## Credits

This project is based on [LinkBoard](https://github.com/HangerThem/linkboard) by Frank Borisjuk (HangerThem), used under the terms of the AGPLv3 license.

## License

This project is licensed under the AGPLv3 License. For more information, please refer to the [LICENSE](LICENSE) file.
