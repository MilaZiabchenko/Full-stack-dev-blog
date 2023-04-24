const articleValidator = {
    $jsonSchema: {
        bsonType: 'object',
        title: 'Article Object Validation',
        required: ['_id', 'name', 'upvotes', 'upvoteIds', 'comments'],
        properties: {
            _id: { bsonType: 'objectId' },
            name: {
                bsonType: 'string',
                description: 'Name of the article is required and is a string'
            },
            upvotes: {
                bsonType: 'int',
                minimum: 0,
                description: 'Number of upvotes received by the article is required and must be 0 or positive integer'
            },
            upvoteIds: {
                bsonType: 'array',
                description: 'List of ids of the users who upvoted the article must be an array',
                items: {
                    bsonType: 'string'
                }
            },
            comments: {
                bsonType: 'array',
                description: 'List of comments added to the article must be an array of objects',
                items: {
                    bsonType: 'object',
                    properties: {
                        postedBy: {
                            bsonType: 'string',
                            description: 'Name of the author of the comment is required and is a string'
                        },
                        text: {
                            bsonType: 'string',
                            description: 'Text of the comment is required and is a string'
                        }
                    }
                }
            },
            canUpvote: {
                bsonType: 'bool',
                description: 'Can upvote can only be true or false'
            }
        },
        additionalProperties: false
    }
};
export { articleValidator };
//# sourceMappingURL=Article.schema.js.map