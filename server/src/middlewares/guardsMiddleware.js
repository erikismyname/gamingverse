module.exports = {

    isGuest: () => (req, res, next) => !req.user ? next() : res.status(400).json({ message: 'You are already signed in!' }),

    isUser: () => (req, res, next) => req.user ? next() : res.status(401).json({ message: 'Please sign in!' }),

    isOwner: () => (req, res, next) => {

        const game = req.game;

        return req.user._id == game.owner ? next() : res.status(403).json({ message: 'You cannot modify this record!' });

    },

};