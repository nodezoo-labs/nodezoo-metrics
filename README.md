![Nodezoo][Logo]

# nodezoo-stats
This module handles stat collection for the [NodeZoo][] system.

- __Sponsor:__ [nearForm][]
- __Lead:__ [Dean McDonnell][Lead]

## Install
1. clone this repo into a root _/nodezoo_ folder.
2. run `npm install`

## Starting
To start simply run,

```
npm run srv-dev
```

### Tagging and Logs
To tag your service and set up logs simply pass the relevant switches on start,

```
npm run srv-dev -- --seneca.options.tag=nodezoo-stats --seneca.log.all
```

## Inbound Messages
This micro-service emits no inbound messages.

## Outbound Messages
This micro-service emits no outbound messages.

## Contributing
The [NodeZoo org][] encourages __open__ and __safe__ participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

- Before contributing please review our __[Code of Conduct][CoC]__

## License
Copyright (c) 2015, Dean McDonnell and other contributors.
Licensed under [MIT][].


[MIT]: ./LICENSE
[CoC]: ./CoC.md
[Lead]: https://github.com/mcdonnelldean
[nearForm]: http://www.nearform.com/
[NodeZoo]: http://www.nodezoo.com/
[NodeZoo org]: https://github.com/nodezoo
[Logo]: https://raw.githubusercontent.com/rjrodger/nodezoo-web/to-redux/client/assets/img/logo-nodezoo.png
