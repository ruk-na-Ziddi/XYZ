typedef struct tree BSTree;
typedef struct node Node;
typedef Node * Node_ptr;

struct tree{
	Node_ptr root;
};

struct node{
	int data;
	Node_ptr rightNode;
	Node_ptr leftNode;
};


BSTree createBSTree(void);
Node_ptr createNode(int);
int insert(BSTree *, int);
Node * find(BSTree, int);
Node * deleteData(BSTree *, int);
void PrintInorder(Node *node);
void PrintPreorder(Node *node);
void PrintPostorder(Node *root);